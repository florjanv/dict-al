<template>
    <div class="columns">
        <div class="column">
            <!-- div-i me fjalen e gjetur-->
            <transition-group name="result-group">
                <div class="tile is-ancestor" v-for="item in this.books" :key="item.id">
                    <div class="tile is-parent">
                    <div class="tile is-child box">
                        <div v-if="searchEnglish"> <!-- Translate from eng -> alb-->
                            <p><span class="tag has-text-weight-bold">Searched word: </span> <span class="title is-size-6-mobile">{{item.eng}}</span></p>
                            <hr>
                            <div class="columns is-gapless is-mobile">
                                <div class="column">
                                    <p><span class="tag has-text-weight-bold">Result:</span> <span class="title is-size-6-mobile has-tooltip-right" @click = 'copyClipboard("Alb")' :data-tooltip="copiedSmsEng">{{item.alb}}</span></p>
                                </div>
                                <div class="column" id="latin" v-if="item.latin_name">
                                    <p><span class="tag has-text-weight-bold">Latin:</span> <span class="title is-size-6-mobile has-tooltip-right" :data-tooltip="copiedSmsEng" @click = 'copyClipboard("Latin")'>{{item.latin_name}}</span></p>
                                </div>
                            </div>
                            <div class="columns is-gapless is-mobile">
                                <div class="column">
                                    <p><span class="tag has-text-weight-bold">Description:</span> {{item.desc_eng}}</p>
                                    <p><span class="tag has-text-weight-bold">Field:</span> {{item.field_eng}}</p>
                                    <p><span class="tag has-text-weight-bold" v-if="item.source">Source:</span>{{item.source}}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div v-else> <!-- Translate from alb -> eng-->
                            <p><span class="tag has-text-weight-bold">Searched word: </span> <span class="title is-size-6-mobile">{{item.alb}}</span></p>
                            <hr>
                            <div class="columns is-gapless is-mobile">
                                <div class="column">
                                    <p><span class="tag has-text-weight-bold">Result:</span> <span class="title is-size-6-mobile has-tooltip-right" :data-tooltip="copiedSmsEng" @click = 'copyClipboard("Eng")'>{{item.eng}}</span></p>
                                </div>
                                <div class="column" id="latin" v-if="item.latin_name">
                                    <p><span class="tag has-text-weight-bold">Latin:</span> <span class="title is-size-6-mobile has-tooltip-right" :data-tooltip="copiedSmsEng" @click = 'copyClipboard("Latin")'>{{item.latin_name}}</span></p>
                                </div>
                            </div>
                            <div class="columns is-gapless is-mobile">
                                <div class="column">
                                    <p><span class="tag has-text-weight-bold">Description:</span> {{item.desc_alb}}</p>
                                    <p><span class="tag has-text-weight-bold">Field:</span> {{item.field_alb}}</p>
                                    <p><span class="tag has-text-weight-bold" v-if="item.source">Source:</span>{{item.source}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            <!-- div-i kur nuk gjendet fjala-->

                <div v-if="books == ''">
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <p><span class="has-text-weight-bold">{{this.previousWord}}</span>{{this.displaySMS}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>

    </div>

</template>

<script>

export default {
    name: 'ResultFound',
    props:['books','searchEnglish','searchWord','displaySMS','previousWord'],
    data(){
        return{
            copied: false,
            copiedSmsEng: "Click to copy",
        }
    },
    methods:{
        copyClipboard(id){
            // Get the text field
            if (id == "Alb"){
                navigator.clipboard.writeText(this.books[0].alb)
            }
            else if (id == "Eng"){
                navigator.clipboard.writeText(this.books[0].eng)
            }
            else if(id == "Latin"){
                navigator.clipboard.writeText(this.books[0].latin_name)
            }
        }
    }
}
</script>

<style scoped>
.box,p {
    text-align: left;
    color: var(--blu2);
}
.box{
    background-color: var(--gri2);
}
.tag{
    background-color: var(--gri2);
    color: var(--blu);
}
span.is-4{
    color: var(--blu2);
}
hr{
    background-color: var(--gri);
}
#latin{
    text-align: right;
}
/* paragraph transitions - fade in*/
.result-group-enter-from{
  opacity: 0;
}
.result-group-enter-to{
  opacity: 1;
}
.result-group-enter-active{
  transition: all 1s ease;
}
</style>
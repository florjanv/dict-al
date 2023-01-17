<template>
    <div class="columns">
        <div class="column" v-if='this.similarBooks'>
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <transition-group name="similar-group">
                    <div class="tile is-child box">
                        <!-- rreshti i fjaleve te peraferta -->
                        <span>{{this.nearWords}}: </span>
                        <div v-for='word in this.similarBooks' :key="word.id">
                            <div v-if="this.searchEnglish">
                                <a class="tag" @click="runSearch(word)">{{word.eng}}</a>
                            </div>
                            <div v-else>
                                <a class="tag" @click="runSearch(word)">{{word.alb}}</a>
                            </div>
                        </div>
                    </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SimilarWord',
    props: ['books','similarBooks','nearWords','searchEnglish'],
    methods:{
        //send the clicked suggestion to parent
        runSearch(a){
            this.$emit('updateBooks', a)
        },
    },
}
</script>

<style scoped>

a,span { 
    float:left;
    margin-left: 5px;
    }
.box{
    background-color: var(--gri2);
}
.tag{
    background-color: var(--blu);
    color: var(--gri);
}
.tag:hover{
    background-color: var(--blu2);
}

@media screen and (max-width: 800px) {
  .box {
    height: 100px;
  }
}

 /* paragraph transitions - fade in  */
.similar-group-enter-from{
    opacity: 0;
}
.similar-group-enter-to{
    opacity: 1;
}
.similar-group-enter-active{
    transition: all 1s ease;
} 
</style>
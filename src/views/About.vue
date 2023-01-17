<template>
    <div class="columns is-gapless is-centered"></div> <!-- rresht bosh-->
    <div class="columns is-gapless is-centered">
    <div class="column is-3">
    <!-- kolone boshe Majtas-->
    </div>
    <div class="column is-6 is-gapless">
    <!-- Blloku i pare-->
    <div class="columns is-gapless is-centered">
        <div class="column is-three-quarters">
            <div class="box">
                <h1 class="title is-4">Technical Dictionary English-Albanian</h1>
                <p class="subtitle">This project is published in January-2023.</p>
                <p>The project is still under update. A lot of new information will be added this year.</p>
                <div class="columns">
                    <div class="column">
                        <div class="list">
                            <ul>
                                <div class="list-item">
                                    <li>
                                        <i class="fa-solid fa-check"></i> Forestry
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>

            </div>
        </div>
        <div class="column"></div><!-- Kolone boshe-->
    </div>
    <!-- Contributors -->
    <div class="columns is-gapless is-centered">
        <div class="column"></div><!-- Kolone boshe-->
        <div class="column"></div><!-- Kolone boshe-->
        <div class="column is-three-quarters">
            <div class="box">
                <h1 class="title is-4">Your contribution is very important...</h1>
                <p>If you have a list of technical words and want to add in this dictionary or if you find any mistake. Check out our facebook site to get in touch with this project.</p>
                <p> You can contribute also as a developer, soon the project will be shared in github.</p>
            </div>
        </div>
    </div>
    <!-- Blloku i trete-->
    <div class="columns is-gapless is-centered">
        <div class="column"></div><!-- Kolone boshe-->
        <div class="column is-two-thirds">
            <div class="box">
                <h1 class="subtitle">Simple is better than complex!</h1>
            </div>
        </div>
        <div class="column"></div><!-- Kolone boshe-->
    </div>
    </div>
    <div class="column is-3">
    <!-- kolone boshe Majtas-->
    </div>
    </div>
    <div class="columns is-gapless is-centered"></div> <!-- rresht bosh-->
</template>

<script>
    export default{
        name: 'About',
        components: {}
    }
</script>

<style scoped>
 h1{
    color: var(--blu2);
 }
 .box {
    background-color: var(--gri2);
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2%;

}
.title{
    color: var(--blu2);
}
p{
    color: var(--blu);
}

.list-item{
    color: var(--blu2);
}
</style>
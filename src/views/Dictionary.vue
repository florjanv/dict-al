<template>
  
    <div class="columns is-gapless is-centered">
      <div class="column is-2">
        <!-- kolone boshe Majtas-->
      </div>
      <div class="column">
        <section class="section is-small">
          <!--ndryshimit te gjuhes -->
          <div class="columns">
            <div class = "column">
                <div class="content has-text-centered" >
                    <div v-if="searchEnglish" >
                        <h1 class="title" id="switchLanguage" data-tooltip="Switch languange"><span @click = 'switchSearch'>English  <i class="fa-solid fa-arrow-right-arrow-left"></i>  Albanian </span></h1>
                      </div>
                    <div v-else>
                        <h1 class="title" data-tooltip="Switch language"><span @click = 'switchSearch'>Albanian <i class="fa-solid fa-arrow-right-arrow-left"></i> English</span></h1>
                    </div>
                </div>
            </div>
          </div>
          <!-- kerkimi i fjales -->
          <div class="columns">
              <div class = "column is-full">
                  <input class="input is-focused" id="searchInput" type="text" :placeholder="inputText" v-model="searchWord" v-on:keyup.enter="searchDict">
              <!-- </div>
              <div class = "column is-2"> -->
                  <button class="button is-primary" id="searchBtn" @click="searchDict">{{searchButton}}</button>
              </div>
          </div>
          <!--Componenti i resultatit -->
          <ResultFound :books="this.books" :searchEnglish="this.searchEnglish" :searchWord="this.searchWord" :displaySMS="this.displaySMS" :previousWord="this.previousWord" />
          <!--Componenti i shfaqes se fjaleve te peraferta -->
          <SimilarWord :books="this.books" :similarBooks="this.similarBooks" :nearWords="this.nearWords" :searchEnglish="this.searchEnglish" v-on:updateBooks="updateBooks"/>
        </section>
      </div>
      <div class="column is-2">
        <!-- kolone boshe djathtas-->
      </div>
    </div>
  </template>
  
  <script>
  import ResultFound from "@/components/ResultFound.vue";
  import SimilarWord from "@/components/SimilarWord.vue";
  import 'bulma-tooltip/dist/css/bulma-tooltip.min.css';
  
  
  export default {
    name: 'App',
    components:{ResultFound, SimilarWord,},
    data(){
      return{
        books:null,
        searchWord:null,
        searchEnglish:true,
        previousWord:null,
        similarWords:null,
        searchWay:'eng-alb',
        searchButton:'Search', //emri i butonit
        inputText:'Type a word',//text i inputit
        displaySMS:", not found in our database! Be sure your search is longer than two letters, has no numbers and is different from previous.", //sms kur nuk gjendet fjala
        contribButton:'@Contributors', //mirnjohje ndaj kontibuesve
        contributors:null,
        similarBooks:null,
        nearWords:"Nearby words",
      }
    },
    methods: {
          switchSearch(){
              //ndryshimi i gjuhes sipas kerkimit
              this.searchEnglish = !this.searchEnglish
              if(this.searchEnglish){
                  this.searchWay='eng-alb'
              }
              else{
                  this.searchWay = 'alb-eng'
              }
          },
          searchDict(){
              //dont sent request to server for spaces, empty input and for word less than 3 letters
              if (this.searchWord === null || Array.from(this.searchWord)[0] === ' ' || this.searchWord.length<3 || Number((Array.from(this.searchWord)[0]))){
                  this.books = []
                  this.similarBooks = []
              }
              else if (this.previousWord === this.searchWord){
                  this.searchWord = '';
                  //avoid searching for the same word, just do nothing and keep same result.
              }
              else {
                  this.similarBooks = []
                  this.similarInit(this.searchWay,this.searchWord)//search for similar
                  this.init(this.searchWay,this.searchWord);
                  this.previousWord = this.searchWord;
                  this.searchWord = '';
              }
          },
          showContributors() {
              this.contributors = "Comming soon!!!!!!"
          },
          updateBooks(newBook){ //when clicked the suggested word
            console.log(newBook.eng)
            if (this.searchWay=='eng-alb'){
              this.searchWord = newBook.eng
            }
            else{
              this.searchWord = newBook.alb
            }
            this.searchDict()
          },
          async init(search,word){ //fetch api
              await fetch('https://fastapi-production-2762.up.railway.app/'+search+'/'+word)
              .then(res => res.json())
              .then(data => this.books=data)
              .catch(err => console.log(err.message))
          },
          async similarInit(search,word){ //fetch api
              await fetch('https://fastapi-production-2762.up.railway.app/'+search+'-similar/'+word)
              .then(res => res.json())
              .then(data => this.similarBooks=data)
              .catch(err => console.log(err.message))
          }
  
      },
    
  }
  
  </script>
  
  <style scoped>

  #searchInput{
    align-content: center;
    width:300px;
    background-color: var(--gri2);
    font-family: 'Ubuntu', sans-serif;
  }
  
  #searchBtn{
    align-content: center;
    margin-left: 5%;
    color: var(--gri);
    background-color: var(--blu);
    font-family: 'Ubuntu', sans-serif;
  }
  #searchBtn:hover{
    background-color: var(--blu2);
  }
  .title:hover{
    cursor: pointer;
  }
  .title{
    color: var(--blu);
  }
  /* small screens 
  
  @media (max-width:500px){
    .has-tooltip-right{
      font-size:small;
    }
  
  } */
  
  
  </style>
  
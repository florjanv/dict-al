<template>
    <div id="mydiv">
      <h1 id="mydivheader" class="title is-3">Technical Dictionary English Albanian</h1>
    </div>
    <div id="mydiv1">
      <p id="mydivheader1" class="subtitle is-5">coming soon...</p>
    </div>
    <div id="mydiv2">
      <p id="mydivheader2" class="subtitle is-5">Update soon</p>
    </div>
    <div id="mydiv3">
      <p id="mydivheader3" class="subtitle is-5">happy 2023</p>
    </div>
    <div id="mydiv4">
      <p id="mydivheader4" class="subtitle is-5">Forestry</p>
    </div>
    <div class='center'>
    <div class='blob'></div></div>

</template>

<script>
    export default{
        name: 'Home',
        components: {},
        mounted() {
          //get screen size
          var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          
          const array = ["mydiv","mydiv1","mydiv2","mydiv3","mydiv4"];
          const array2 = ["mydivheader","mydivheader1","mydivheader2","mydivheader3","mydivheader4"];
          //  if (width<600 || height<900){
          //      array.forEach(item => document.getElementById(item).className = "subtitle is-7");
          //    };
          var index=0
          for (const item of array2){
            if (width<900 || height<600){
              if (index==0){
                document.getElementById(item).className = "title is-5";
              }else{
                document.getElementById(item).className = "subtitle is-7";
              }
            }
            dragElement(document.getElementById(array[index]),index)
            index++;
          }

          function dragElement(elmnt,index) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
              document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
              elmnt.onmousedown = dragMouseDown;
            }
            //display text, diferent position for title
            if(index!=0){
              elmnt.style.top = getRandomArbitrary(200,height-height*0.3)+"px";
              elmnt.style.left = getRandomArbitrary(10,width-width*0.1)+"px";
            } else{
              elmnt.style.top = getRandomArbitrary(60,height-height*0.8)+"px";
              elmnt.style.left = getRandomArbitrary(100,width-width*0.3)+"px";
            }
            
            //random number
            function getRandomArbitrary(min, max) {
              return Math.random() * (max - min) + min;
            }
            function dragMouseDown(e) {
              e = e || window.event;
              e.preventDefault();
              // get the mouse cursor position at startup:
              pos3 = e.clientX;
              pos4 = e.clientY;
              document.onmouseup = closeDragElement;
              // call a function whenever the cursor moves:
              document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
              e = e || window.event;
              e.preventDefault();
              // calculate the new cursor position:
              pos1 = pos3 - e.clientX;
              pos2 = pos4 - e.clientY;
              pos3 = e.clientX;
              pos4 = e.clientY;
              // set the element's new position:
              elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
              elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
              // stop moving when mouse button is released:
              document.onmouseup = null;
              document.onmousemove = null;
            }
          }
        }
    }
</script>

<style scoped>

body {
  background: #e0e0e0;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,130%);
}

.blob {
  height: 150px;
  width: 150px;
  border-radius: 58% 43% 33% 64% / 50% 38% 53% 50%;
  background: transparent;
  box-shadow: inset 6px 33px 20px 0 #c9c9c9, inset 20px 80px 15px 0 #e0e0e0, 10px 20px 20px 0px #c9c9c9;
}

.blob::before {
  content: '';
  position: absolute;
  border-radius: 37% 54% 46% 46%;
  background: white;
  width: 50px;
  transform: rotate(-30deg);
  height: 15px;
  top: 20px;
  left: 20px;
}

.blob::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: white;
  width:10px;
  height: 10px;
  top: 60px;
  left: 20px;
}

 #mydiv, #mydiv1, #mydiv2, #mydiv3, #mydiv4 {
  position: absolute;
  padding: 5px;
  z-index: 9;
  text-align: center;
  cursor: move;
}

div p{
  color: var(--blu);
  text-shadow: 5px 5px 7px var(--blu);
}
div h1{
  color: var(--blu2);
  text-shadow: 5px 5px 7px var(--blu2);
}

</style>
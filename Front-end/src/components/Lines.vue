<template> 
    <div id="containerLines">
    <div id="lineContainer">
        <div class="lines" v-for="line in 20" :key="line.id">
        </div>
      </div>
      </div>
</template>

<style>
.lines {
    border-left: 2px solid #000000d6;
    height: 3rem;
}
#lineContainer {
  border: solid 2px #464545;
  height: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
}
#topLines {
  background-image: linear-gradient(black 33%, rgba(255,255,255,0) 0%);
background-position: right;
background-size: 1px 3px;
background-repeat: repeat-y;
height: 1.5rem;
}
</style>
<script>
    export default{
        name :"Lines"
    }
</script>
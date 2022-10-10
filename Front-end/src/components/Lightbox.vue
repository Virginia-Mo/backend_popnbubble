<template>
    <div
         v-if="open"
         id="ModalImgContainer"
         class="animate__animated animate__faster"
         :class="{ animate__fadeIn: isActive }"
         >
           <img :src="srcTarget" alt="photo selectionnée" id="imgModal1"/>
       </div>
</template>

<script>

   export default { 
    name :"LightBox",
     props:{
       open: Boolean,
       isActive : Boolean,
       srcTarget : String
     },
   }
   </script>

<style>

 #ModalImgContainer {
 position: absolute;

 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 1;
 width: 200rem;

}
#imgModal1 {
    max-width: 25%;
    border-radius: 20px;
 box-shadow: 0.1rem 0.1rem 1.1rem black;
}
#glassesImgContainer {
 width: 5rem;
   text-align: center;
   margin: auto;
}
#modalMessage {
 margin: 0.9rem;
}
</style>
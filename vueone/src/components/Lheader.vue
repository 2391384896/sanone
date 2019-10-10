
<template>
   <div id="header">
     <h2>header</h2>
     <router-link :to="{path:'/Tyg'}">手机👈</router-link>
     <router-link :to="{path:'/lphone'}">手机</router-link>
     <router-link :to="{path:'/shit'}">手机👉</router-link>

   </div>
</template >


<script>
    export default {
        name: "Lheader"
    }
</script>

<style scoped>
 #header{
   height: 100%;

   width: 100%;
 }
</style>

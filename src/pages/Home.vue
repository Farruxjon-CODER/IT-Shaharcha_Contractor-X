<script setup>
import { ref } from 'vue';

const title = ref('Home Component');
</script>

<template>
    <div class="home">
        <!-- <h1>{{ title }}</h1> -->
         <h1>We provide effective contracting services</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor porttitor quis quisque erat.</p>
         <div class="buttons">
            <button class="btn1">Get a quote</button>
            <button class="btn2">Our services</button>
        </div>

         <div class="img">
         <img src="../../img/IMAGE.png" alt="">
         </div>
    </div>
</template>

<style scoped>

.home{
    background-image: url(../../../img/IMAGE.png);
    
}

.container {
    display: flex;
    flex-direction: column;
    text-align: center; 
}

h1 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
    color: white; 
    text-align: center;
}

p {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8); 
    margin-bottom: 30px;
    text-align: center;
}

.buttons {
    display: flex;
    gap: 20px;
}

.btn1, .btn2 {
    padding: 15px 30px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
}

.btn1 {
    background-color: #FF5722; 
    color: white;
}

.btn1:hover {
    background-color: #E64A19;
}

.btn2 {
    background-color: transparent;
    color: white;
    border: 2px solid white;
}

.btn2:hover {
    background-color: rgba(255, 255, 255, 0.1);
} 


</style>
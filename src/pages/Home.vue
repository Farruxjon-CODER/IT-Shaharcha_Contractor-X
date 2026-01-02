<script setup>
import { ref } from 'vue';

const title = ref('Home Component');
</script>

<template>
    <div>
        <!-- <h1>{{ title }}</h1> -->
         <h1>We provide effective contracting services</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor porttitor quis quisque erat.</p>
         <div class="buttons">
            <button class="btn1">Get a quote</button>
            <button class="btn2">Our services</button>
        </div>

         <div class="img"></div>
         <!-- <img src="IMAGE.png" alt=""> -->
    </div>
</template>

<style scoped>
    /* *{
        width: 1440px;
        height: 955px;
        margin: 0;
        padding: 0;
    } */

    h1{
        font-family: Barlow;
        font-weight: 400;
        font-style: Regular;
        font-size: 72px;
        line-height: 84.02px;
        letter-spacing: 0%;
        text-align: center;
        flex-wrap: wrap;
    }

    p{
        font-family: Barlow;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        line-height: 30.01px;
        text-align: center;
        flex-wrap: wrap;

    }

    button{
        width: 150px;
        height: 70px;
        top: 100px;        
    }
    .buttons {
        display: flex;
        gap: 15px;
    }
    .buttons {
    display: flex;
    gap: 12px;
    }

    .btn1 {
    background: #FF4D01;
    color: white;
    padding: 10px 20px;
    border: none;
    }

    .btn2 {
    background-color: #FFFFFF;
    color: white;
    padding: 10px 20px;
    border: none;
    }




    

    .img{
        background-image: url(../../../img/IMAGE.png);
    }

</style>
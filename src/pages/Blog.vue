<script setup>
import { parseStyle } from 'ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister';
import { ref } from 'vue';

const title = ref('Contact Component');
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
    <h5>/BLOG</h5>
    <h2>Articles & News</h2>
    <button class="button">Browse articles</button>
    <div class="img1">
    <img src="" alt="" class="img1">
    <h2>12 designers tricks for picking the perfect home color palette</h2>
    <p>June 17, 2022</p>
    </div>
    <div class="img2">
    <img src="" alt="">
    <h2>Paint trends 2022 - the 17 colors you need for the ultimate wonder walls</h2>
    <p>June 17, 2022</p>
    </div>
    <div class="img3">
    <img src="" alt="">
    <h2>Clever DIY home improvements you can do during the pandemic</h2>
    <p>June 17, 2022</p>
    </div>
    <div class="img4">
    <img src="" alt="">
    <h2>15 mind blowing floor designs to make your home look great</h2>
    <p>June 17, 2022</p>
    </div>
</template>

<style scoped>
.button {
    float: right;
};
.img1{
    float: left;
}
.img2{
    float: right;
}
.img3{
    float: right;
}
.img4{
    float: right;
}
</style>
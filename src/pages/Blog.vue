<script setup>
import { parseStyle } from 'ant-design-vue/es/_util/cssinjs/hooks/useStyleRegister';
import { ref } from 'vue';

const title = ref('Contact Component');
</script>

<template>
    <section class="blog">
        <div class="container">

            <div class="header">
                <span id="blog" class="blog-tag">/BLOG</span>
                <h1 class="h1">Articles & News</h1>
                <button class="btn">Browse articles</button>
            </div>

            <div class="content">

                <div class="main-img">
                    <img src="../../img/Blog1.jpg" alt="">
                    <h2>12 designers tricks for picking the perfect home color palette</h2>
                    <span class="date">June 17, 2022</span>
                </div>

                <div class="side-img">
                    <div class="img">
                        <div class="article">
                            <img id="img2" src="../../img/Blog2.jpg" alt="">
                            <div>
                                <h3 id="h3">Paint trends 2022 – the 17 colors you need for the ultimate wonder walls
                                </h3>
                                <span class="date">June 17, 2022</span>
                            </div>
                        </div>
                    </div>

                    <div class="img">
                        <img src="../../img/Blog3.jpg" alt="">
                        <div>
                            <h3>Clever DIY home improvements you can do during the pandemic</h3>
                            <span class="date">June 17, 2022</span>
                        </div>
                    </div>

                    <div class="img">
                        <img src="../../img/Blog4.jpg" alt="">
                        <div>
                            <h3>15 mind blowing floor designs to make your home look great</h3>
                            <span class="date">June 17, 2022</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: #fff;
    color: #111;
}

.container {
    width: 1200px;
    max-width: 95%;
    margin: auto;
}


.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
}

.blog-tag {
    color: #ff5a1f;
    font-weight: bold;
    letter-spacing: 2px;
}

.header h1 {
    flex: 1;
    margin-left: 20px;
    font-size: 36px;
}

.btn {
    padding: 10px 20px;
    border: 1px solid #111;
    background: transparent;
    cursor: pointer;
}


.content {
    display: flex;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
}

.main-img img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.main-img h2 {
    margin: 20px 0 10px;
    font-size: 24px;
}

.date {
    color: #777;
    font-size: 14px;
}


.side-img {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.img {
    display: flex;
    gap: 15px;
}

.img img {
    width: 110px;
    height: 90px;
    object-fit: cover;
}

.img h3 {
    font-size: 16px;
    margin-bottom: 8px;

}


#img2 {
    width: 100px;
    display: inline;
    float: left;
   margin-right: 15px;
}
#blog{
    display: block;
}


.h1{
    display:block;
}
</style>
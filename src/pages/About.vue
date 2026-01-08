<script setup>
    import { ref } from 'vue';

    const title = ref('Pages Component');
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="container">
            <div class="abaut_us">
                <div class="abaut_1">
                    <div class="img_content">
                        <img src="../../img/7.png" alt="">
                    </div>
                    <div class="text_content">
                        <h5>/ABOUT US</h5>
                        <h1>A team of reliable and <br> experienced <br> contractors</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique imperdiet <br> nisi metus,
                            viverra nulla aliquet dui porta porttitor neque lectus diam justo <br> lobortis purus in
                            elit,
                            elementum
                            dignissim
                            nullam vitae pellentesque aliquet <br> aliquam sagittis pulvinar egestas morbi suspendisse
                            eleifend.
                        </p>
                        <div class="price">
                            <div class="one">
                                <h1><span>+</span>350</h1>
                                <p>Executed Projects</p>

                            </div>
                            <div class="two">
                                <h1>12<span>Y</span></h1>
                                <p>Experience</p>

                            </div>
                            <div class="three">
                                <h1><span>+</span>400</h1>
                                <p>Satisfied Clients</p>

                            </div>
                            <br>
                        </div>
                        <a href="#" class="btn">About our company</a>
                    </div>
                </div>
                <div class="abaut_2">
                    <div class="info">
                        <div class="text_content">
                            <h5>/OUR SERVICES</h5>
                            <h1>A comprehensive <br> set of services</h1>
                        </div>
                        <div class="btns">
                            <a href="#" class="btn_1">Get a quote</a>
                            <a href="#" class="btn_2">Browse services</a>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="cards_wrapper_top">
                            <div class="card_1">
                                <img src="../../img/IMAGE (1).png" alt="">
                                <h1>Project Planning</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit quis eget morbi
                                    fermentum <br>
                                    sagittis, et mi lacus ornare tincidunt id.</p>
                                <div class="learn_more">
                                    <div class="color"></div>
                                    <h6>Learn more</h6>
                                </div>
                            </div>
                            <div class="card_2">
                                <img src="../../img/IMAGE (2).png" alt="">
                                <h1>Project Management</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit quis eget morbi
                                    fermentum <br>
                                    sagittis, et mi lacus ornare tincidunt id.</p>
                                <div class="learn_more">
                                    <div class="color"></div>
                                    <h6>Learn more</h6>
                                </div>
                            </div>
                            <div class="card_3">
                                <img src="../../img/IMAGE (3).png" alt="">
                                <h1>General Contracting</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit quis eget morbi
                                    fermentum <br>
                                    sagittis, et mi lacus ornare tincidunt id.</p>
                                <div class="learn_more">
                                    <div class="color"></div>
                                    <h6>Learn more</h6>
                                </div>
                            </div>
                        </div>
                        <div class="cards_wrapper_bottom">
                            <div class="card_4">
                                <img src="../../img/IMAGE (4).png" alt="">
                                <h1>Interior Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit quis eget morbi
                                    fermentum <br>
                                    sagittis, et mi lacus ornare tincidunt id.</p>
                                <div class="learn_more">
                                    <div class="color"></div>
                                    <h6>Learn more</h6>
                                </div>
                            </div>
                            <div class="card_5">
                                <img src="../../img/IMAGE (5).png" alt="">
                                <h1>Exterior Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit quis eget morbi
                                    fermentum <br>
                                    sagittis, et mi lacus ornare tincidunt id.</p>
                                <div class="learn_more">
                                    <div class="color"></div>
                                    <h6>Learn more</h6>
                                </div>
                            </div>
                            <div class="card_6">
                                <img src="../../img/IMAGE.png" alt="">
                                <h1>Space Planning</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipiscing elit quis eget morbi
                                    fermentum <br>
                                    sagittis, et mi lacus ornare tincidunt id.</p>
                                <div class="learn_more">
                                    <div class="color"></div>
                                    <h6>Learn more</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>Ready to pull the trigger? Get a quote today.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius rhoncus, nullam pulvinar
                        ut
                        sollicitudin dictumst porttitor porttitor quis.</p>
                    <button>Get a quote</button>
                    <button>Our services</button>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: "Barlow", sans-serif;
    }

    .container {
        width: 1500px;
        max-width: 95%;
        margin: auto;
    }

    .abaut_us .abaut_1 {
        display: flex;
        gap: 200px;
        margin-bottom: 200px;
        justify-content: center;
    }

    .abaut_us .abaut_1 .img_content img {
        width: 478.625px;
        height: 681.359375px;
    }

    .abaut_us .abaut_1 .text_content h5 {
        font-family: "Barlow", sans-serif;
        color: #FF4D01;
        font-size: 20px;
        font-weight: 400;
        margin-top: 60px;
    }

    .abaut_us .abaut_1 .text_content h1 {
        font-family: "Barlow", sans-serif;
        font-weight: 400;
        font-size: 54px;
        line-height: 61.99px;
        margin-top: 18px;
    }

    .abaut_us .abaut_1 .text_content p {
        font-family: "Barlow";
        font-weight: 400;
        font-size: 18px;
        color: #605E5D;
        line-height: 30.01px;
        margin-top: 20px;
    }

    .abaut_us .abaut_1 .text_content .price {
        display: flex;
        gap: 90px;
        margin-bottom: 30px;
        margin-top: 35px;
    }

    .abaut_us .abaut_1 .text_content .price .one h1 {
        font-family: "Barlow", sans-serif;
        color: #191919;
        font-weight: 400;
        font-size: 72px;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .one h1 span {
        font-weight: 400;
        font-size: 72px;
        font-family: "Barlow", sans-serif;
        line-height: 84.02px;
        text-align: center;
        color: #FF4D01;
    }

    .abaut_us .abaut_1 .text_content .price .one p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #989899;
        line-height: 20px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .two h1 {
        font-size: 72px;
        font-weight: 400;
        font-family: "Barlow";
        color: #191919;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .two h1 span {
        font-size: 72px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #FF4D01;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .two p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        text-align: center;
        color: #989899;
        line-height: 20px;
    }

    .abaut_us .abaut_1 .text_content .price .three h1 {
        font-size: 72px;
        font-weight: 400;
        color: #191919;
        font-family: "Barlow";
        text-align: center;
        line-height: 84.02px;
    }

    .abaut_us .abaut_1 .text_content .price .three h1 span {
        font-size: 72px;
        font-weight: 400;
        font-family: "Barlow";
        color: #FF4D01;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .three p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #989899;
        text-align: center;
        line-height: 20px;
    }

    .abaut_us .abaut_1 .text_content .btn {
        font-size: 18px;
        font-weight: 400;
        display: inline-block;
        width: 237px;
        height: 75px;
        color: #191919;
        border: solid 2px #191919;
        font-family: "Barlow";
        line-height: 20px;
        text-decoration: none;
        text-align: center;
        padding-top: 24px;
    }

    .abaut_us .abaut_2 .info {
        display: flex;
    }

    .abaut_us .abaut_2 .info .text_content h5 {
        font-size: 20px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #FF4D01;
        line-height: 22px;
        letter-spacing: 0.8px;
    }

    .abaut_us .abaut_2 .info .text_content h1 {
        font-size: 54px;
        font-weight: 400;
        font-family: "Barlow";
        color: #191919;
        line-height: 61.99px;
    }

    .abaut_us .abaut_2 .info .btns .btn_1 {
        font-weight: 400;
        font-size: 18px;
        width: 169px;
        height: 75px;
        font-family: "Barlow";
        text-decoration: none;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        background-color: #ff4d01;
        display: inline-block;
        padding-top: 26px;
    }

    .abaut_us .abaut_2 .info .btns .btn_2 {
        width: 211px;
        height: 75px;
        font-weight: 400;
        font-size: 18px;
        color: #191919;
        font-family: "Barlow", sans-serif;
        display: inline-block;
        text-decoration: none;
        border: solid 3px #191919;
        text-align: center;
        line-height: 20px;
        padding-top: 24px;
    }

    .abaut_us .abaut_2 .cards .cards_wrapper_top {
        display: flex;
    }

    .abaut_us .abaut_2 .cards .cards_wrapper_bottom {
        display: flex;
        gap: 90px;
        margin-bottom: 30px;
        margin-top: 35px;
    }

    .abaut_us .abaut_1 .text_content .price .one h1 {
        font-family: "Barlow", sans-serif;
        color: #191919;
        font-weight: 400;
        font-size: 72px;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .one h1 span {
        font-weight: 400;
        font-size: 72px;
        font-family: "Barlow", sans-serif;
        line-height: 84.02px;
        text-align: center;
        color: #FF4D01;
    }

    .abaut_us .abaut_1 .text_content .price .one p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #989899;
        line-height: 20px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .two h1 {
        font-size: 72px;
        font-weight: 400;
        font-family: "Barlow";
        color: #191919;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .two h1 span {
        font-size: 72px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #FF4D01;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .two p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        text-align: center;
        color: #989899;
        line-height: 20px;
    }

    .abaut_us .abaut_1 .text_content .price .three h1 {
        font-size: 72px;
        font-weight: 400;
        color: #191919;
        font-family: "Barlow";
        text-align: center;
        line-height: 84.02px;
    }

    .abaut_us .abaut_1 .text_content .price .three h1 span {
        font-size: 72px;
        font-weight: 400;
        font-family: "Barlow";
        color: #FF4D01;
        line-height: 84.02px;
        text-align: center;
    }

    .abaut_us .abaut_1 .text_content .price .three p {
        font-size: 18px;
        font-weight: 400;
        font-family: "Barlow", sans-serif;
        color: #989899;
        text-align: center;
        line-height: 20px;
    }

    .abaut_us .abaut_1 .text_content .btn {
        font-size: 18px;
        font-weight: 400;
        display: inline-block;
        width: 237px;
        height: 75px;
        color: #191919;
        border: solid 2px #191919;
        font-family: "Barlow";
        line-height: 20px;
        text-decoration: none;
        text-align: center;
        padding-top: 24px;
    }
</style>
<script setup>
    import { ref } from 'vue';

    const title = ref('Pages Component');
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <div class="abaut_us">
            <div class="abaut_1">
                <div class="img_content">
                    <!-- <img src="/img/1.png" alt=""> -->
                </div>
                <div class="text_content">
                    <h5>/About Us</h5>
                    <h1>A team of reliable and experienced contractors</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique imperdiet nisi metus, viverra
                        nulla
                        aliquet dui porta porttitor neque lectus diam justo lobortis purus in elit, elementum dignissim
                        nullam vitae pellentesque aliquet aliquam sagittis pulvinar egestas morbi suspendisse eleifend.
                    </p>
                    <div class="price">
                        <div>
                            <h1><span>+</span>350</h1>
                            <p>Executed Projects</p>

                        </div>
                        <div>
                            <h1>12<span>Y</span></h1>
                            <p>Experience</p>

                        </div>
                        <div>
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
                        <h5>/Our Services</h5>
                        <h1>A comprehensive set of services</h1>
                    </div>
                    <div class="btns">
                        <a href="#" class="btn_1">Get a quote</a>
                        <a href="#" class="btn_2">Browse services</a>
                    </div>
                </div>
                <div class="cards">
                    <div class="cards_wrapper_top">
                        <div class="card_1">
                            <!-- <img src="/IT-Shaharcha_Contractor-X/img/2.png" alt=""> -->
                            <h1>Project Planning</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum
                                sagittis, et mi lacus ornare tincidunt id.</p>
                            <div class="learn more">
                                <div class="color"></div>
                                <h6>Learn more</h6>
                            </div>
                        </div>
                        <div class="card_2">
                            <!-- <img src="/IT-Shaharcha_Contractor-X/img/3.png" alt=""> -->
                            <h1>Project Management</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum
                                sagittis, et mi lacus ornare tincidunt id.</p>
                            <div class="learn more">
                                <div class="color"></div>
                                <h6>Learn more</h6>
                            </div>
                        </div>
                        <div class="card_3">
                            <!-- <img src="/IT-Shaharcha_Contractor-X/img/4.png" alt=""> -->
                            <h1>General Contracting</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum
                                sagittis, et mi lacus ornare tincidunt id.</p>
                            <div class="learn more">
                                <div class="color"></div>
                                <h6>Learn more</h6>
                            </div>
                        </div>
                    </div>
                    <div class="cards_wrapper_bottom">
                        <div class="card_4">
                            <!-- <img src="/IT-Shaharcha_Contractor-X/img/5.png" alt=""> -->
                            <h1>Interior Design</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum
                                sagittis, et mi lacus ornare tincidunt id.</p>
                            <div class="learn more">
                                <div class="color"></div>
                                <h6>Learn more</h6>
                            </div>
                        </div>
                        <div class="card_5">
                            <!-- <img src="/IT-Shaharcha_Contractor-X/img/6.png" alt=""> -->
                            <h1>Exterior Design</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum
                                sagittis, et mi lacus ornare tincidunt id.</p>
                            <div class="learn more">
                                <div class="color"></div>
                                <h6>Learn more</h6>
                            </div>
                        </div>
                        <div class="card_6">
                            <!-- <img src="/IT-Shaharcha_Contractor-X/img/7.png" alt=""> -->
                            <h1>Space Planning</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quis eget morbi fermentum
                                sagittis, et mi lacus ornare tincidunt id.</p>
                            <div class="learn more">
                                <div class="color"></div>
                                <h6>Learn more</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    .abaut_us .abaut_2 .info{
        display: flex;
    }
</style>
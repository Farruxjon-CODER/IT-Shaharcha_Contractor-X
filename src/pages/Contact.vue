<script setup>
import { ref } from 'vue';

// const title = ref('Contact Component');
</script>
 
<template>
    <div>
        <!-- <h1>{{ title }}</h1> -->
        <div class="footer">
            <p>Lorem ipsum dolor sit <br> amet consectetur <br>
                adipisicing elit.</p>
            <br>
            <div class="btns">
                <button style="background-color: orangered; height: 30px; width: 30px;"></button>
                <button style="background-color: orangered; height: 30px; width: 30px;"></button>
                <button style="background-color: orangered; height: 30px; width: 30px;"></button>
                <button style="background-color: orangered; height: 30px; width: 30px;"></button>
            </div>
            <div class="Menues">
                <h4>
                    Menu
                </h4>
                <br>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Blog</ul>
                <ul>Blog Post</ul>
                <ul>Services</ul>
                <ul>Services Single</ul>
                <br>
                <div class="Menues2">
                    <ul>Shop</ul>
                    <ul>Shop Single</ul>
                    <ul>Projects</ul>
                    <ul>Projects Single</ul>
                    <ul>Contact</ul>
                </div>
            </div>
            <div class="Menues3">
                <h4>
                    Utility Pages
                </h4>
                <br>
                <ul>Start Here</ul>
                <ul>Password Protected</ul>
                <ul>404 Not Found</ul>
                <ul>Licenses</ul>
                <ul>Styleguide</ul>
                <ul>Changelog</ul>
                <ul>More Webflow Templates</ul>
            </div>
            <div class="Contact">
                <h4>
                    Contact us
                </h4>
                <div class="contact-btns">
                    <button type="button">Call us <br>
                        <spans>(323) 238-0682</spans>
                    </button>
                    <div class="contact-btns2">
                        <br><br><br>
                        <button type="button">Email us <br>
                            <spans>info@contractor.com</spans>
                        </button>
                    </div>
                </div>
            </div>
            <div class="footer-txt">
                <div class="copyright">
                    <p>Copyright © Contractor X</p>
                </div>
                <div>
                    <p>Designed by <span>BRIX Templates </span> |Powered by <span> Webflow</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background-color: black;
    color: #fff;
    font-family: barlow;
    padding: 100px;
    display: flex;
    justify-content: center;
}

.btns {
    display: flex;
    color: orangered;
    display: inline;
    position: relative;
    top: 100px;
    right: 150px;
}

.Menues {
    position: relative;
    top: 5px;
}

.Menues2 {
    position: relative;
    display: inline;
}

.contact-btns {
    background: #000000;
}

.contact-btns2 {
    background: #000000;
}

span {
    color: orangered;
}

.footer-txt {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    top: 500px;
    gap: 200px;
}

.footer-txt .copyright {
    position: relative;
    display: flex;
    right: 880px;
    color: rgb(97, 97, 97);
}
</style>

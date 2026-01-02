<script setup>
import { ref } from 'vue';

// const title = ref('Contact Component');
</script>

<template>
    <div>
        <!-- <h1>{{ title }}</h1> -->
        <div class="footer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <br>
            <div class="btns">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
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
                    <button type="button">Call us <br><spans>(323) 238-0682</spans></button>
                    <button type="button">Email us <br><spans>info@contractor.com</spans></button>
                </div>
            </div>
            <div class="footer-txt">
                <p>Copyright © Contractor X</p>
                <p>Designed by <span>BRIX Templates </span> |Powered by <span> Webflow</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background-color: black;
    color: #fff;
    font-family: barlow;
}

.btns {
    display: flex;
    gap: 10px;
    color: orangered;
}

.Menues {
    position: relative;
}

.Menues2 {
    position: relative;
    display: inline;
}

.contact-btns {
    border-radius: 5px;
    border: orangered;
}

span{
    color: orangered;
}

.footer-txt{
    display: flex;
    justify-content: space-between;
}
</style>

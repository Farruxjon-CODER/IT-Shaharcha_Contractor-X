<script setup>
import { ref } from 'vue';

// const title = ref('Contact Component');
</script>

<template>
    <div class="body">
        <div class="home">
            <div>
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/Blog">Blog</router-link></li>
                        <li><router-link to="/Pages">Pages</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="footer">
                <div class="lorem">
                    <p>Lorem ipsum dolor sit <br> amet consectetur <br>
                        adipisicing elit.</p>
                </div>
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
                <div class="contact-container">
                    <h4>
                        Contact Us
                    </h4>
                    <div class="contact-box">
                        <div class="icon-box">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                            </svg>
                        </div>
                        <div class="contact-info">
                            <div class="contact-label">Call us</div>
                            <div class="contact-detail">(323) 238-0682</div>
                        </div>
                    </div>
                    <div class="contact-box">
                        <div class="icon-box">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <div class="contact-info">
                            <div class="contact-label">Email us</div>
                            <div class="contact-detail">info@contractor.com</div>
                        </div>
                    </div>
                </div>
                <div class="footer-txt">
                    <div class="copyright">
                        <p>Copyright © Contractor X</p>
                    </div>
                    <div class="adds">
                        <p>Designed by <span>BRIX Templates </span> |Powered by <span> Webflow</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.body {
    height: 100vh;
    width: 100%
}

.home {

    nav {
        display: flex;
        justify-content: flex-end;
        padding: 20px 0;
    }

    nav ul {
        display: flex;
        list-style: none;
        gap: 60px;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    nav ul li a {
        text-decoration: none;
        padding: 10px 15px;
        color: #333;
        font-size: 18px;
        font-weight: 500;
    }

    nav ul li a:hover {
        color: #007bff;
    }
}

.lorem {
    position: relative;
    right: -30px;
    color: #fff;
    font-family: barlow;
    font-size: 20px;
    top: 90px;
}

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
    top: 215px;
    right: 150px;
}

.Menues {
    position: relative;
    top: 5px;
    left: 50px;
    display: inline;
}

.Menues,
h4 {
    position: relative;
    right: -40px;
}

.Menues2 {
    position: relative;
    display: inline;
    left: 150px;
    top: -245px;
}

.Menues3 {
    position: relative;
    display: inline;
    left: 220px;
    top: 6px;
}

.contact-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 300px;
    width: 100%;
    position: relative;
    left: 400px;
    top: 10px;
}

.contact-container h4 {
    position: relative;
    left: -5px;
    top: -5px;
}

.contact-box {
    background-color: #000;
    border: 2px solid #ff6600;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.contact-box:hover {
    background-color: #111;
    transform: translateY(-2px);
}

.icon-box {
    background-color: #ff6600;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.icon-box svg {
    width: 30px;
    height: 30px;
    fill: white;
}

.contact-info {
    color: white;
}

.contact-label {
    font-size: 14px;
    margin-bottom: 5px;
}

.contact-detail {
    font-size: 16px;
    font-weight: bold;
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
    right: 990px;
    color: rgb(97, 97, 97);
}

.adds {
    position: relative;
    left: -200px;
    font-family: Barlow;
}
</style>

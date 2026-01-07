<!-- <script setup>
import { ref } from "vue";

const title = ref("Home Component");


</script>

<template>
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
    <!-- <h1>{{ title }}</h1> -->
    <!-- <h1>We provide effective contracting services</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius
      rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor porttitor quis
      quisque erat.
    </p>
    <div class="buttons">
      <button class="btn1">Get a quote</button>
      <button class="btn2">Our services</button>
    </div>


      <img src="../../img/IMAGE.png"  alt="" >
    
  </div> -->
<!-- </template>

<style scoped>
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
} -->

<!-- .container {
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

.btn1,
.btn2 {
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
}

.btn1 {
  background-color: #ff5722;
  color: white;
}

.btn1:hover {
  background-color: #e64a19;
}

.btn2 {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn2:hover {
  background-color: rgba(255, 255, 255, 0.1);
}



</style> --> 




<script setup>
import { ref } from "vue";

const title = ref("Home Component");
</script>

<template>
  <div class="home">
    <!-- NAVBAR -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/pages">Pages</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="">Cart(0)</router-link></li>
        <li><button style="background-color: orange; width: 129px;height: 50px;  "><router-link to="">Get a quote</router-link></button></li>
      </ul>
    </nav>

    <!-- CONTENT -->
    <div class="content">
      <h1>We provide effective contracting services</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit varius
        rhoncus, nullam pulvinar ut sollicitudin dictumst porttitor.
      </p>

      <div class="buttons">
        <button class="btn1">Get a quote</button>
        <button class="btn2">Our services</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ASOSIY BACKGROUND */
.home {
  min-height: 100vh;
  background-image: url("../../img/IMAGE.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  padding: 0 80px;
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 30px 0;
}

.navbar ul {
  display: flex;
  list-style: none;
  gap: 50px;
  margin: 0;
  padding: 0;
}

.navbar ul li a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 500;
}

.navbar ul li a:hover {
  color: #ff5722;
}

/* CONTENT */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* MATN CHIROYLI 2 QATOR */
h1 {
  font-size: 70px;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  max-width: 700px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 2.0;
  max-width: 600px;
  margin-bottom: 35px;
}

/* BUTTONS HAM MARKAZDA */
.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn1 {
  padding: 15px 30px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.btn1:hover {
  background-color: #e64a19;
}

.btn2 {
  padding: 15px 30px;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 16px;
}

.btn2:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>


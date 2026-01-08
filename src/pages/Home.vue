




<script setup>
import { ref } from "vue";

const title = ref("Home Component");
</script>

<template>
  <div class="home">

<nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <li><router-link to="/pages">Pages</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="">Cart(0)</router-link></li>
        <li><button style="background-color: orange;"><router-link to="">Get a
              quote</router-link></button></li>
      </ul>
    </nav>

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

.home {
  min-height: 100vh;
  background-image: url("../../img/background-img.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  padding: 0 80px;
}


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
  line-height: 2;
  max-width: 600px;
  margin-bottom: 35px;
}


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

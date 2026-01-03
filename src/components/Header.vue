<template>
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
</template>

<style scoped>
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
</style>
<template>
    <footer>
        <router-link to="/home" class="material-symbols-outlined">home</router-link>
        <router-link to="/map" class="material-symbols-outlined">map</router-link>
        <router-link to="/send" class="material-symbols-outlined">send</router-link>
        <router-link to="/history" class="material-symbols-outlined">history</router-link>
    </footer>
</template>
<script>
export default {

}
</script>
<style scoped>
footer {
    display: flex;
    justify-content: space-around;
    padding: 16px 16px;
    gap: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

footer a {
    text-decoration: none;
    color: #999;
    cursor: default;
}

footer a.router-link-exact-active {
    color: #111;
}
</style>
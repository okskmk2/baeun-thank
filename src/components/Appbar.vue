<template>
    <header class="appbar">
        <div>title</div>
        <div class="appbar_actions">
            <router-link to="/history" class="material-symbols-outlined">notifications</router-link>
            <router-link to="/history" class="material-symbols-outlined">account_circle</router-link>
        </div>
    </header>
</template>
<script>
export default {
}
</script>
<style>
.appbar {
    display: flex;
    justify-content: space-between;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    padding: 16px;
}
.appbar_actions {
    display: flex;
    gap: 8px;
}
.appbar_actions a {
    text-decoration: none;
    color:#333;
}
</style>
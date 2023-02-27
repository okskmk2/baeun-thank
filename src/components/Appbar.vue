<template>
    <header class="appbar">
        <div>title</div>
        <div>
            <NotificationsIcon />
            <AccountCircleIcon />
        </div>
    </header>
</template>
<script>
import AccountCircleIcon from "./icons/AccountCircleIcon.vue";
import NotificationsIcon from "./icons/NotificationsIcon.vue";
export default {
    components: { NotificationsIcon, AccountCircleIcon }
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
</style>
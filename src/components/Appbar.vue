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
}
</style>
<template>
    <div class="main_layout">
        <Appbar />
        <router-view />
        <BottomNav />
    </div>
</template>
<script>
import Appbar from '../components/Appbar.vue';
import BottomNav from "../components/BottomNav.vue";

export default {
    components: { Appbar, BottomNav }
}
</script>
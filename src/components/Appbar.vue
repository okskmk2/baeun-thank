<template>
    <header class="appbar">
        <div>{{ title }}</div>
        <div class="appbar_actions">
            <router-link to="/history" class="material-symbols-outlined">notifications</router-link>
            <router-link to="/history" class="material-symbols-outlined">account_circle</router-link>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            title: '제목'
        }
    },
    methods: {
        setTitle() {
            this.title = this.$route.name;
        }
    },
    watch: {
        // 라우트가 변경되면 메소드를 다시 호출됩니다.
        '$route': {
            immediate: true,
            handler() {
                this.setTitle();
            }
        }
    },
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
    color: #333;
}
</style>
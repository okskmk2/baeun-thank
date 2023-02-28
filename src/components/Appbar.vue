<template>
    <header class="appbar">
        <h1 class="page_title">{{ title }}</h1>
        <div class="appbar_actions">
            <router-link to="/history" class="material-symbols-outlined">notifications</router-link>
            <router-link to="/myprofile" class="material-symbols-outlined">account_circle</router-link>
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
h1.page_title {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1;
}
.appbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
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
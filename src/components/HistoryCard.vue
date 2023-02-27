<template>
    <div class="history_card">
        <div>
            <img :src="randomProfileUrl" alt="avatar" class="avatar_img" />
            <div>name</div>
        </div>
        <div>content</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            randomProfileUrl:''
        }
    },
    created() {
        const random = crypto.randomUUID().substring(0,5);
        this.randomProfileUrl = 'https://api.dicebear.com/5.x/adventurer/svg?seed=' + random;
    }
}
</script>
<style scoped>
.history_card {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.avatar_img {
    height: 5rem;
}
</style>
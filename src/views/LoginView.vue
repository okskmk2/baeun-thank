<template>
<div>
    <div class="input_group">
        <label>이름</label>
        <input type="text" v-model="userid">
    </div>
    <div class="input_group">
        <label>비밀번호</label>
        <input type="password">
    </div>
    <div>
        <button @click="loginHandler">로그인</button>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            userid:null
        }
    },
    methods:{
        loginHandler() {
            if (this.userid) {
                localStorage.setItem('username', this.userid);
                this.$router.push('/home');
            }
        }
    }
}
</script>
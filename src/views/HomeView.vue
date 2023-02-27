<template>
  <main>
    <div style="text-align: center;">
      <div style="display: inline-block;">
        <table class="transaction_info">
          <tr>
            <th>보낸 감사</th>
            <td>123</td>
          </tr>
          <tr>
            <th>받은 감사</th>
            <td>2,341</td>
          </tr>
        </table>
      </div>
  </div>
    <button @click="$router.push('/send')" class="icon_label_btn goto_send_btn">
      <span>감사 보내기</span>
      <span class="material-symbols-outlined">chevron_right</span>
    </button>
  </main>
</template>
<script>
export default {
}
</script>
<style scoped>
.transaction_info th{
  width: 5rem;
  text-align: left;
}
.transaction_info td {
  text-align: right;
}
.goto_send_btn {
  margin-top: 32px;
  width: 100%;
  justify-content: center;
  font-size: 16px;
  padding: 8px;
  background-color: #791764;
  color: white;
  border-style: none;
  border-radius: 4px;
}
</style>
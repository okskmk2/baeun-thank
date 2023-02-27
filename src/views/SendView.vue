<template>
  <main>
    <div style="text-align: right;">
      <button class="icon_label_btn">
        <span class="material-symbols-outlined">qr_code_2</span>
        <span>QR code 찾기</span>
      </button>
    </div>
    <div class="input_group">
      <label>받은 사람</label>
      <input type="text" autocomplete="off">
    </div>
    <div class="input_group" style="margin-top:12px">
      <label>내용</label>
      <textarea></textarea>
    </div>
    <div style="margin-top:16px">
      <button class="icon_label_btn send_btn">
        <span>감사 보내기</span>
        <span class="material-symbols-outlined">send</span>
      </button>
    </div>
  </main>
</template>
<script>
export default {
}
</script>
<style scoped>
.send_btn {
  width: 100%;
  justify-content: center;
  font-size: 16px;
  padding: 8px;
  gap:8px;
  background-color: #791764;
  color: white;
  border-style: none;
  border-radius: 4px;
}
</style>
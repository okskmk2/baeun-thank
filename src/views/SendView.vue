<template>
  <main>
    <div style="text-align: right;">
      <button class="icon_label_btn">
        <span class="material-symbols-outlined">qr_code_2</span>
        <span>QR code 찾기</span>
      </button>
    </div>
    <div class="input_group">
      <label>받는 사람</label>
      <input type="text" autocomplete="off" class="gray_input">
    </div>
    <div class="input_group" style="margin-top:18px">
      <label>내용</label>
      <textarea class="gray_input" style="line-height: 1.7;" rows="2"></textarea>
    </div>
    <div style="margin-top:42px">
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
.gray_input {
  padding: 12px;
  font-size: 18px;
  border-style: none;
  background-color: #f1f1f1;
}

.send_btn {
  width: 100%;
  justify-content: center;
  font-size: 16px;
  padding: 12px;
  gap: 8px;
  background-color: #791764;
  color: white;
  border-style: none;
  border-radius: 4px;
}
</style>
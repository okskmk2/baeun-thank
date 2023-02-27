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
    <div>
      <button>감사 보내기</button>
    </div>
  </main>
</template>
<script>
export default {
}
</script>
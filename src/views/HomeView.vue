<template>
  <main>
    <table>
      <tr>
        <th>보낸 감사</th>
        <td>123</td>
      </tr>
      <tr>
        <th>받은 감사</th>
        <td>234</td>
      </tr>
    </table>
    <button @click="$router.push('/send')">감사 보내기</button>
  </main>
</template>
<script>
export default {
}
</script>
<template>
  <main>
    <div>
      <HistoryCard v-for="i in [1,2,3,4,5,6,7,8]"/>
    </div>
  </main>
</template>
<script>
import HistoryCard from '../components/HistoryCard.vue';

export default {
    components: { HistoryCard }
}
</script>
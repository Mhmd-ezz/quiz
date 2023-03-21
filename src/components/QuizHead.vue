
<script setup>
  import {defineProps} from 'vue'

  const {
    questionStatus,
    barPercentage
  } = defineProps([
    'questionStatus',
    'barPercentage'
  ])

</script>

<template>
  <h4>Question {{ questionStatus }}</h4>
  <div class="bar">
    <div class="completion" :style="{width:barPercentage}"></div>
  </div>
</template>

<style scoped>
  h4 {
    font-size: 30px;
    color: white;
  }
  .bar {
    width: 300px;
    height: 30px;
    border: 3px solid bisque;
  }
  .completion {
    height: 100%;
    width: 0;
    background-color: bisque;
  }
</style>

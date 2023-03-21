<script setup>
import q from "@/data/quizes.json"
import {ref, watch} from "vue"
import Card from "@/components/Card.vue"

const quizzesData = ref(q)
const search = ref("")

watch(search, () => {
  quizzesData.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>

<template>
  <header>
    <h1>Courses</h1>
    <input v-model.trim="search" type="text" name="" id="" placeholder="Search...">
  </header>

  <main>
    <div class="options-container">

      <Card v-for="quiz in quizzesData" :key="quiz.id" :quiz="quiz" />

    </div>
  </main>
</template>

<style scoped>
  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  header img {
    margin-right: 20px;
  }
  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }
  header input {
    border: none;
    background-color: rgba(240,240,240,0.9);
    padding: 10px;
    border-radius: 5px;
  }
  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
</style>


<script setup>
  import {useRoute} from "vue-router";
  import {ref, computed} from "vue";
  import quizzes from '@/data/quizes.json'
  import Question from "@/components/Question.vue";
  import QuizHead from "@/components/QuizHead.vue";

  import Result from "@/components/Result.vue";

  const route = useRoute()

  const quizId = parseInt(route.params.id)
  const quiz = quizzes.find(q => q.id === quizId)
  const questions = quiz.questions
  const currentQuestionIndex = ref(0)
  const numberOfCorrectAnswers = ref(0)
  const showResults = ref(false)

  const questionStatus = computed( () => {
    return `${currentQuestionIndex.value}/${quiz.questions.length}`
  })

  const barPercentage = computed( () => {
    return `${currentQuestionIndex.value/quiz.questions.length*100}%`
  })

  const onOptionSelected = (isCorrect) => {
    if (isCorrect) {
      numberOfCorrectAnswers.value++
    }
    if (questions.length - 1 === currentQuestionIndex.value) {
      showResults.value = true
      console.log(showResults.value)
    }
    currentQuestionIndex.value++
  }

  // const questionStatus = ref(`${currentQuestionIndex.value}/${quiz.questions.length}`)
  //
  // watch(() => currentQuestionIndex.value, () => {
  //   questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`
  // })
</script>

<template>
  <div v-if="quiz">
    <header>
      <QuizHead :questionStatus="questionStatus" :barPercentage="barPercentage" />
    </header>

    <main>
      <Question
          v-if="!showResults"
          :question="questions[currentQuestionIndex]"
          @selectOption="onOptionSelected"
      />
      <Result
          v-else
          :quizQuestionLength="questions.length"
          :numberOfCorrectAnswers="numberOfCorrectAnswers"
      />
<!--      <button @click="++currentQuestionIndex">Next</button>-->
    </main>
  </div>
  <div v-else>
    <header>
      <h1>No questions found!</h1>
    </header>
  </div>
</template>

<style scoped>
  header {
    margin-top: 50px;
  }
</style>

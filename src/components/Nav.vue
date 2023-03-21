<script setup>
  import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="30" height="30" />
    <nav>
      <ul>
        <li>
          <RouterLink to="/" active-class="active">Courses</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: start;
  }
  li {
    margin-right: 25px;
  }
  .active {
    font-weight: bold;
    color: white;
  }
</style>

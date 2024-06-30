<script setup lang="ts">
const addGuard = () => {}
</script>
<template>
  <form @submit.prevent="addGuard">
    <fieldset>
        <label for="Guard">Guard</label>
        <input type="text" />
    </fieldset>
    <button @click="addGuard">Submit</button>
  </form>
</template>

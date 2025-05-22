<template>
  <div class="rate-card">
    <p>{{text}}</p>
  </div>
</template>

<style>
.rate-card {
  width: 360px;
  height: 300px;
  background: linear-gradient(to bottom, var(--brown) 7%, var(--beige) 70%);
  border-radius: 33px;
  display: flex;
  justify-content: center;
  p {
    padding-top: 80px;
    font-family: var(--font-body-heading), serif;
    font-size: 30px;
    color: var(--beige);
  }
}
</style>

<script setup>
defineProps({
  text: String,
})
</script>
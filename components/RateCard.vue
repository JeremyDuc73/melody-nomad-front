<template>
  <div class="rate-card">
    <p>{{text}}</p>
  </div>
</template>

<style>
.rate-card {
  width: 360px;
  height: 470px;
  background: var(--brown);
  border-radius: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
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
<template>
  <div :class="position" class="card">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <div class="card-image" :style="{backgroundImage: `linear-gradient(to ${position}, #FFF3DB 7%, rgba(255,255,255,0) 70%), url('${img}')`}"></div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-family: var(--font-body-heading), serif;
    font-size: 36px;
  }
  p {
    font-family: var(--font-body), serif;
    font-size: 20px;
  }
  .card-image {
    height: 340px;
    width: 100%;
    border-radius: 33px;
    background-size: cover;
    background-position: top;
  }
}
.right {
  text-align: right;
}
</style>

<script setup>
defineProps({
  position: String,
  title: String,
  text: String,
  img: String,
})
</script>
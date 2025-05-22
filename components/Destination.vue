<template>
  <div class="destination"
       :style="{ backgroundImage: `linear-gradient(to right, #FFF3DB 7%, rgba(255,255,255,0) 70%), url('${img}')`}"
  >
    <p>{{ text }}</p>
  </div>
</template>

<style>
.destination {
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  height: 145px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  p {
    color: var(--brown);
    font-family: var(--font-body-heading), serif;
    font-size: 64px;
  }
}
</style>

<script setup>
defineProps({
  text: String,
  img: String,
})
</script>
<template>
  <div class="vietnam-card">
    <p class="date">{{date}}</p>
    <a v-if="rent" href="#">Réserver</a>
  </div>
</template>

<script setup>

defineProps({
  date: String,
  rent: Boolean,
})
</script>

<style lang="scss">
.vietnam-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.25);
  border-radius: 33px;
  padding: 25px 40px;
  background-color: var(--beige);
  .date {
    font-size: 24px;
    font-family: var(--font-body-heading), serif;
  }
  a {
    background-color: var(--brown);
    border-radius: 33px;
    color: var(--beige);
    font-family: var(--font-body-heading), serif;
    font-size: 24px;
    padding: 15px 25px;
  }
}
</style>
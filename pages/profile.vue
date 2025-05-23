<template>
  <Navbar />
  <div class="hero-profil">
    <img class="hero-profil__logo" src="/public/images/logo.png" alt="">
    <h1>Profil</h1>
    <img class="hero-profil__img-riziere" src="/public/images/riz-2.png" alt="">
    <img class="hero-profil__img-nuage" src="/public/images/nuage-hero.png"  alt="">
  </div>
  <div class="section-1-profil container" v-if="user">
    <div class="section-1-profil__card">
      <h3>Votre profil</h3>
      <p><strong>Nom :</strong> {{ user.username }}</p>
      <p><strong>Email :</strong> {{ user.email }}</p>
      <button @click="logoutAndRedirect">Se déconnecter</button>
    </div>
  </div>
  <div class="container vietnam-card-profil">
    <VietnamCard date="Départ le : 21 Octobre 2025 - 11 nuits/12 jours" />
  </div>
  <div class="section-2-profil">
    <div class="section-2-profil__card">
      <img src="/public/images/section-4-vietnam-card.png" alt="">
      <p class="section-2-profil__card__title">Jour - 1</p>
      <p class="section-2-profil__card__text">texte de presentation des jours puis slide de carte pour jour 2</p>
      <div class="nav-button">
        <a href=""><img src="/images/arrow-right.svg" class="arrow left" alt="left arrow" /></a>
        <div class="divider"></div>
        <a href=""><img src="/images/arrow-right.svg" class="arrow right" alt="right arrow" /></a>
      </div>
    </div>
    <img class="section-2-profil__vietnam" src="/images/vietnam-brown.svg" alt="">
  </div>
  <div class="section-3-profil__card container">
    <h3>Télécharger notre guide</h3>
    <p>Avant de partir à l’aventure il est important de se préparer ! Biensure Melody Nomad vous accompagne dans ces étapes mais pour vos préparer au mieux vous pouvez télécharger notre guide ou vous retrouverez nos conseils et astuce avant de partir.</p>
    <a href="#">Télécharge le guide de voyage</a>
  </div>
  <Footer />
</template>
<style lang="scss">
@use "assets/scss/profil";
</style>
<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import { onMounted } from 'vue'

definePageMeta({
  middleware: ['auth']
})

const { user, getUser, logout } = useAuth()

onMounted(() => {
  if (!user.value) getUser()
})

const logoutAndRedirect = () => {
  logout()
  navigateTo('/auth/login')
}
</script>

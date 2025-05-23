<template>
  <Navbar />
  <div class="hero-login">
    <img class="hero-login__logo" src="/public/images/logo.png" alt="">
    <h1>Connexion</h1>
    <img class="hero-login__img-riziere" src="/public/images/riz-2.png" alt="">
    <img class="hero-login__img-nuage" src="/public/images/nuage-hero.png"  alt="">
  </div>
  <div class="auth">
    <div class="auth__container">
      <img src="/images/contact.png" alt="illustration" />
      <div class="auth__container__right">
        <h3>Connexion</h3>
        <form @submit.prevent="submitLogin" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input v-model="password" type="password" id="password" />
          </div>
          <button type="submit" class="submit-btn" :disabled="loading">
            Se connecter
          </button>
          <p class="separator">OU</p>
          <a href="/auth/register" class="submit-btn">
            S'inscrire'
          </a>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "assets/scss/login";
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const password = ref('')
const loading = ref(false)

const { login } = useAuth()

const submitLogin = async () => {
  loading.value = true
  try {
    await login(email.value, password.value)
    navigateTo('/profile')
  } catch (e) {
    console.error('Erreur de connexion', e)
  } finally {
    loading.value = false
  }
}
</script>

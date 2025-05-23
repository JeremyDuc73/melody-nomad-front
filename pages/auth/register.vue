<template>
  <Navbar />
  <div class="hero-login">
    <img class="hero-login__logo" src="/public/images/logo.png" alt="">
    <h1>Inscription</h1>
    <img class="hero-login__img-riziere" src="/public/images/riz-2.png" alt="">
    <img class="hero-login__img-nuage" src="/public/images/nuage-hero.png"  alt="">
  </div>

  <div class="auth">
    <div class="auth__container">
      <img src="/images/contact.png" alt="illustration" />
      <div class="auth__container__right">
        <h3>Créer un compte</h3>
        <form @submit.prevent="submitRegister" class="auth-form">
          <div class="form-group">
            <label for="username">Nom d'utilisateur</label>
            <input v-model="username" type="text" id="username" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" id="email" />
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input v-model="password" type="password" id="password" />
          </div>
          <button type="submit" class="submit-btn" :disabled="loading">
            S'inscrire
          </button>
          <p class="separator">OU</p>
          <a href="/auth/login" class="submit-btn">
            Se connecter
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const username = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

const { register } = useAuth()

const submitRegister = async () => {
  loading.value = true
  try {
    await register(username.value, email.value, password.value)
    navigateTo('/auth/login')
  } catch (e) {
    console.error('Erreur inscription', e)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss">
@use "assets/scss/login";
</style>

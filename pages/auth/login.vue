<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <UCard class="w-full max-w-md">
      <h2 class="text-xl font-bold mb-4 text-center">Connexion</h2>

      <form @submit.prevent="submitLogin" class="space-y-4">
        <UInput v-model="email" placeholder="Email" type="email" icon="i-heroicons-envelope" />
        <UInput v-model="password" placeholder="Mot de passe" type="password" icon="i-heroicons-lock-closed" />

        <UButton type="submit" block :loading="loading">
          Se connecter
        </UButton>
      </form>
    </UCard>
  </div>
</template>

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
    navigateTo('/')
  } catch (e) {
    console.error('Erreur de connexion', e)
  } finally {
    loading.value = false
  }
}
</script>

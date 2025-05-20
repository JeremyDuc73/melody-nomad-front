<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <UCard class="w-full max-w-md">
      <h2 class="text-xl font-bold mb-4 text-center">Créer un compte</h2>

      <form @submit.prevent="submitRegister" class="space-y-4">
        <UInput v-model="username" placeholder="Nom d'utilisateur" icon="i-heroicons-user" />
        <UInput v-model="email" placeholder="Email" type="email" icon="i-heroicons-envelope" />
        <UInput v-model="password" placeholder="Mot de passe" type="password" icon="i-heroicons-lock-closed" />

        <UButton type="submit" block :loading="loading">
          S'inscrire
        </UButton>
      </form>
    </UCard>
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
    navigateTo('/')
  } catch (e) {
    console.error('Erreur inscription', e)
  } finally {
    loading.value = false
  }
}
</script>

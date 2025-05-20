<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-bold text-center">Profil utilisateur</h2>
      </template>

      <template v-if="user">
        <p><strong>Nom :</strong> {{ user.username }}</p>
        <p><strong>Email :</strong> {{ user.email }}</p>
      </template>

      <template v-else>
        <div class="flex justify-center py-6">
          <ULoader size="lg" />
        </div>
      </template>
      <div v-if="user">
        <UButton @click="logoutAndRedirect">Se déconnecter</UButton>
      </div>
    </UCard>
  </div>
</template>

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

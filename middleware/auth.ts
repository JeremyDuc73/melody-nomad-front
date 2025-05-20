export default defineNuxtRouteMiddleware(async () => {
    const { getUser, user } = useAuth()

    if (!user.value) {
        const u = await getUser()
        if (!u) return navigateTo('/login')
    }
})

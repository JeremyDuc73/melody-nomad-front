export default defineNuxtRouteMiddleware(async () => {
    const token = useCookie('token')
    const { user, getUser } = useAuth()

    if (!token.value) return navigateTo('/auth/login')

    if (!user.value) {
        const u = await getUser()
        if (!u) return navigateTo('/auth/login')
    }
})

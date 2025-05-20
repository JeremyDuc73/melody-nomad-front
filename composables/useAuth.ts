import { useFetch, useCookie, useState } from '#app'

interface AuthResponse {
    jwt: string
    user: {
        id: number
        username: string
        email: string
        [key: string]: any
    }
}

export function useAuth() {
    const user = useState<AuthResponse['user'] | null>('user', () => null)
    const runtimeConfig = useRuntimeConfig()

    const login = async (identifier: string, password: string) => {
        const { data, error } = await useFetch<AuthResponse>(runtimeConfig.apiUrl + 'auth/local', {
            method: 'POST',
            body: { identifier, password },
        })

        if (error.value) throw error.value

        const jwt = data.value?.jwt
        user.value = data.value?.user ?? null

        const token = useCookie('token')
        token.value = jwt
    }

    const register = async (username: string, email: string, password: string) => {
        const { data, error } = await useFetch<AuthResponse>(runtimeConfig.apiUrl + 'auth/local/register', {
            method: 'POST',
            body: { username, email, password },
        })

        if (error.value) throw error.value

        const jwt = data.value?.jwt
        user.value = data.value?.user ?? null

        const token = useCookie('token')
        token.value = jwt
    }

    const getUser = async () => {
        const token = useCookie('token')
        if (!token.value) return null

        const { data, error } = await useFetch<AuthResponse['user']>(runtimeConfig.apiUrl + 'users/me', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        })

        if (error.value) {
            user.value = null
            return null
        }

        user.value = data.value ?? null
        return user.value
    }

    const logout = () => {
        useCookie('token').value = null
        user.value = null
    }

    return { user, login, register, getUser, logout }
}

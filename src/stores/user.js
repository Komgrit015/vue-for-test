import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage} from '@vueuse/core'


export const useUserStore = defineStore('user', () => {
    const theme = useLocalStorage('theme', 'light')
    const user = useLocalStorage('user', {})
    function toggleTheme (){
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    
    async function login(id) {
        const response = await fetch('https://www.melivecode.com/api/users/'+id)
        const result = await response.json()
        user.value = result.user
    }

    function logout(){
        user.value = null
    }
    return { theme, user, toggleTheme, login, logout }
})
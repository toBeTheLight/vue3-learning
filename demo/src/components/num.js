import { ref, onMounted, watch } from 'vue'

export default function getNum () {
    let num = ref(0)
    const getUserRepositories = async () => {
        console.log('mounted')
        setInterval(() => {
            num.value = num.value += 1
        }, 1000)
    }
    onMounted(getUserRepositories)
    watch(num, (oldValue, newValue) => {
        console.log(newValue)
    })
    return {
        num
    }
}
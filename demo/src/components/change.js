import { ref, onMounted, watch } from 'vue'

export default function getNum (num) {
    let num2 = ref(num)
    const getUserRepositories = async () => {
        console.log('mounted')
        setInterval(() => {
            num2.value = num2.value += 1
        }, 1000)
    }
    onMounted(getUserRepositories)
    watch(num2, (oldValue, newValue) => {
        console.log(newValue)
    })
    return {
        num2
    }
}
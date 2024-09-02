<template>
    <Header></Header>
    <Navber></Navber>
    <div class=" w-80 mx-auto pt-10 pb-10">
        <div class="card bg-base-100  shadow-xl">
            <div class="avatar flex  justify-center ">
                <div class="w-24 rounded">
                    <img :src="store?.Loginuser?.photoURL" />
                </div>
            </div>
            <div class="card-body ">
                <h2 class="text-center"> Welcome Mr. <span class="text-lime-500 text-lg">{{ store?.Loginuser?.displayName }}</span></h2>
                <p class="text-center">Email :{{ store?.Loginuser?.email }} </p>
                <div class="w-full">
                    <button v-on:click="HandelSignOut" class="btn btn-primary w-full">Sign_OUT</button>
                </div>
            </div>
        </div>
    </div>
    <!-- taster -->
    <div>
        
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { useRouter } from 'vue-router'
import Navber from '@/components/Navber.vue'
import { UseAuthStore } from '@/stores/Auth'

const store = UseAuthStore()
// router for redirect user
const router = useRouter()
console.log(store.Loginuser);

function HandelSignOut() {
    store.HandelSignOut()
    // redirect to login page
    router.push({ path: '/login' })
}

</script>

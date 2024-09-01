<template>
    <div>
        <p class="font-_outfit font-bold p-2 text-xl"> Login With </p>
        <div class="flex flex-col gap-2 p-2">
            <button v-on:click="store.GoogleSignIn" class="btn text-blue-400">
                <DeGooglePlain />
                logIn with Google
            </button>
            <button class="btn">
                <AkGithubFill />
                logIn with Github
            </button>
        </div>
    </div>
    <!-- Find us section -->
    <div>
        <p class="font-_popins font-bold p-2 text-xl">Find Us On </p>
        <div class="p-2">
            <div class="">
                <div class="flex gap-3 items-center border p-4 text-lg rounded-t-md">
                    <AkFacebookFill />
                    <a href="">Facebook</a>
                </div>
            </div>
            <div class="">
                <div class="flex gap-3 items-center border p-4 text-lg">
                    <span class=" text-[58A7DE]">
                        <AkTwitterFill />
                    </span>
                    <a href="">Twitter</a>
                </div>
            </div>
            <div class="">
                <div class="flex gap-3 items-center border p-4 text-lg rounded-b-md">
                    <AkInstagramFill />
                    <a href="">Instagram</a>
                </div>
            </div>

        </div>
    </div>

    <!-- QJone -->
    <div class="bg-[#f3f3f3] p-2 mt-4">
        <p class="font-_outfit font-bold p-4 text-xl">Q-Zone</p>
        <div class="flex flex-col justify-center items-center gap-5">
            <div class="">
                <img :src=qZone1 alt="" srcset="">
            </div>
            <div class="">
                <img :src=qZone2 alt="" srcset="">
            </div>
            <div class="">
                <img :src=qZone3 alt="" srcset="">
            </div>
        </div>
    </div>

    <!-- Amazing Newspaper -->
    <AmazingNewspaper></AmazingNewspaper>

    <!-- toaster and error massage -->
    <div>
        <div class="toast toast-center toast-middle">
            <div v-if="store.sucessToaser" class="alert alert-info">
                <span>loged in Succesfull !.</span>
            </div>
            <div  v-if="store.ErorrToaster" class="alert alert-error">
                <span>login failed!!</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { DeGooglePlain, AkGithubFill, AkFacebookFill, AkInstagramFill, AkTwitterFill } from '@kalimahapps/vue-icons';
import qZone1 from '/imges/qZone1.png'
import qZone2 from '/imges/qZone2.png'
import qZone3 from '/imges/qZone3.png'
import AmazingNewspaper from '../components/AmazingNewspaper.vue'
import { UseAuthStore } from '@/stores/Auth';
const store = UseAuthStore()
</script>

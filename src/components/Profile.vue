<template>
    <Header></Header>
    <Navber></Navber>
    <div class=" w-80 mx-auto pt-10 pb-10">
        <div class="card bg-base-100  shadow-xl">

            <div class="relative ">
                <div class="avatar flex  justify-center ">
                    <div class="w-24 rounded" v-if="!store.Loginuser.photoURL">

                        <!-- <img :src="store?.Loginuser?.photoURL" /> -->
                        <img :src=userpic alt="" srcset="" v-if="!store.imgUrl">
                        <img :src="store.imgUrl" alt="" v-if="store.imgUrl">
                        
                    </div>

                    <div v-if="store.Loginuser.photoURL" class="w-24 rounded">
                        <img  :src="store.Loginuser?.photoURL" alt="">
                    </div>

                </div>
                <div class="absolute inset-x-44 bottom-0">
                    <input type="file" id="fileup" class=" hidden" v-on:change="handleFileuplode" />
                    <label for="fileup" >
                        <span class="text-3xl text-orange-700" v-if="!store.Loginuser.photoURL">
                            <FlFilledCameraArrowUp />
                        </span>
                        <span class="text-3xl text-orange-700" v-if="!store.isgoogleOngitHubLoggedIn ">
                            <FlFilledCameraArrowUp />
                        </span>
                    </label>
                </div>

            </div>

            <div class="card-body ">

                <h2 class="text-center"> Welcome Mr. <span class="text-lime-500 text-lg">{{
                            store?.Loginuser?.displayName }}</span></h2>
                <p class="text-center">Email :{{ store?.Loginuser?.email }} </p>
                <div class="w-full">
                    <button v-on:click="HandelSignOut" class="btn btn-primary w-full">Sign_OUT</button>
                </div>
            </div>
        </div>
    </div>
    <!-- toster -->
    <div>

    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Navber from '@/components/Navber.vue'
import { UseAuthStore } from '@/stores/Auth'
import userpic from '/public/imges/user.png'
import { useRouter} from 'vue-router'
import { FlFilledCameraArrowUp } from '@kalimahapps/vue-icons';

const router = useRouter()
const store = UseAuthStore()


// console.log(store.Loginuser);

function handleFileuplode(event) {
    const file = event.target.files[0];
    if (file) {
        // this.fileName = file.name;
        // Optionally, you can process the file here, e.g., read content or upload
        store.setFile(file);
    }
    store.isfileuploded = true;
    store.uplodehandel()
};
//
// router for redirect user
function HandelSignOut() {
    store.HandelSignOut()
    // redirect to login page
     router.push({ path: '/login' })
}

</script>

<template>
    <div>
        <Header></Header>
        <Navbar></Navbar>
    </div>
    <div class="flex items-center justify-center mt-7 md:mt-12">
        <div class=" sm:m-3 w-full lg:w-2/3 mx-auto  ">
            <div class=" lg:w-4/5 mx-auto">
                <p class="font-_outfit font-bold text-xl md:text-4xl text-center   p-4 lg:p-7 ">Login your account</p>
            </div>
            <!-- from  -->
            <div class=" p-3 lg:w-1/2 mx-auto border-t-2">
                <div class=" border rounded-lg">
                    <form  @submit.prevent="HandeleFrom"  class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input v-model="store.typedEmail" type="email" placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <!-- password hide show -->
                            <div class="relative">

                                <input v-if="!show " type="text" placeholder="password" class="input input-bordered w-full"
                                v-model="store.typedPass"
                                    required />
                                <input v-if="show" type="password" placeholder="password" class="input input-bordered w-full"
                                v-model="store.typedPass"
                                    required />

                                <span class="absolute mt-3 ml-[-2rem]" v-on:click="passShowHide">
                                    <span v-if="show "><AnFilledEyeInvisible /></span>
                                    <span v-if="!show"><AnFilledEye/></span>
                                </span>


                            </div>


                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p class="text-center font-semibold  pb-4">Dont’t Have An Account ? <span class="text-red-400">
                        <router-link :to="{name :'registration'}">Register</router-link>
                        
                    </span></p>
                </div>
            </div>
            <div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navber.vue'
import Header from '../components/Header.vue'
import { AnFilledEye, AnFilledEyeInvisible } from '@kalimahapps/vue-icons';
import { UseAuthStore } from '@/stores/Auth';
const store = UseAuthStore()
let show = ref('')
function passShowHide() {
    console.log("sjfgsfsdyufdftdf");
    // for store
    // this.show = !this.show
    //    for vue template
    show.value = !show.value


};
function HandeleFrom(){
    console.log("from submited");
    store.SignInEmailAndPass()
      
}
</script>

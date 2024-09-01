<template>
    <div>
        <Navbar />
    </div>
    <div>
        <div class="flex items-center justify-center mt-7 md:mt-12">
            <div class=" sm:m-3 w-full lg:w-2/3 mx-auto  ">
                <div class=" lg:w-4/5 mx-auto">
                    <p class="font-_outfit font-bold text-xl md:text-4xl text-center   p-4 lg:p-7 ">Register your
                        account
                    </p>
                </div>
                <!-- from  -->
                <div class=" p-5 lg:w-1/2 mx-auto border-t-2">
                    <div class=" border rounded-lg">
                        <form @submit.prevent="HandeleRegistration" class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input v-model="store.regname" type="text" placeholder="Enter Your Name "
                                    class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Photo URL</span>
                                </label>
                                <input v-model="store.regPhoto" type="url" placeholder="Enter your Photo URL"
                                    class="input input-bordered" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input v-model="store.typedEmail" type="email" placeholder="email"
                                    class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <!-- password hide show -->
                                <div class="relative">

                                    <input v-if="!show" type="text" placeholder="password"
                                        class="input input-bordered w-full" v-model="store.typedPass" required />
                                    <input v-if="show" type="password" placeholder="password"
                                        class="input input-bordered w-full" v-model="store.typedPass" required />

                                    <span class="absolute mt-3 ml-[-2rem]" v-on:click="passShowHide">
                                        <span v-if="show">
                                            <AnFilledEyeInvisible />
                                        </span>
                                        <span v-if="!show">
                                            <AnFilledEye />
                                        </span>
                                    </span>


                                </div>


                                <label class="label mt-3">
                                    <input v-model="checked" type="checkbox" checked="checked"
                                        class="checkbox  checkbox-sm" />
                                    <p class="ml-2">Accept Term & Conditions</p>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button type="submit" class="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <p class="text-center font-semibold  pb-4">Allready Have An Account ? <span
                                class="text-red-400">
                                <router-link :to="{ name: 'login' }">LogIn</router-link>

                            </span></p>
                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navber.vue'
import { UseAuthStore } from '@/stores/Auth';
import { AnFilledEye, AnFilledEyeInvisible } from '@kalimahapps/vue-icons';
import { ref } from 'vue'
const store = UseAuthStore()

let show = ref('')
let checked = ref('')

function passShowHide() {
    console.log("sjfgsfsdyufdftdf");
    // for store
    // this.show = !this.show
    //    for vue template
    show.value = !show.value


};
function HandeleRegistration() {
    console.log("registration press");
    console.log(checked.value);
    console.log(store.regname,store.regPhoto,store.typedEmail,store.typedPass);
    store.registerWithEmail()

}
</script>

<script setup>
import {UseAuthStore} from '@/stores/Auth'
const store = UseAuthStore()
</script>

<template>
    <main >

        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-_outfit">
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about">About</RouterLink>
                        </li>
                    </ul>
                </div>
                <!-- <a class="btn btn-ghost text-xl">Web name</a> -->
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 font-_outfit">
                    <li class="mx-2">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{name:'career'}">Career</RouterLink>
                    </li>

                </ul>
            </div>
            <div class="navbar-end">
                <!-- profile buton added -->
                <div class="flex gap-3">
                    <div >
                        <router-link :to="{name:'login'}">
                         <button class = "btn bg-slate-500 text-yellow-50 text-base px-7">login</button>
                        </router-link>
                    </div>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                            <!-- after log  in profile icon change -->
                            <div class="w-10 rounded-full">
                                <img v-if="!store.Loginuser" alt="Tailwind CSS Navbar component"
                                    src="/imges/user.png" />
                                <img v-if="store.Loginuser" alt="Tailwind CSS Navbar component"
                                    :src="store.Loginuser?.photoURL" />
                                
                            </div>
                            <div class="w-10 rounded-full">

                            </div>
                            <!--  -->
                        </div>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            <li>
                                <!-- User only see profile if loged in -->
                                <div>
                                    <router-link :to="{name:'profile'}">
                                    <a class="justify-between pl-3">
                                          Profile
                                        <span class="badge">New</span>
                                    </a>
                                </router-link>
                                </div>
                            </li>
                            <li>
                                <div class="justify-start pl-6">
                                    <router-link :to="{name : 'login'}">login</router-link>

                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <!--  profle button finished -->

            </div>
        </div>
    </main>
</template>
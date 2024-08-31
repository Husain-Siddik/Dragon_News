<template>
    <p class="text-xl font-semibold pb-5 pl-2">Dragon News Home</p>
    <div v-for="news in store.news" :key="news._id" class=" pb-7">

        <div class="bg-[#F3F3F3] border flex justify-between items-center p-2">

            <div class=" flex gap-2">
                <!-- Author info -->
                <div class="avatar  ">
                    <div class=" w-12 h-12 rounded-full">
                        <img :src=news?.author?.img />
                    </div>

                </div>
                <div class="">
                    <p class="text-lg font-semibold ">{{ news?.author?.name }}</p>
                    <p v-if="!news?.author?.name" class="text-lg font-semibold ">Publisher name</p>
                    <p>{{ news?.author?.published_date }}</p>
                </div>
            </div>
            <!-- icon -->
            <div class="">
                <div class="flex items-center gap-2">
                    <img :src=saveicon alt="">
                    <BsShare />
                </div>
            </div>
        </div>


        <!-- card -->

        <div class="font-_popins">
            <div class="card bg-base-100 w-full shadow-xl">
                <p class="text-xl font-bold px-10 pt-5">{{ news?.title }}</p>
                <figure class="px-10 pt-5">
                    <img :src=news?.image_url alt="news" class="rounded-xl" />
                </figure>
                <div class="card-body items-start ">
                    <!-- conditional reander -->
                    <router-link :to="{ name: 'NewsDetails', params: { _id: news._id } }">
                        <p v-if="news?.details.length > 500" class="font-medium text-base border-b-2">{{ news
        ?.details.slice(0, 200) }}

                            <span class="text-red-400">read more....</span>
                        </p>
                        <p v-else>{{ news?.details }}</p>

                    </router-link>
                    <!-- router link -->
                    <!-- rating -->
                    <div class=" w-full flex justify-between items-center">
                        <div class=" flex items-center gap-3">
                            <div class="rating" v-bind=news?.rating?.number>
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"
                                    checked="checked" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>{{ news?.rating?.number }}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <p>
                                <AnFilledEye />
                            </p>
                            <p>
                                {{ news?.total_view }}
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <!-- card -->

        </div>
    </div>
</template>
<script setup>
import { BsShare, AnFilledEye } from '@kalimahapps/vue-icons';
import { RouterLink } from 'vue-router'
import saveicon from '../../public/saveicon.png'
import { useAllNewsStore } from '@/stores/AllNews'
const store = useAllNewsStore()
</script>
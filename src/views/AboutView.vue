<template>
  <div>
    <Header></Header>
    <Navber></Navber>

    <div class="border w-1/4 mx-auto ">

      <input type="file" id="fileup" class=" hidden" v-on:change="handleFileuplode" />

      <label for="fileup">
        <span class="text-4xl text-center">
          <FlFilledCameraArrowUp />
        </span>
      </label>
    </div>
    <div>
      <p class="text-center" v-if="store.isfileuploded"><span class="loading loading-spinner text-error loading-lg"></span></p>
      <img :src="store.imgUrl" alt="" srcset="">
    </div>

  </div>
</template>
<script setup>
import Navber from '../components/Navber.vue'
import Header from '../components/Header.vue'
import { FlFilledCameraArrowUp } from '@kalimahapps/vue-icons';
import { UseAuthStore } from '@/stores/Auth';
import { ref } from 'vue'
const store = UseAuthStore()

function handleFileuplode(event) {

  //
 
  // store.downlodehandele()
}

</script>

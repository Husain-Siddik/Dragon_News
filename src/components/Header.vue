<template>
    <div class="text-center mt-5 md:mt-12 ">
        <img class="mx-auto" :src="logo" alt="Dragon NEWS">
        <h2 class="capitalize text-xl pb-2 ">jurnalism with fair and faver</h2>
        <h2 class="text-xl mb-2">
            {{ moment().format(" dddd,MMMM D, YYYY") }}
        </h2>
    </div>
</template>

<script setup>
import logo from '/imges/logo.png'
import moment from 'moment';
</script>

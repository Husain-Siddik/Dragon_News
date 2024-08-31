<template>
    <div>
   <p class="text-7xl">page of news detail for</p>
   <h3 class="text-5xl">{{ route.params._id }}</h3>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params._id);

</script>
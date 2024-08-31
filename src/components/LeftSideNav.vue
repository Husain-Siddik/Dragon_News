<template>
    <div class="text-xl font-semibold">
        <p class="pl-2"> All Caterogy</p>

        <div class="pt-3 px-2" v-for="nav in Nav" :key="nav.id">
            <button class="btn w-full" v-on:click="catagoryUdate(nav.id)">{{ nav?.name }}</button>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useAllNewsStore } from '@/stores/AllNews'
const store = useAllNewsStore()
const Nav = ref('')

onMounted(() => {
    async function getnav() {
        try {
            const response = await axios.get('/data/categories.json');
            //console.log(response.data);
            Nav.value = response.data
            //console.log(Nav.value);

        } catch (error) {
            console.log(error);
        }
    }
    getnav()

    //store.loadNews()
    catagoryUdate()
})
function catagoryUdate(cat) {
    store.loadNews(cat)
    
    // console.log(store.news?.category_id);

   //;
    //store.news = filteredItems
    //console.log(store.news);

    

}

</script>

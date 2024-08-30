<script setup>
import Navbar from '../components/Navber.vue'
import LeftSideNav from '../components/LeftSideNav.vue'
import RightSideNav from '../components/RightSideNav.vue'
import Header from '../components/Header.vue'
import LeatestNews from '../components/LeatestNews.vue'
import LeftSidePic from '../components/LeftSidePic.vue'
import NewsAll from '../components/NewsAll.vue'
</script>


<template>
  <div class="max-w-screen-2xl mx-auto">
    <Header></Header>
    <LeatestNews></LeatestNews>
    <Navbar />
    <div class=" grid grid-cols-1  md:grid-cols-4 gap-6 p-2 md:p-0  ">
      <div class="">
        <LeftSideNav></LeftSideNav>
        <LeftSidePic></LeftSidePic>
      </div>
      <div class="border md:col-span-2">
        <NewsAll></NewsAll>
      </div>
      <div class="">
        <RightSideNav></RightSideNav>
      </div>
    </div>

  </div>
</template>
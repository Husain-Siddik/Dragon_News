<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{name:'about'}">About</RouterLink>
        <RouterLink :to= "{ name:'career' }">Career</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>



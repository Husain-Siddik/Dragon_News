<template>
    <div>
        <div class="border py-1 md:py-1 font-_popins  bg-[#f3f3f3] relative text-center  items-center   rounded-sm">
            <div class="absolute z-10 ml-1 ">
                <button class="btn bg-red-600 text-white  text-sm   md:text-xl ">Leatest</button>
            </div>

            <div class=" md:max-w-screen-2xl z-0 mt-2  text-center   ">
                <marquee-text>
                   
                    <p class="md:max-w-7xl font-_outfit font-semibold">
                        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
                    </p>
                    <br>
                   

                </marquee-text>
            </div>
        </div>
    </div>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component'
</script>

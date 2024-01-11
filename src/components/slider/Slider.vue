<template>
    <div class="slider">
        <div class="container">
            <swiper 
            :autoplay="{
            delay: 2000,
            disableOnInteraction: false,}" 
            :modules="modules"
            :loop="true"
            :slidesPerView="1" 
            class="mySwiper">
                <swiper-slide class="slides">
                    <img class="slider__img" src="../../assets/images/samsungPhones.webp" alt="">
                </swiper-slide>
                <swiper-slide class="slides">
                    <img class="slider__img" src="../../assets/images/iphonePhones.jpg" alt="">
                </swiper-slide>
                <swiper-slide class="slides">
                    <img class="slider__img" src="../../assets/images/huawei.jpg" alt="">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';

 const modules = [Autoplay]
</script>
<style>
    
</style>
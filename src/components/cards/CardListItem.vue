<template>
    <router-link :to="`/products/${product.id}`" class="cardListItem">
        <div class="cardListItem__box">
            <img class="cardListItem__img" :src="product.thumbnail" alt="">
            <h3 class="cardListItem__title">
              {{ product.title }}
            </h3>
            <p class="cardListItem__desc">
                {{ product.description }}
            </p>
            <span class="cardListItem__price">
                {{ product.price }} $
            </span>
            <span class="cardListItem__per">
                -{{ product.discountPercentage }} %
            </span>
            <!-- <span class="cardListItem__rate">
                4.69
            </span> -->
            <span class="cardListItem__stock">
               Product quantity: {{ product.stock }}
            </span>
            <span class="cardListItem__brand">
                {{ product.brand }}
            </span>
            <span class="cardListItem__categ">
                {{ product.category }}
            </span>
        </div>
    </router-link>
</template>
<script setup>
    const props = defineProps({
    product: Object,
    });
</script>
<style>
    
</style>
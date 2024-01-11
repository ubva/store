<template>
    <div class="productId">
        <div class="container">
            <div class="productId__wrapper">
                <img :src="selectProduct.thumbnail" alt="" class="productId__img">
                <div class="productId__box">
                    <h3 class="productId__title">{{ selectProduct.title }}</h3>
                    <p class="productId__desc">{{ selectProduct.description }}</p>
                    <span class="productId__price">{{ selectProduct.price }} $</span>
                    <!-- <span class="productId__per">lorem</span> -->
                    <span class="productId__stock">Product quantity: {{ selectProduct.stock }}</span>
                    <span class="productId__brand">{{ selectProduct.brand }}</span>
                    <span class="productId__categ">{{ selectProduct.category }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        selectProduct: Array,
    });
</script>

<template >
    <div class="navBottom">
        <div class="container navBottom__wrapper">
            <div class="navBottom__box">
                <select class="navBottom__select" v-model="productStore.value" @change="getValue">
                    <option>Category Products</option>
                    <option>title</option>
                    <option>price</option>
                    <option>stock</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useProduct } from '../../stores/store';
const value = ref("Category Products")
const productStore = useProduct()
const sortProduct = computed(()=> productStore.sortProduct) 
const getValue = ()=>{
    productStore.sortProduct 
}
</script>
<style>
    
</style>
<template>
    <div v-if="selectProduct">
        <ProductId :selectProduct="selectProduct"/>
    </div>
</template>
<script setup>
import ProductId from "../components/productId/ProductId.vue"
import { useProduct } from '../stores/store';
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const IdStore = useProduct();
const router = useRoute()

let routeId = router.params.id.split("").splice(0,2)


onMounted(async () =>{
    await IdStore.getId(routeId
    .join("")
    );
})
const selectProduct = computed(()=>{
    return IdStore.id
})
// console.log(IdStore.product);
</script>

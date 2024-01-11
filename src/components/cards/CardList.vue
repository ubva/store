<template>
    <div class="cardList">
        <div class="cardList__box">
            <h2 class="cardList__title" v-if="productArr">
                Shopper products
            </h2>
            <span class="cardList__spn">
                Total amount : 100
            </span>
        </div>
        <div class="cardList__wrapper">
            <CardListItem v-for="product in productArr" key="product.id" :product="product"/>
        </div>
        <div class="cardList__icon">
            <button class="cardList__icon-prev" @click="prevSkip()">
            <img src="../../assets/images/arrowLeft.svg" alt="" />
            Prev
            </button>
            <div class="cardList__icon-num">
               {{ skip + 1 }}
            <span>...</span>
            9
            </div>
            <button class="cardList__icon-next" @click="nextSkip()">
            Next
            <img src="../../assets/images/arrowLeft.svg" alt="" />
            </button>
        </div>
    </div>
</template>
<script setup>
    import CardListItem from '@/components/cards/CardListItem.vue'
    import { useProduct } from '../../stores/store';
    import { ref, onMounted } from "vue";
    const skip = ref(0)
    const productArr = ref(null);
    const productStore = useProduct();
    async function getProducts() {
      await productStore.getProduct("product", skip.value);
      productArr.value = productStore["product"];
    }
    onMounted(() => getProducts());
    function nextSkip(){
        skip.value++
        if(skip.value >= 9){
            skip.value = 0
        }
        getProducts()
    }
    function prevSkip(){
        skip.value--;
       if(skip.value < 1){
        skip.value = 8
       }
       getProducts()
    }
</script>
<style>
    
</style>
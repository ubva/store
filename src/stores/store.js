import { defineStore } from 'pinia'
import axios from 'axios'

export const useProduct = defineStore('product',{
  state:()=>({
    product: null,
    id: null,
    value: "Category Products"
  }),
  actions:{
    async getProduct (id, skip = 1){
      try {
        let res = await axios.get(`${import.meta.env.VITE_LINK}/?skip=${skip *12}&limit=12`)
        this.product = res.data.products
      } catch (error) {
        
      }
    },
    async getId (id){
      try {
        let nmadr = await axios.get(`${import.meta.env.VITE_LINK}/${id}`)
        this.id = nmadr.data
      } catch (error) {
        
      }
    }
  },
  getters:{
    sortProduct(state){
      if(state.product){
        if(state.value == "Category Products"){
          return state.product
        }
        else {
          return state.product.sort((prev, next)=>{
            let newPrev = state.value == "product name" ? prev[state.value].toLowerCase() : prev[state.value]
            let newNext = state.value == "product name" ? next[state.value].toLowerCase() : next[state.value]
            if(newPrev < newNext){
              return -1
            }
          })
        }
      }
    }
  }
})

<template>
  <v-container>
    <h1>商品一覧</h1>
    <div v-if="products">
      <ProductList :products="products" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import type { ProductType } from '~/server/models/product.schema'
import ProductList from './ProductList.vue'

const { data } = useFetch('/api/products')
const products = computed<undefined | ProductType[]>(() => {
  if (!data.value) undefined
  return data.value as ProductType[]
})
</script>

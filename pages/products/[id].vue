<template>
  <v-container v-if="product">
    <h1>{{ product.name }}</h1>
    <v-list lines="one">
      <v-list-item>
        価格: {{ product.price }}
      </v-list-item>
      <v-list-item>
        カテゴリー: {{ product.category }}
      </v-list-item>
    </v-list>
    <NuxtLink to="/products">
      商品一覧
    </NuxtLink>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { ProductType } from '~/server/models/product.schema'

const route = useRoute()
const id = route.params.id

console.log(id)

const { data } = await useFetch(`/api/products/${id}`)

const product = computed<ProductType | undefined>(() => {
  if (!data.value) undefined
  return data.value as ProductType
})
</script>

<template>
  <v-data-table :headers="headers" :items="products">
    <template v-slot:['item.name']="{ item }">
      <NuxtLink :to="{ name: 'products-id', params: { id: item._id } }">
        {{ item.name }}
      </NuxtLink>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import type { ProductType } from '~/server/models/product.schema'

defineProps<{
  products: ProductType[]
}>()

const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Price', key: 'price' },
  { title: 'Category', key: 'category' },
]
</script>

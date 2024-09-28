<template>
  <div h-screen>
    <Connection :code=""readyState ?? 0" />
  </div>
</template>

<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'

const { data, refresh } = await useFetch('/api/status')
const readState = ref(data.value ?? 0)

const { pause, resume } = useIntervalFn(async () => {
  refresh()
  readState.value = data.value ?? 0
  console.log('re-checking...')
}, 5000)

watch(
  readState,
  () => {
    if (readState.value === 1) pause()
    else resume()
  },
  { immediate: true },
)
</script>

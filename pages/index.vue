<template>
  <h1>Hello</h1>
  <v-btn @click="showData">
    show data
  </v-btn>
  <v-btn @click="create">
    create dummy data
  </v-btn>
  <v-btn @click="deleteUser">
    delete dummy data
  </v-btn>
</template>

<script setup lang="ts">
const { data, refresh } = useFetch('/api/users', { immediate: false })
const showData = () => {
  refresh()
  console.log(data.value)
}

const create = async () => {
  const { data, error } = await useFetch('/api/users/create', {
    method: 'POST',
    body: {
      name: 'John Doe',
      slug: '1',
    },
  })

  if (error.value) {
    console.log('failed')
    console.log(error.value)
    return error.value
  }

  console.log('maybe success')
  console.log(data.value)
}

const deleteUser = async () => {
  const { data, error } = await useFetch(
    '/api/users/66f806498e12be73b1867c0c',
    {
      method: 'DELETE',
    },
  )

  if (error.value) {
    console.log('failed to delete')
    console.log(error.value)
    return
  }

  console.log('delete success')
  console.log(data.value)
}
</script>

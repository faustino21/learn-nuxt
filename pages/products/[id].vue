<template>
    <div>
        <h2>{{ product.title }}</h2>
        <!-- <img src={{ product.image }} alt=""> -->
        <p>{{ product.description }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = `https://fakestoreapi.com/products/` + id

    //fetch product
    const { data:product } = await useFetch(url)

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>
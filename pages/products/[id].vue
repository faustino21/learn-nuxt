<template>
    <div>
        <h2>Product {{ id }}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero facilis eaque voluptate quisquam labore, tenetur harum nisi quibusdam? Esse, rerum?</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>
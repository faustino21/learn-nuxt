<template>
    <div>
        <h2>About</h2>
        <div>{{ data.message }}</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis dicta vero atque eum, eligendi illo quas suscipit, animi, ipsum itaque assumenda.</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/jettt?name=faustino', {
        method: 'post',
        body : {age : 30}
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>
<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis dicta vero atque eum, eligendi illo quas suscipit, animi, ipsum itaque assumenda.</p>
    </div>
    <div>project : {{ project }}</div>
    <div>project Meta : {{ projectMeta }}</div>
</template>

<script setup>
    const { data: project, meta: projectMeta } = await useFetch('http://localhost:1337/api/projects')
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
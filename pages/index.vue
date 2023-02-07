<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Tinos NuxtJs</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">about</NuxtLink></li>
                    <li><NuxtLink to="/products">products</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nobis dicta vero atque eum, eligendi illo quas suscipit, animi, ipsum itaque assumenda.</p>
    </div>
</template>

<script setup>

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
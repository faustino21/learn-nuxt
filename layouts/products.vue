<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Tinos NuxtJs</NuxtLink>
            </nav>
        </header>

        <!-- output page content -->
        <div>
            <slot />
        </div>

        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">about</NuxtLink></li>
                <li><NuxtLink to="/products">products</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color : #12b488;
    }
</style>
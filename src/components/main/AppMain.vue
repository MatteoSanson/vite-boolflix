<script>
import SearchNav from './SearchNav.vue';
import MovieList from './MovieList.vue';

export default {
    name: 'AppMain',
    components: {
        SearchNav,
        MovieList,
    }
};
</script>

<template>
    <main>
        <SearchNav />
        <MovieList />
    </main>
</template>

<style></style>
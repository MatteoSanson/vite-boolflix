<script>
import MovieCard from './MovieCard.vue';
import { store } from '../../store';

export default {
    name: 'MovieList',
    components: {
        MovieCard,
    },
    data() {
        return {
            store,
        }
    }
};
</script>

<template>
    <div class="container">
        <MovieCard v-for="movie in store.lista" :titolo="movie.title" :original="movie.original_title"
            :lingua="movie.original_language" :voto="movie.vote_average" />
    </div>
</template>

<style></style>
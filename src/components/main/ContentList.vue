<script>
import ItemCard from './ItemCard.vue';
import { store } from '../../store';

export default {
    name: 'MovieList',
    components: {
        ItemCard,
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
        <div v-if="store.listaMovie.length">
            <h2>Movies</h2>
            <ItemCard v-for="movie in store.listaMovie" :titolo="movie.title" :original="movie.original_title"
                :lingua="movie.original_language" :voto="movie.vote_average" />
        </div>
        <div v-if="store.listaSeries.length">
            <h2>Series</h2>
            <ItemCard v-for="series in store.listaSeries" :titolo="series.name" :original="series.original_name"
                :lingua="series.original_language" :voto="series.voto_average" />
        </div>
    </div>
</template>

<style></style>
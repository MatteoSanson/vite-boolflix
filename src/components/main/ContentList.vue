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
    <div class="container-custom">
        <!-- Movies -->
        <div class="text-center mb-4">
            <h2 class="my-3">Movies</h2>
        </div>
        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
            <div v-if="store.listaMovie.length" class="col mb-4" v-for="movie in store.listaMovie">
                <ItemCard :titolo="movie.title" :original="movie.original_title" :lingua="movie.original_language"
                    :voto="movie.vote_average" :img="movie.poster_path" />
            </div>
        </div>

        <!-- Series -->
        <div class="text-center mb-4">
            <h2 class="my-3">Series</h2>
        </div>
        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
            <div v-if="store.listaSeries.length" class="col mb-4" v-for="series in store.listaSeries">
                <ItemCard :titolo="series.name" :original="series.original_name" :lingua="series.original_language"
                    :voto="series.vote_average" :img="series.poster_path" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-custom {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}
</style>
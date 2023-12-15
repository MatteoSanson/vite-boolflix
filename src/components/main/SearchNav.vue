<script>
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'SearchNav',
    data() {
        return {
            store,
            searching: '',
        }
    },
    methods: {
        search() {
            axios.get(store.searchMoviesURL + this.searching).then((response) => {
                store.listaMovie = response.data.results;
                console.log('Movies', store.listaMovie);
            });
            axios.get(store.searchSeriesURL + this.searching).then((response) => {
                store.listaSeries = response.data.results;
                console.log('Series', store.listaSeries);
            });
            this.searching = '';
        }
    },
}
</script>

<template>
    <form @submit.prevent="search">
        <label for="search">Search</label>
        <input id="search" type="text" v-model="searching">
        <button>cerca</button>
    </form>
</template>

<style></style>
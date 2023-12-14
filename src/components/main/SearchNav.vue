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
                store.lista = response.data.results;
                console.log('hai cliccato', store.lista);
            });
        }
    },
}
</script>

<template>
    <div>
        <input type="text" v-model="searching">
        <button @click="search">cerca</button>
    </div>
</template>

<style></style>
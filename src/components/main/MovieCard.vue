<script>
import { store } from '../../store';

export default {
    name: 'MovieCard',
    props: ['titolo', 'original', 'lingua', 'voto'],
    data() {
        return {
            store,
        }
    }
};
</script>

<template>
    <div>
        <ul>
            <li>
                <h3>Titolo: {{ titolo }}</h3>
            </li>
            <li>
                <h3>Titolo originale: {{ original }}</h3>
            </li>
            <li>
                <h3>Lingua: {{ lingua }}</h3>
            </li>
            <li>
                <h3>Voto: {{ voto }}</h3>
            </li>
        </ul>
    </div>
</template>

<style></style>
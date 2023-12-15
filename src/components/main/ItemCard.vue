<script>
import { store } from '../../store';

export default {
    name: 'ItemCard',
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
                <h4>Titolo originale: {{ original }}</h4>
                <p>Lingua: {{ lingua }}</p>
                <p>Voto: {{ voto }}</p>
            </li>
        </ul>
    </div>
</template>

<style></style>
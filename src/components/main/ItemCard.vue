<script>
import { store } from '../../store';

export default {
    name: 'ItemCard',
    props: ['titolo', 'original', 'lingua', 'voto', 'img'],
    data() {
        return {
            store,
        }
    },
    computed: {
        imgURL() {
            if (this.img) {
                return store.imgURL + this.img;
            } else {
                return '';
            }
        },
    },
};
</script>

<template>
    <div>
        <ul>
            <li>
                <img :src="imgURL" :alt="titolo">
                <h3>Titolo: {{ titolo }}</h3>
                <h4>Titolo originale: {{ original }}</h4>
                <div class="language" v-if="lingua === 'it'">
                    <p>
                        Lingua: {{ lingua }}
                    </p>
                    <div class="img-container">
                        <img src="../../assets/pics/istockphoto-166053218-612x612.jpg" alt="">
                    </div>
                </div>
                <div class="language" v-else-if="lingua === 'en'">
                    <p>
                        Lingua: {{ lingua }}
                    </p>
                    <div class="img-container">
                        <img src="../../assets/pics/Flag_of_Great_Britain_(English_version).png" alt="">
                    </div>
                </div>
                <p v-else>Lingua: {{ lingua }}</p>

                <p>Voto: {{ voto }}</p>
            </li>
        </ul>
    </div>
</template>

<style>
.language {
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: space-between;
}

.img-container {
    width: 25px;
    height: 20px;
    object-fit: contain;
}

.img-container img {
    width: 100%;
}
</style>
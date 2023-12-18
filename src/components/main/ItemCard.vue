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
        fiveStars() {
            const fullStars = Math.ceil((this.voto / 10) * 5);
            const emptyStars = 5 - fullStars;
            return {
                full: Array(fullStars).fill('fa-solid fa-star'),
                empty: Array(emptyStars).fill('fa-regular fa-star'),
            };
        },
    },
};
</script>

<template>
    <div>
        <ul>
            <li>
                <img :src="imgURL" :alt="titolo" class="img-fluid">
                <h3>Titolo: {{ titolo }}</h3>
                <h4>Titolo originale: {{ original }}</h4>
                <div class="language d-flex align-items-center justify-content-between" v-if="lingua === 'it'">
                    <p class="mb-0">
                        Lingua: {{ lingua }}
                    </p>
                    <div class="img-content d-flex align-item-center">
                        <img src="../../assets/pics/istockphoto-166053218-612x612.jpg" alt="Italian flag"
                            class="img-fluid d-block">
                    </div>
                </div>
                <div class="language d-flex align-items-center justify-content-between" v-else-if="lingua === 'en'">
                    <p class="mb-0">
                        Lingua: {{ lingua }}
                    </p>
                    <div class="img-content d-flex align-item-center">
                        <img src="../../assets/pics/Flag_of_Great_Britain_(English_version).png" alt="Great Britain flag"
                            class="img-fluid d-block">
                    </div>
                </div>
                <p v-else class="mb-0">Lingua: {{ lingua }}</p>
                <p>
                    Voto:
                    <font-awesome-icon v-for="star in fiveStars.full" :icon="star" />
                    <font-awesome-icon v-for="star in fiveStars.empty" :icon="star" />
                </p>
            </li>
        </ul>
    </div>
</template>

<style scopeds lang="scss">
.language {
    width: 110px;
}

.img-content {
    width: 25px;
    height: 20px;
}
</style>
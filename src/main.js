import { createApp } from 'vue';
/* file stile */
import './assets/scss/style.scss';

import App from './App.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as thinStar } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, thinStar);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import { reactive } from "vue";

export const store = reactive({
    listaMovie: [],
    listaSeries: [],
    searchMoviesURL: 'https://api.themoviedb.org/3/search/movie?api_key=f9e74b555c25ddef5e5d2185dde7ffa1&language=it-IT&query=',
    searchSeriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=f9e74b555c25ddef5e5d2185dde7ffa1&language=it-IT&query=',
});
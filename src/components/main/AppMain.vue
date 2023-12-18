<script>
import SearchNav from './SearchNav.vue';
import ContentList from './ContentList.vue';

export default {
    name: 'AppMain',
    components: {
        SearchNav,
        ContentList,
    }
};
</script>

<template>
    <main class="d-flex flex-column align-items-center">
        <SearchNav />
        <ContentList />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

main {
    background-color: $secondary-bg-color;
}
</style>
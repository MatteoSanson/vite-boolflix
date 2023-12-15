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
    <main>
        <SearchNav />
        <ContentList />
    </main>
</template>

<style></style>
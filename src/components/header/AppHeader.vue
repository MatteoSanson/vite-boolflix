<script>
export default {
    name: 'AppHeader',
};
</script>

<template>
    <header class="d-flex align-items-center">
        <div class="logo ms-3">
            <img src="../../assets/pics/blflx.jpg" alt="boolflix logo">
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

header {
    background-color: $primary-bg-color;
    width: 100%;
    height: 100px;

    .logo {
        width: 250px;
        object-fit: contain;

        img {
            width: 100%;
        }
    }
}
</style>
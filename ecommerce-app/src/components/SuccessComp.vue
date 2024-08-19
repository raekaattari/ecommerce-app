<template>
    <div>
        <NavbarComp />
        <h2>Success!</h2>
        <p> Your order was purchased! </p>
    </div>
</template>

<script>

import NavbarComp from '@/components/NavbarComp.vue';

export default {
    name: 'SuccessPage',
    data() {
        return {
        };
    },
    components: {
        NavbarComp,
    },
};
</script>

<style scoped>
</style>
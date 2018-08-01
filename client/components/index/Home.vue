<template>
    <page-container :pageConfig='pageConfig'></page-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'home',
    computed: {
        ...mapGetters({
            pageConfig: 'pageConfig'
        })
    },
    async asyncData ({ store, route }) {
        store.dispatch('initPage')
    }
}
</script>

<style scoped>
</style>



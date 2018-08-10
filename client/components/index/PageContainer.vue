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
        let page = route.path;
        
        if (page && page !== '/') {
            page = page.replace(/^\//, '').replace(/\//g, '-');
        }
        if (page === '/') {
            page = 'home'
        }
        store.dispatch('initPage',{ page })
    },
    mounted () {
    }
}
</script>

<style scoped>
</style>



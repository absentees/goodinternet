<template>
    <Layout>
        <div>
            <h1>{{$page.site.name}}</h1>
            <p><a :href="$page.site.url" target="_blank">{{$page.site.url}}</a></p>
            
            <img :src="$page.site.desktopScreenshot[0].url" alt="">
        </div>
    </Layout>
    
</template>

<page-query>
    query Site ($id: String!) {
        site (id: $id) {
            id
            name
            path
            url
            desktopScreenshot {
                url
            }
        }
    }
</page-query>

<script>
    import Layout from '~/layouts/Default.vue'

    export default {
        components: {
            Layout
        }
        
    }
</script>

<style lang="scss" scoped>
    img {
        max-width: 700px;
    }
</style>
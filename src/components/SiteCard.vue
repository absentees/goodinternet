<template>
    <li class="siteCard">
        <a :href="site.url">{{ site.name }}</a>
        <div class="img-container">
            <img :src="site.desktopScreenshot[0].url" alt="">
        </div>
        
    </li>
</template>

<script>
    export default {
        name: 'SiteCard',
        props: ['site']
    }
</script>

<style lang="scss" scoped>
    li {
        flex: 25%;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .img-container {
        height: 200px;
        width: 100%;
        overflow: hidden;

        img {
            width: 100%;
        }
    }
</style>
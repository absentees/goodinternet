<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <Header/>

    <ul class="grid-container">
      <SiteCard v-for="edge in $page.allSite.edges" :key="edge.node.id" :site="edge.node"/>
    </ul>


  </Layout>
</template>

<page-query>
query AllSites {
  allSite {
    edges {
      node {
        id
        name
        desktopScreenshot {
          url
        }
      }
    }
  }
}
</page-query>
<script>
import SiteCard from '~/components/SiteCard.vue'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    SiteCard
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  width: 700px;
  margin: 0 auto;
}
</style>

<template>
  <div class="blog-page">
    <div class="b-hero-container">
  
      <div class="nametag-container contain">

        <div class="example3" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/about" style="text-decoration: none;">
            <span class="underline-magical">Raghav Aggarwal</span>
          </nuxt-link>
        </div>

        <div class="example2" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/blog" style="text-decoration: none;">
            <span class="underline-magical">Blogs</span>
          </nuxt-link>
        </div>

         <div class="example" data-aos="fade-up" data-aos-duration="900">
         <a target="_blank" href="https://drive.google.com/file/d/1eY17t6eSunu_KQV46eylpop8Wd8C8w3I/view?usp=sharing">
          <!-- <nuxt-link to="https://drive.google.com/file/d/1eY17t6eSunu_KQV46eylpop8Wd8C8w3I/view?usp=sharing" style="text-decoration: none;"> -->
            <span class="underline-magical">Resume</span>
          <!-- </nuxt-link> -->
          </a>
        </div>
        
      </div>

      <div class="contain b-heading-container">
        <p class="pm b-h-subheading" data-aos="fade-up" data-aos-duration="1000">My Blog</p>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
          Hack Things
          <br />Solve Problems
          <br />
          <span class="outlined">Be Curious.</span>
        </h1>
        <p
          class="pm b-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >
          When I am not coding or watching movies, Sometimes I read, I read about tech controversies happening in the world or some other
          trending topics what i feel need importance. 
          <!-- <span
            class="underline-magical"
          >Code</span>,
          <span class="underline-magical">Design</span> and
          <span class="underline-magical">my Life.</span> -->
        </p>
      </div>
    </div>

    <!-- <ArticleList :isPaginated="true" :postsPerPage="10" /> -->

    <div class="b-all-article-container">
      <BlogSection :blogs="blogs" />
    </div>
  </div>

  
</template>

<script>
import BlogSection from '~/components/Sections/BlogSection'
import blogsEn from '~/contents/en/blogsEn.js'
// import blogsEs from '~/contents/es/blogsEs.js'

export default {
  layout: 'blog',
  components: {
    BlogSection
  },

  async asyncData({ app }) {
    const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs

    async function asyncImport(blogName) {
      const wholeMD = await import(
        `~/contents/${app.i18n.locale}/blog/${blogName}.md`
      )
      return wholeMD.attributes
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res
      }
    })
  },

  head() {
    return {
      title: this.$t('indexPageHead.title'),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: 'author', content: 'Raghav Aggarwal' },
        {
          name: 'description',
          property: 'og:description',
          content: this.$t('indexPageHead.description'),
          hid: 'description'
        },
        { property: 'og:title', content: this.$t('indexPageHead.title') },
        { property: 'og:image', content: this.ogImage },
        {
          name: 'twitter:description',
          content: this.$t('indexPageHead.description')
        },
        { name: 'twitter:image', content: this.ogImage }
      ]
    }
  },

  computed: {
    ogImage: function() {
      return
    }
  }
}
</script>

<style scoped>
.b-all-article-container {
  width: 100%;
  position: relative;
}


div.example{
  left: 70%;
  top: 2%;
  position: absolute;
}


div.example2{
  left: 45%;
  top: 2%;
  position: absolute;
}


div.example3{
  top: 2%;
  position: absolute;
}

@media screen and (max-width: 999px) {
  div.example3{
     top: 4%;
  }
}
@media screen and (max-width: 999px) {
  div.example{
     top: 4%;
     left: 80%;
  }
}
@media screen and (max-width: 999px) {
  div.example2{
     top: 4%;
     left: 50%;
  }
}

</style>
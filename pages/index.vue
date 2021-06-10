<template>
  <div>
    <div class="a-hero_container">
 
      <div class="nametag-container contain">

        <div class="h-name" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/about" style="text-decoration: none;">
            <span class="underline-magical">Raghav Aggarwal</span>
          </nuxt-link>
        </div>

        <div class="h-name example2" data-aos="fade-up" data-aos-duration="900">
          <nuxt-link to="/blog" style="text-decoration: none;">
            <span class="underline-magical">Blogs</span>
          </nuxt-link>
        </div>

         <div class="h-name example" data-aos="fade-up" data-aos-duration="900">
         <a target="_blank" href="https://drive.google.com/file/d/1eY17t6eSunu_KQV46eylpop8Wd8C8w3I/view?usp=sharing">
          <!-- <nuxt-link to="https://drive.google.com/file/d/1eY17t6eSunu_KQV46eylpop8Wd8C8w3I/view?usp=sharing" style="text-decoration: none;"> -->
            <span class="underline-magical">Resume</span>
          <!-- </nuxt-link> -->
          </a>
        </div>


<!-- 
        <div
          class="h-j-title"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >Software Developer
        </div> -->


      </div>

      <div
        class="contain h-hero-title"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="400"
      >
        <h1>
          <span>Graduate Analyst</span>
          <br />
          <span class="outlined">Technology</span> At
          <br />
          <a href="https://www.db.com/" target="_blank" rel="noopener" title="db.com">
            <span class="underline-magical-hero">Deutsche Bank</span>
          </a>
        </h1>
      </div>
      <div class="contain">
        <p data-aos="fade-up" data-aos-duration="900" data-aos-delay="600">
          Hi! I am Raghav Aggarwal and I am an undergraduate from IIT Guwahati in Mechanical Engineering.
          I love solving challenges and I code and write.
        </p>
      </div>
    </div>

   

    <div class="showcase-container-home">
      <div class="showcase-container-grid">
         <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/GoCorona">
            <thumbnail
              thumbnailName="Gocorona"
              thumbnailDescription="App  Redesign Concept"
              thumbnail="/cricbuzz-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="800"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/Blockchain">
            <thumbnail
              thumbnailName="Blockchain Aadhar Voting"
              thumbnailDescription="Microsoft Code fundoo Competition"
              thumbnail="/elevito-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="1000"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/TravelGo">
            <thumbnail
              thumbnailName="Travel Go"
              thumbnailDescription="Chatbot as Internship in Valiance Solutions"
              thumbnail="/ft-thumbnail-2.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
              data-aos-anchor-placement="top-bottom"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/SocialContour">
            <thumbnail
              thumbnailName="SocialContour"
              thumbnailDescription="Freelance"
              thumbnail="/bharatrohangif2.gif"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/OpenSource">
            <thumbnail
              thumbnailName="OpenSource"
              thumbnailDescription="OpenSource"
              thumbnail="/dreamz-thumbnail-cyan.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

        <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/automizeapps">
            <thumbnail
              thumbnailName="Automize Apps"
              thumbnailDescription="Internship"
              thumbnail="/awesome-inc-thumnail-3.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>

         <div class="p-thumbnail-ad">
          <nuxt-link to="/projects/goals101">
            <thumbnail
              thumbnailName="Change Management Tool"
              thumbnailDescription="Goals 101, Internship"
              thumbnail="/tbt-app-thumbnail.jpg"
              data-aos="zoom-out-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-once="true"
            />
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- view more work -->

    <!-- <div class="more-about-me">
      <div class="center-h-v">
        <nuxt-link to="/projects">
          <discovermore button-text="view more work" />
        </nuxt-link>
      </div>
    </div> -->

    <!-- people parallax slide section -->

    <!-- <div class="applause-button_container">
      <applause-button style="width: 58px; height: 58px;" color="red" multiclap="true"/>
    </div>-->

  </div>
</template>

<script>
import Thumbnail from '~/components/thumbnail'
import Parallax from 'vue-parallaxy'
import Discovermore from '~/components/discovermore'
import Homepeople from '~/components/homepeople'
import BlogSection from '~/components/Sections/BlogSection'
import blogsEn from '~/contents/en/blogsEn.js'
// import VideoShowcase from '~/components/Modal'
import playbutton from '~/components/playbutton'
export default {
  components: {
    Thumbnail,
    Discovermore,
    Homepeople,
    BlogSection,
    Parallax,
    // VideoShowcase,
    playbutton
  },

  // async asyncData({ app }) {
  //   const blogs = app.i18n.locale === 'en' ? blogsEn : blogsEs

  //   async function asyncImport(blogName) {
  //     const wholeMD = await import(
  //       `~/contents/${app.i18n.locale}/blog/${blogName}.md`
  //     )
  //     return wholeMD.attributes
  //   }

  //   return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
  //     return {
  //       blogs: res
  //     }
  //   })
  // },

  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen
    }
  }
  // data() {
  //   return {
  //     card: [
  //       {
  //         thumbnailName: 'Filming Eye',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase9.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase7.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase8.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase9.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase1.jpg')
  //       },
  //       {
  //         thumbnailName: 'Art',
  //         thumbnailDescription: 'Web, Identity',
  //         thumbnailImage: require('~/assets/img/thumbnail/showcase10.jpg')
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
.h-hero-title {
  white-space: wrap;
  margin-top: 12%;
}

.nametag-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  font-family: circular-book;
  font-size: 16px;
  grid-gap: 10px;
  white-space: nowrap;
  padding-top: 30px;
  overflow: hidden;
  padding-bottom: 2px;
}

.h-sec2-container {
  display: flex;
  width: 70%;
  align-items: center;
  align-content: center;
  margin-left: calc(16% - 45px);
  position: relative;
  margin-top: 100px;
}

.h-sec2-grid {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  height: auto;
  width: 100%;
}

.h-sec2-grid > .bottom-fit {
  align-items: flex-end;
  font-size: 2em;
  color: #ffeead;
  display: flex;
}

.h-sec2-grid > .middle-fit {
  align-items: center;
  font-size: 2em;
  color: #ffeead;
  display: flex;
}

.h-sec2-grid > .up-fit {
  align-items: baseline;
  font-size: 2em;
  color: #ffeead;
  display: flex;
}

.h-sec2-grid > div > img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media screen and (max-width: 1200px) {
  .h-hero-title {
    margin-top: 15%;
  }

  .h-sec2-container {
    width: 70%;
  }

  .h-sec2-grid {
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media screen and (max-width: 999px) {
  .h-sec2-container {
    width: 77%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 800px) {
  .h-sec2-container {
    width: 83%;
    margin-left: 10%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
@media screen and (max-width: 600px) {
  .h-sec2-container {
    width: 83%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}
@media screen and (max-width: 500px) {
  .h-hero-title {
    margin-top: 100px;
  }

  .h-sec2-container {
    width: 88%;
    margin-left: 7%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
}
@media screen and (max-width: 350px) {
  .h-sec2-container {
    width: 86%;
  }

  .h-sec2-grid {
    grid-gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  }
}

.h-work_heading {
  padding: 120px 0px 40px 0px;
  /* white-space: nowrap; */
}

.h-work_heading p {
  padding: 0px 32% 0px 0px;
  /* white-space: nowrap; */
}

/* showreel */

.video-showreel-modal {
  position: fixed;
  z-index: 1000;
}

.h-showreel_container {
  width: 100%;
  height: 90vh;
}

.h-showreel_container > img {
  width: 100%;
  object-fit: cover;
}

.h-showreel {
  position: relative;
  width: 100%;
  height: 90vh;
  z-index: 2;
  overflow: hidden;
}

.showreel-overlay {
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  position: absolute;
  top: 0%;
}

.showreel-button {
  position: relative;
  left: 42%;
}

.showreel-heading {
  position: relative;
  color: white;
  font-size: 90px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  letter-spacing: 4px;
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
}

.showreel-sub-heading {
  font-size: 26px;
  position: relative;
  color: white;
  text-align: center;
}

.showreel-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

@media screen and (max-width: 999px) {
  .showreel-heading {
    font-size: 70px;
    line-height: 70px;
  }
}
@media screen and (max-width: 800px) {
  .showreel-heading {
    font-size: 60px;
    line-height: 60px;
  }

  .showreel-button {
    left: 39%;
  }
}
@media screen and (max-width: 500px) {
  .showreel-heading {
    font-size: 52px;
    line-height: 52px;
  }

  .showreel-button {
    left: 35%;
  }
}

/* applause-button_container */
/* https://www.cssscript.com/medium-claps-applause-button/ */

.applause-button_container {
  width: 100%;
  height: 30vh;
  position: relative;
}

/* blog */
.h-blog_heading {
  padding: 40px 0px 40px 0px;
}

span.bar{

  margin-right: 50px;
}


div.example{

  margin-left: 750px;
  margin-top: 5px;
  position: absolute;

}


div.example2{

  margin-left: 450px;
  margin-top: 5px;
  position: absolute;

}

</style>

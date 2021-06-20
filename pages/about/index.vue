<template>
  <div>
  
    <div class="a-hero_container">

      <div class="nametag-container contain">

      <div class="h-name" data-aos="fade-up" data-aos-duration="900">
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


      <div class="contain a-h-container">
        <p
          class="pm a-h-subheading"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >who i am</p>
        <h1 data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          Curious,
          <span class="outlined">Passionate</span>
          Software
          <span class="outlined">Developer</span>
        </h1>  <!-- capability -->
       <p
          class="pm a-subheading_2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="600"
        >Also a problem solver and try to have fun at every step. Scroll to know more!</p>
       
      </div>
    </div>

      <div class="reveal-holder hello" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h2 class="a-hello primary-color maegin_reveal">Hello there!</h2>
          </div>
          <br>
          <br>


<div class="distress-row">
  <div class="distress-column">
    <pcase
      heading=""
      para=" I'm Raghav Aggarwal and Currently I work in Deutsche Bank  in Pune, India. Being from a non CS background, I have developed quite an interest in 
          how software industry works. May it be App development or some new technology like Blockchain, i
          am always interested to learn and dive into it. <br>
          I have done a lot of projects and have tried to explore every oppurtunity that i get in my way. Apart from academics I have done a lot of extracurricular
          activities too in the college.

     "
      theme="theme_cricbuzz"
    />

  </div>
  <div class="distress-column image-adjust">
  <br>
    <picture>
          <source
            media="(max-width: 900px)"
            srcset="~assets/about/raghav.jpg"
            alt="Me"

          />
          <img
            src="~assets/about/raghav.jpg"
            alt="Me"
            width="480px"
            height="600px"
          />
        </picture>
  </div>
</div>


    <!-- capability -->
    <section class="a-c-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Capabilities</h1>
          </div>
        </div>

        <div class="a-c_bg_text outlined" v-rellax="{ speed: -1, center: 0.5 }">
          <span>Capabilities</span>
        </div>

        <div class="a-c-code">
          <p class="a-c_subheading red">+Code</p>

          <div class="pm black70">
            <div class="a-c_layout">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Vue.js</span>
              <span>Sails Framework</span>
              <span>DJango</span>
              <span>Flask</span>
              <span>Git & Github</span>
              <span>Google Dialogflow, Google Firebase</span>
              <span>Flutter</span>
              <span>AWS*</span>
              <span>C++</span>
              <span>Python</span>
               <span>MySql</span>
              <span>Data Structures and ALgorithms</span>
              <span>Blockchain Ethereum Services</span>

            </div>
          </div>
        </div>
<!-- 
        <nuxt-link to="/blog">
          <div class="a-c_photography">
            <p class="a-c_subheading red">+Blogging</p>
          </div>
        </nuxt-link>
        <hr>

        <nuxt-link to="/playlife">
          <div class="a-c_photography">
            <p class="a-c_subheading red">+Some Play</p>
          </div>
        </nuxt-link> -->

        <!-- <div class="a-hl"></div> -->

      </div>
    </section>

    <section class="a-crazy-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Be Curious</h1>
          </div>
        </div>

        <div class="a-t_bg_text outlined" v-rellax="{ speed: -3, center: 0.5 }">
          <span>Be Curious</span>
        </div>
      </div>
      <div class="p-quote contain red">
        <blockquote>
         Keep no regrets, Grab every oppurtunity on the way
        </blockquote>
      </div>
    </section>

    <p class="image-heading"> Some of the best memories of my life </p>
    
    <section class="h-sec2-container">
      <div class="h-sec2-grid">
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/about/download.png" type="image/webp" />
        </div>
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1200"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/about/img1.jpg" type="image/webp" />
        </div>
        <div
          class="bottom-fit"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="1300"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="-200"
        >
          <img id="zoom-default" src="~assets/about/img2.jpg" type="image/webp" />
        </div>
        <div
          class="middle-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/about/img10.jpg" type="image/webp" />
        </div>
        <div
          class="middle-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/about/img7.jpg" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/about/img6.jpg" type="image/webp" />
        </div>
        <!-- <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/10.jpg?webp" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/11.jpg?webp" type="image/webp" />
        </div>
        <div
          class="up-fit"
          data-aos="zoom-out-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-anchor-placement="top-bottom"
        >
          <img id="zoom-default" src="~assets/img/home/12b.jpg?webp" type="image/webp" />
        </div> -->
      </div>
    </section>
 
      <br>
      
    <Footer />

  

  </div>
</template>

<script>
// import VideoShowcase from '~/components/Modal'
import Playbutton from '~/components/playbutton'
import Preface from '~/components/projects/preface'
import Pcase from '~/components/projects/pcase'
import Footer from '~/components/footer'

export default {
  components: {
    // VideoShowcase,
    Playbutton,
    Preface,
    Pcase,
    Footer
  },

  layout: 'projects',
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen
    }
  },

  head() {
    return {
      title: 'About Me',
      titleTemplate: '%s - Raghav Aggarwal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' Software Developer at Deutsche Bank'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'raghav aggarwal, about me, about me, portfolio,'
        }
      ]
    }
  }
}
</script>

<style scoped>
.journey-navigation {
  overflow: hidden;
}

.a-playbutton {
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
}

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

.distress-column {
  float: left;
  width: 40.33%;
  margin-left: 130px;
}

@media screen and (max-width: 999px) {
  .distress-column {
    float: left;
    width: 90%;
    margin-left: 10px; 
  }
}


/* Clearfix (clear floats) */
.distress-row::after {
  content: "";
  clear: both;
  display: table;
}


div.example{
  left: 80%;
  position: absolute;
}


div.example2{
  left: 50%;
  position: absolute;
}

@media screen and (max-width: 999px) {
  div.example2{
    left: 60%;
  }
}

@media screen and (max-width: 999px) {
  div.example{
    left: 95%;
  }
}

 div.hello{
    left: 16%;
  }

@media screen and (max-width: 999px) {
  div.hello{
    float: left;
  }
}


.image-heading{
 margin-left: 160px;
}

@media screen and (max-width: 999px) {
  .image-heading{
    float: left;
    margin-left: 50px;
  }
}

@media screen and (max-width: 999px) {
  div.image-adjust{
   
    margin-left: 190px;
  }
}


@media screen and (max-width: 700px) {
  div.image-adjust{
   float: left;
  margin-left: 25px;
  }
}

@media screen and (max-width: 500px) {
  div.image-adjust{
   float: left;
    margin-left: 5px;
  }
}


</style>

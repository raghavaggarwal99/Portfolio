<template>
  <section>
  
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


   <div class="p-hero_top_play contain">
    <div class="p-min-info ps">
    	<div class="col-xs-4 ">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" style="width: 900px; ">
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="/playlife" role="tab" aria-controls="nav-home" aria-selected="false">
            <nuxt-link to='/playlife'>
            Life 
            </nuxt-link>
            </a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="/playcode" role="tab" aria-controls="nav-profile" aria-selected="true"> <nuxt-link to='/playcode'>Code </nuxt-link></a>
					</div>
				</nav>
			</div>
    </div>
    </div>

    <!-- <section class="a-crazy-section">
      <div class="contain">
        <div class="a-c_heading">
          <div class="reveal-holder" data-aos="reveal-item" data-aos-once="true">
            <div class="reveal-block red right" data-aos="reveal-right" data-aos-once="true"></div>
            <h1 class="margin_reveal">Be Curious</h1>
          </div>
        </div>
      </div>
      <div class="p-quote contain red">
        <blockquote>
         Keep no regrets, Grab every oppurtunity on the way
        </blockquote>
      </div>
    </section> -->

     <div class="p-quote contain red" style="margin-left: 420px;">
        <blockquote>
         Life is supposed to be full of fun
        </blockquote>
      </div>

      <p  style="margin-left: 600px; color:red; font-size: 30px;">- Raghav Aggarwal</p>
<!-- 
  <p  style="margin-left: 140px; color:#DF9F17; font-size: 50px;">"The purpose of life is to be happy"</p>
  <p  style="margin-left: 120px;">Well who says working can never be fun. I learnt in college, the
  imprtance of working together</p>
    <br>
    <br> -->

     <p  style="margin-left: 150px; color:#B8B8B8; font-size: 50px; font-stretch: expanded;">1. Techniche</p>
    <p style="margin-left: 150px;"> 
      Being part of the Techno-Management Festival of IIT Guwahati, for three years was a lot of fun and memories. I joined as a volunteer in my first year and 
      I became the Convener by 3rd year. I managed around 250 members under my leadership and managing a lot of events and conducting things like workshops,
      fun events, games, lecture series was a marvellous and life learning experience. You can find the official 
      techniche <a href="https://techniche.org"> website </a>  here. 
      </p>
      <br>

        <!-- hero image -->
    <div class="p-dz-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-hero-mobile.jpg"
          /> -->
          <img
            src="~assets/about/img4.jpg"
            alt="Techniche Team"
            align
          />
        </picture>
      </div>
    </div>

    <br>

    <Footer2/>
  </section>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projectfooter from '~/components/projects/projectfooter'
import Pcase from '~/components/projects/pcase'

import Footer2 from '~/components/footer2'

export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
    Pcase,
    Projecthero,
    Footer2
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}

.p-hero_top_play {
  min-height: 15vh;
  background-color: white;
}

.p-min-info {
  position: relative;
  padding: 27px 0px 9px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #8d8d8d;
}



@media screen and (max-width: 999px) {
  .p-min-info {
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
 
  .p-min-info {
    display: flex;
    flex-direction: column;
    padding: 50px 0px 9px 0px;
  }

}

@media screen and (max-width: 500px) {


  .p-min-info {
    width: 100%;
  }

}
</style>
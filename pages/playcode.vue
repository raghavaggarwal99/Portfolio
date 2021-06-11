<template>
   <div class="blog-page">
  
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


   <div class="p-hero_top_play contain">
    <div class="p-min-info ps">
    	<div class="col-xs-4 ">
				<nav>
					<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" style="width: 900px; ">
          
						<a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="/playlife" role="tab" aria-controls="nav-home" aria-selected="false"><nuxt-link to='/playlife'>Life </nuxt-link></a>
			
            <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="/playcode" role="tab" aria-controls="nav-profile" aria-selected="true"><nuxt-link to='/playcode'>Code </nuxt-link></a>
					</div>
				</nav>
			</div>
    </div>
    </div>
    
    <div class="p-quote contain red" style="margin-left: 475px;">
        <blockquote>
         Code is simple. Code is a Play
        </blockquote>
      </div>
    
    <div class="p-dz-hero_image">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right theme_dz" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/dearzindagi/dzhero-mobile.jpg"
          /> -->
          <img src="~assets/play/main.jpg" alt="indian children smiling" />
        </picture>
      </div>
    </div>

    <br>
    <br>


    <p  style="margin-left: 120px;">Well who says coding is not fun. Ever i started doing code I used to create things which would make learning more interesting</p>
    <br>
    <br>

    <!-- Preface -->

    <p  style="margin-left: 150px; color:#B8B8B8; font-size: 50px; font-stretch: expanded;">1. The Snake Game</p>
    <p style="margin-left: 150px;"> As played in general Nokia phones, that used to be a great game for our generation, I developed a snake game using Html and Javascript only.
      The snake can move in the square boundary, and once it eats the apple, the score updates and the length of the snake increases. 
      You can find the <a href=https://github.com/raghavaggarwal99/Snake-Game> code </a> here</p>
      <br>


     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/dearzindagi/DearZindagi1-mobile.jpg"
          /> -->
          <img src="~assets/play/snake2.png" />
        </picture>
      </div>
    </div>

    <br>
    <br>

    <p  style="margin-left: 150px; color:#B8B8B8; font-size: 50px; font-stretch: expanded;">2. R Agent for Atari Games</p>
    <p style="margin-left: 150px;"> As played in general Nokia phones, that used to be a great game for our generation, I developed a snake game using Html and Javascript only.
        This is a standard code for the cartpole problem that trains itself to get the 
    maximum score possible. We use Deep RL here to fit the model in neural network to get the best output. 
    You can read the theory on Open AI gym library on its Documentation Page and basics of RL as mainly that 
    we use is its Q-Values Dynamic Progarmming function.
     You can find the <a href=https://github.com/raghavaggarwal99/RL-for-Atari-Games> code </a> here </p>
    <br>


     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/dearzindagi/DearZindagi1-mobile.jpg"
          /> -->
          <img src="~assets/play/rt.png" />
        </picture>
      </div>
    </div>


    <Footer2/>

  </div>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projectfooter from '~/components/projects/projectfooter'
import Pcase from '~/components/projects/pcase'
import Footer2 from '~/components/footer2'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'

export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
    Pcase,
    Projecthero,
    Footer2,
    Allprojectsnav,
    Pfooterp,
    Pfootern
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
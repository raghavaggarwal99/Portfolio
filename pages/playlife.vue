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
						<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="/playlife" role="tab" aria-controls="nav-home" aria-selected="false">Life</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="/playcode" role="tab" aria-controls="nav-profile" aria-selected="true">Code</a>
					</div>
				</nav>
			</div>
    </div>
    </div>


  <p  style="margin-left: 120px; color:#DF9F17; font-size: 100px;">GO CRAZY WITH LIFE</p>
  <p  style="margin-left: 120px;">Well who says working can never be fun. I learnt in college, the
  imprtance of working together</p>
    <br>
    <br>

     <p  style="margin-left: 150px; color:#B8B8B8; font-size: 50px; font-stretch: expanded;">1. Techniche</p>
    <p style="margin-left: 150px;"> 
      Being part of Techno-Management Festival of IIT Guwahati, for three years was a lot of fun and memories. </p>
      <br>

    
    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <!-- appreciate button -->

    <Appreciate heading="Loved  Dear Zindagi" subHeading="Don't forgot to appreciate" />

    <!-- Project Footer Navigation -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/mr-irritating">
            <pfooterp
              projectName="Mr. Irritating"
              projectCategories="Print, Social Media"
              thumbnail="/mr-irritating-thumbnail.webp"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/awesome-inc">
            <pfootern
              projectName="Awesome Inc."
              projectCategories="Identity, Print"
              thumbnail="/awesome-inc-thumnail-3.jpg"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projectfooter from '~/components/projects/projectfooter'
import Pcase from '~/components/projects/pcase'
import Appreciate from '~/components/projects/appreciate'
import Next from '~/components/projects/next'
import Previous from '~/components/projects/previous'
import Pfootern from '~/components/projects/pfootern'
import Pfooterp from '~/components/projects/pfooterp'
import Allprojectsnav from '~/components/projects/allprojectsnav'

export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
    Appreciate,
    Pcase,
    Projecthero,
    Next,
    Previous,
    Pfooterp,
    Pfootern,
    Allprojectsnav
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}

.p-hero_top_play {
  min-height: 40vh;
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
<template>
  <section>
  
   <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/boostrap.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

      
     <div class="p-hero_top_play contain">
    <div class="p-min-info ps">
   
             
				  <ul class="nav nav-tabs" id="playlist">

                    <li class="active playlife"  id="playlife"><a class="nav-item nav-link" style="text-align: center" id="nav-home-tab" data-toggle="tab" href="/raghav/projects/playlife" role="tab" aria-controls="nav-home" aria-selected="false">Life</a></li>
                    
                    <li class="playcode" ><a class="nav-item nav-link" style="text-align: center" id="nav-home-tab" data-toggle="tab" href="/raghav/projects/playcode" role="tab" aria-controls="nav-home" aria-selected="false">Code</a></li>
                
                </ul>


    </div>
    </div>
    
   

     <div class="p-quote contain red mainquote">
        <blockquote class="sizeqoute">
         Life is supposed to be full of fun
        </blockquote>
      </div>

      <p  class="author">- Raghav Aggarwal</p>


     <p  class="heading" style=" color:#B8B8B8; font-size: 50px; font-stretch: expanded;">1. Techniche</p>
    <p class="heading" > 
      Being part of the Techno-Management Festival of IIT Guwahati, for three years was a lot of fun and memories. I joined as a volunteer in my first year and 
      I became the Convener by 3rd year. I managed around 250 members under my leadership and managing a lot of events and conducting things like workshops,
      fun events, games, lecture series was a marvellous and life learning experience. You can find the official 
      techniche <a href="https://techniche.org"> website </a>  here. 
      </p>
      <br>

     <!-- hero image -->

     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/about/techniche.jpg"
            alt="Main"
          />
        </picture>
      </div>
    </div>

    <br>

  </section>
</template>

<script>
import Projecthero from '~/components/projects/projecthero'
import Preface from '~/components/projects/preface'
import Projectfooter from '~/components/projects/projectfooter'
import Pcase from '~/components/projects/pcase'
import Tabs from 'vue-tabs-component';

import Footer2 from '~/components/footer2'

export default {
  layout: 'projects',
  components: {
    Projectfooter,
    Preface,
    Pcase,
    Projecthero,
    Footer2,
    Tabs
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

#playlist{

display: inline;
width: 250%;
left: 80%;
margin-left: 120px;

}

.playlife{
width: 50%;
}

.playcode{
width: 50%;
}


@media screen and (max-width: 800px) {

  #playlist{
    
    display: inline;
    width: 60%;
    margin-left: 100px;
  }

  .playlife{

        width: 50%;
        }

        .playcode{


        width: 50%;
        }
}

@media screen and (max-width: 600px) {

  #playlist{
    
    display: inline;
    width: 80%;
    margin-left: 50px;
  }

  .playlife{

        width: 50%;
        }

        .playcode{


        width: 50%;
        }
}

@media screen and (max-width: 400px) {

  #playlist{
    
    display: inline;
    width: 80%;
    margin-left: 30px;
  }

  .playlife{

        width: 50%;
        }

        .playcode{


        width: 50%;
        }
}

.mainquote{
margin-left: 300px;

}

.author{

color: red;
font-size: 30px;
margin-left: 500px;
}

@media screen and (max-width: 1100px) {


    .mainquote{
        margin-left: 200px;

    }

}

@media screen and (max-width: 800px) {


    .mainquote{
        margin-left: 100px;

    }

    .author{

        color: red;
        font-size: 30px;
        margin-left: 300px;
        }

}

@media screen and (max-width: 500px) {

    .mainquote{
        margin-left: 60px;

    }

    .author{

        color: red;
        font-size: 20px;
        margin-left: 180px;
        top:10%;
        }

}


.heading{

margin-left: 100px;

}

@media screen and (max-width: 600px) {

.heading{

margin-left: 50px;

}

  }

  @media screen and (max-width: 440px) {

.heading{

margin-left: 30px;

}

  }


</style>
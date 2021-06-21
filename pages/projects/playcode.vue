<template>
   <div class="blog-page">
  
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/boostrap.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

      
     <div class="p-hero_top_play contain">
    <div class="p-min-info ps">
   
             
				  <ul class="nav nav-tabs" id="playlist">

                    <li class="playlife"  id="playlife"><a class="nav-item nav-link" style="text-align: center" id="nav-home-tab" data-toggle="tab" href="/raghav/projects/playlife" role="tab" aria-controls="nav-home" aria-selected="false">Life</a></li>
                    
                    <li class="active playcode" ><a class="nav-item nav-link" style="text-align: center" id="nav-home-tab" data-toggle="tab" href="/raghav/projects/playcode" role="tab" aria-controls="nav-home" aria-selected="false">Code</a></li>
                
                </ul>


    </div>
    </div>
    
    <div class="p-quote contain red mainquote">
        <blockquote>
         Code is simple. Code is Play
        </blockquote>
      </div>
        <p  class="author">- Raghav Aggarwal</p>


    
     <!-- hero image -->

     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/play/main2.jpg"
            alt="Main"
          />
        </picture>
      </div>
    </div>
   

    <br>
    <br>


    <p  class="heading" >Well who says coding is not fun. Ever i started doing code I used to create things which would make learning more interesting</p>
    <br>
    <br>

    <!-- Preface -->

    <p  class="heading" style=" color:#B8B8B8; font-size: 50px; font-stretch: expanded;">1. The Snake Game</p>
    <p class="heading" > As played in general Nokia phones, that used to be a great game for our generation, I developed a snake game using Html and Javascript only.
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

    <p  class="heading" style=" color:#B8B8B8; font-size: 50px; font-stretch: expanded;">2. RL Agent for Atari Games</p>
    <p class="heading"> As played in general Nokia phones, that used to be a great game for our generation, I developed a snake game using Html and Javascript only.
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
          <img src="~assets/play/rt3.jpg" />
        </picture>
      </div>
    </div>



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
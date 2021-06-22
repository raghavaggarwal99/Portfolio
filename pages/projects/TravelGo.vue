<template>
  <div>

    <!-- hero image -->
 
    <projecthero
      pDate="May-June 2019 "
      pWebsite="Travel Go"
      pCategory="Chatbot Design"
      pHeading="Travel Go"
      pHeadingcolor="color:#1D98B6;"
      pSubheading="Chatbot for Uttrakhand Transport Corporation to show buses/book buses"
    />

    <!-- hero image -->
     <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/travelgo/main-mobile.jpg"
          />
          <img src="~assets/projects/travelgo/main2.png" alt="cool background" />
        </picture>
      </div>
    </div>

   
     <Preface
      timeframe=" May-June 2019
            <br>2 Months"
      tools="Html, Css, Javascript
            <br> Flask
            <br>Google Dialogflow"

       purpose="Internship at Valiance Solutions"

      github="https://github.com/raghavaggarwal99/TravelGo"

      role=" Web Developer"
      team="Me only"
    />


    <pcase
      heading="Preface"
      para=" The front end was done using Html and CSS, and for training the data we use Google Dialogflows
"
      theme="theme_ft"
    />


   
     <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/travelgo/preface.png" alt="cool background" />
        </picture>
      </div>
    </div>



   
    <pcase
      heading="Purpose and Features"
      para=" 
      1. Book buses by a chatbot <br>
      2. Show availability of buses available according to the user input; <br>
      3. Training the database <br>
      4. Execute the information  <br>
     "
      theme="theme_ft"
    />



    <pcase
      heading="Google Dialogflow"
      para=" These are the total intents that were created thinking of the user requirements. 
     "
      theme="theme_ft"
    />

    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/travelgo/intents.png" alt="cool background" />
        </picture>
      </div>
    </div>


    <!-- <pcase
      heading="Main Screen"
          para="These were the features that were implemented for better UI<br>
          1. Ask for the buses availability for asked routes<br>
          2. Showing contact information and FAQ in case it's not a trained data<br>
          3. Ask for indirect bus routes <br>
          4. Dynamically asking the required questions needed to show the correct output from the database.
          Example For buses availability on a specific day, time, the source and destination is needed.
        "
      theme="theme_ft"
    /> -->


 <!-- <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          />
          <img src="~assets/projects/travelgo/mainpage.png" alt="cool background" />
        </picture>
      </div>
    </div> -->

     <div class="distress-row">
      <div class="distress-column adminscreen">
        <pcase
          heading="Main Screen"
          para="These were the features that were implemented for better UI<br>
          1. Ask for the buses availability for asked routes<br>
          2. Showing contact information and FAQ in case it's not a trained data<br>
          3. Ask for indirect bus routes <br>
          4. Dynamically asking the required questions needed to show the correct output from the database.
          Example For buses availability on a specific day, time, the source and destination is needed.
        "
          theme="theme_ft"
        />

      </div>
  <div class="distress-column mainimage">
    <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/travelgo/main-mobile.png"
            alt="GoCorona app screenshots"
            
          />
        </picture>
  </div>
</div>


  
    <pcase
      heading="Database Design"
      para="The following shows the database design which are basically three tables. <br>
      1. To contain the bus information and routes of them including other information like seats, date, type, fare. <br>
      2. To contain the indirect bus routes from the original city to destination. <br>
      3. To save the chat of every individual. <br>
        
     "
      theme="theme_ft"
    />


      <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/travelgo/database3.jpg" alt="cool background" />
        </picture>
      </div>
    </div>

       <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/travelgo/database2.png" alt="cool background" />
        </picture>
      </div>
    </div>


    <pcase
      heading="1. Dynamic Intents"
      para=" Dynamic Intents include those questions which require database queries. Asking for a bus route, will need to know some information like date
      original city and destination, once we know them through google dialogflow, we will query the database to show all bus routes based on that inputs.
            
     "
      theme="theme_ft"
    />


<div class="p-hero_image dynamic dynamicimage" >
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/travelgo/dynamic4.png" alt="cool background" />
        </picture>
      </div>
    </div>

    <br>

     <p style="float: center; margin-left: 60px; margin-right: 60px;">The dynamic intents include what do you want to do with this user input. So it goes 
     into your workbook, to see what do you want to implement. Here I have instructed the workbook to see what intent it is and capture all the inputs like 
     original city, destination and timings then it goes to my backend and ask subsquent query from database.</p>

 <br>



    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/travelgo/workbook.png" alt="cool background" />
        </picture>
      </div>
    </div>



     <div class="distress-row">
      <div class="distress-column adminscreen">
        <pcase
          heading="2. Static Intents"
          para="Due to less time, right now we created a special login for admin so that it can access all the database and perform functions. <br>
          Role of Admin: <br>
          1. The admin is the supervisor of the app. <br>
          2. It can send notifications/alerts to all registered users of the app.<br>
          3. It can also see the request for the distress call.<br>
          4. And call can be directly dialed from the app which will redirect to default dialer. <br>

        "
          theme="theme_cricbuzz"
        />

      </div>
  <div class="distress-column mainimage">
    <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/travelgo/static-mobile.png"
            alt="GoCorona app screenshots"
            
          />
        </picture>
  </div>
</div>


 <pcase
      heading="Hosting on AWS"
      para="The deployment on AWS includes two basic steps:<br>
      1. Hosting the html file in S3 bucket as it is static.<br>
      2. Hosting the flask api using EC2 instance with dump of your sql file. <br>
            
     "
      theme="theme_ft"
    />



   
    <!-- key Focus Area -->

    <div class="keyfocus">
      <div class="content">
        <div class="contain">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Research on Travel Bots</span>
              <span>✔ Ideation</span>
              <span>✔ Database Design</span>
              <span>✔ Deploying on AWS with EC2 Instance</span>
              <span>✔ Backend Design</span>
              <span>✔ Research on NLP Services</span>
              <span>✔ Regular Meetings with the client</span>
              <span>✔ Google Dialogflow Workflow</span>
     
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- conclusion -->

    <div class="Takeaway">
      <div class="contain">
        <h2 class="p-para black50">Learnings</h2>
        <div class="pm black70">
          <p>
            This project was the first main project that i worked on very proudly as part of an intern. I got to know how client meetings go through,
            How important UI is to the client for their product, user testing. Just developing isn't enough, you got to enhance it again and again and 
            think what other things you can offer in your product.
          </p>
        </div>
      </div>
    </div>


    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/Blockchain">
            <pfooterp
              projectName="Blockchain Aadhar Voting"
              projectCategories="Microsoft Codefundoo Competition"
          
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/SocialContour">
            <pfootern
              projectName="Social Contour"
              projectCategories="Freelance"
            
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
import LiveLink from '~/components/projects/live-link'

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
    Allprojectsnav,
    LiveLink
  }
}
</script>

<style>
.project-footer {
  bottom: 0%;
}


.distress-column {
  float: left;
  width: 33.33%;
  padding: 5px;
  margin-left: 150px;
}

div.adminscreen{
    width: 50.33%;
    margin-left: 60px;

  }

    div.mainimage{
   width: 20.33%;
    margin-left: 7px;
    margin-top: 35px
  
  }

@media screen and (max-width: 1351px) {
  div.adminscreen{
    width: 50.33%;
    margin-left: 60px;

  }

  div.mainimage{
   width: 20.33%;
    margin-left: 7px;
     margin-top: 60px;
  
  }


  div.mainimage2{
   width: 20.33%;
    margin-left: 7px;
  
  }

}

@media screen and (max-width: 1200px) {
  div.adminscreen{
    width: 50.33%;
    margin-left: 15px;

  }
  div.mainimage{
   width: 30.33%;
    margin-left: 1px;
  
  }
  div.mainimage2{
   width: 20.33%;
    margin-left: 7px;
  
  }
}
@media screen and (max-width: 890px) {

  div.adminscreen{
    width: 40.33%;
    margin-left: 40px;

  }
  div.mainimage{
   width: 30.33%;
 
  }
 
}


@media screen and (max-width: 747px) {
   div.adminscreen{
    width: 40.33%;
    margin-left: 10px;

  }
  div.mainimage{
   width: 30.33%;
  
  }
}


@media screen and (max-width: 700px) {
   div.adminscreen{
    width: 90.33%;
    margin-left: 40px;
   margin-top: -25px;

  }
  div.mainimage{
   width: 60.33%;
    margin-left: 120px;
   margin-top: -35px;
  
  }
}


@media screen and (max-width: 548px) {
   div.adminscreen{
    width: 90.33%;
    margin-left: 4px;
   margin-top: -25px;

  }
  div.mainimage{
   width: 10.33%;
  margin-left: 60px;
   margin-top: -35px;
  
  }
}


@media screen and (max-width: 476px) {
   div.adminscreen{
    width: 90.33%;
    margin-left: 10px;
   margin-top: -25px;

  }
  div.mainimage{
   width: 60.33%;
    margin-left: 30px;
    margin-top: -35px;
  
  }
}

@media screen and (max-width: 445px) {
   div.adminscreen{
    width: 90.33%;
      margin-left: 1px;
    margin-top: -25px;

  }
  div.mainimage{
   width: 40.33%;
    margin-left: 1px;
    margin-top: -35px;
  
  }
}



@media screen and (max-width: 1180px) {
  div.dynamicimage{
    margin-left: -90px;
  }
}


@media screen and (max-width: 723px) {
  div.dynamicimage{
    margin-left: -40px;
  
  }
}


.admin-column {
  float: left;
  width: 30.33%;
  padding: 5px;
  margin-left: 40px;

}

.admin-column-location{

  float: left;
  width: 20.33%;
  padding: 5px;

}

/* Clearfix (clear floats) */
.distress-row::after {
  content: "";
  clear: both;
  display: table;
}


</style>
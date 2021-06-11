<template>
  <!-- Feeding Trends -->
  <div>

    <projecthero
      pDate="March 2020 "
      pWebsite="GoCorona"
      pCategory="App Design"
      pHeading="GoCorona App Development"
      pHeadingcolor="color:#0088FF;"
      pSubheading="An app designed to help people in difficult times"
    />

    <!-- hero image -->
    <div class="p-dz-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-hero-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/gocorona/preview.png"
            alt="Preview"
            align
          />
        </picture>
      </div>
    </div>

    <Preface
      timeframe=" March 2020
            <br>1 Month"
      tools="Flutter
            <br>Google Firebase"
       purpose="Mishmash Diversity Hackathon"
        github="https://github.com/mayurnile/gocorona"
      role=" Backend Developer
      
            <br>App Design"
      team=" R_A_M
            <br>Raghav Aggarwal
            <br>Aayush Bansal
            <br>Mayur Nile"
    />

    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" GoCorona App was designed in order to address the chaos faced by people due to Covid-19. 

      "
      theme="theme_cricbuzz"
    />

      <!-- Desighn -->

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/gocorona/preface.png"
            alt="Preface"
          />
        </picture>
      </div>
    </div>
  

    


    <pcase
      heading="Ideation"
      para=" These are the problems that we think we have due to Corona <br>
            1. Identification of Corona Patients <br>
            2.  Loss of Money <br>
            3. Shortage of Food and Supplies <br>
            4. Not caring about the problem enough <br>
            5. Lack of awareness <br>
            6. Checkups and Treatments <br>
            7. Boredom in Quarantine<br>           
     "
      theme="Research"
    />

    <!--
    <div class="p-quote contain red">
      <blockquote>
        Cricbuzz app is used by millions of user. To redesign something that that
        is already have a existing user base is itself is a challenge.
      </blockquote>
    </div>
    -->

    <!-- Desighn -->

     <pcase
      heading="Wireframing"
      para=" To get started I did a very rapid wireframing. With just important
      screen and feature I thought of adding. Don't mind my handwriting.
      Its way better originally. 
               
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/gocorona/wireframe2.jpg"
            alt="Wireframe"
          />
        </picture>
      </div>
    </div>

       <pcase
      heading="Authentification "
      para="The App opens up with a animated authentification system.  The user is asked to signup if not have an account. 
      <br>
     "
      theme="theme_cricbuzz"
    />



    <!-- Desighn -->
    <div class="distress-row">
      <div class="distress-column">
        <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
              /> -->
              <img
                src="~assets/projects/gocorona/authentification1.jpg"
                alt="Authentification"
              />
            </picture>

      </div>
      <div class="distress-column">
        <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
              /> -->
              <img
                src="~assets/projects/gocorona/authentification2.jpg"
                alt="AUthentification Screens"
              />
            </picture>
      </div>
    </div>

    <br>

    <p style="margin-left: 100px;">The authentification in the firebase is set up when the user makes an account and a unique user id is generated</p>

      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/gocorona/authentification3.jpg"
            alt="Authentification Screens"
          />
        </picture>
      </div>
    </div>

 <br>
    <br>
    <br>
    <br>


<div class="distress-row">
    <div class="admin-column">
       <pcase
          heading="HomePage"
          para=" 
        1. A Map section to track your and infected person’s location.<br>
        2. The Red Marker points to peoples location.<br>
        3. Only the corona infected person’s location is shown.<br>
        4. The marker shows live location.<br>
        5. Location of every user is stored in Real Time Database.<br>
        6. Notification section to display messages passed on by admin regarding some issues or instructions which avoids fake news or rumors to get spreaded.<br>
          "
          theme="theme_cricbuzz"
        />

    </div>
    <div class="admin-column">
    <br>
    <br>
    <br>
    <br>
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/home.jpg"
              alt="GoCorona app screenshots"
            />
          </picture>
    </div>
    <div class="admin-column-location">
    <br>
    <br>
    <br>
    <br>
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/location.jpg"
              alt="Live Storing of Location in real time database"
              width="400px"
              height="600px"
            />
            <figcaption >Live Storing of Location in real time database</figcaption>
          </picture>
    </div>
  </div>


    <!-- Problems and initial Findings -->


    <!-- Desighn -->
    <pcase
      heading="Distress Calls"
      para=" The user can make a distress call, along which the location of the user will be sent automatically, so that admin can control what action to take.   
     "
      theme="theme_cricbuzz"
    />

<!--
    <div class="p-image-100-duo cricbuzz-ux-image">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <img src="~assets/projects/dreamz/dreamz-laws-of-ux.jpg" alt="ux principles and laws" />
        <p class="ps black">Applied UX Principles</p>
      </div>
    </div>
-->


<div class="distress-row">
  <div class="distress-column">
     <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/gocorona/distresscall1.jpg"
            alt="GoCorona app screenshots"
          />
        </picture>

  </div>
  <div class="distress-column">
    <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/gocorona/distresscall2.jpg"
            alt="GoCorona app screenshots"
          />
        </picture>
  </div>
</div>
    

  



    <!-- Message Screen -->

    <pcase
      heading="Message/Chat Screen "
      para="Addressing the problem of boredom and corona, the main function of this feature was to connect people who have faced any difficult situation.<br>
      How to treat corona at home? Is there any available hospital in your contact? 
               
     "
      theme="theme_cricbuzz"
    />

    <!-- Desighn -->
  <div class="distress-row">
    <div class="admin-column">
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/messagescreen1.jpg"
              alt="GoCorona app screenshots"
            />
          </picture>

    </div>
    <div class="admin-column">
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/messagescreen2.jpg"
              alt="GoCorona app screenshots"
            />
          </picture>
    </div>
    <div class="admin-column">
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/messagescreen3.jpg"
              alt="GoCorona app screenshots"
            />
          </picture>
    </div>
  </div>

    

    <pcase
      heading="Help Screen"
      para=" Here people can tell what groceries they have available with their address and contact number, so that the needy can contact them easily.
     "
      theme="theme_cricbuzz"
    />

   <div class="distress-row">
  <div class="distress-column">
     <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/gocorona/helpscreen1.jpg"
            alt="GoCorona app screenshots"
          />
        </picture>

  </div>
  <div class="distress-column">
    <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/gocorona/helpscreen2.jpg"
            alt="GoCorona app screenshots"
          />
        </picture>
  </div>
</div>

 <br>

    <p style="margin-left: 100px;">Every Database is stored according to the person's unique id in Real time Database</p>

      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/gocorona/distressbackend.png"
            alt="Backend"
          />
        </picture>
      </div>
    </div>

    

    <pcase
      heading="What targets we accomplished so far"
      para="Total 4 working screens were created as shown. <br>
      Screens: <br>
      1. Home Screen- To show the live map and notifications from the admin(government) <br>
      2. Call Screen- Where people can fill what problems they are facing so that govt. can take action.<br>
      3. Message Screen- To let people connect and to share their experiences<br>
      4. Help Screen- To let people donate the groceries for the needy. <br>

     "
      theme="theme_cricbuzz"
    />



    <div class="distress-row">
      <div class="distress-column">
        <pcase
          heading="Admin Screen"
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
  <div class="distress-column">
  <br>
  <br>
  <br>
  <br>
    <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/gocorona/adminscreen.jpg"
            alt="GoCorona app screenshots"
          />
        </picture>
  </div>
</div>

 <br>

    <p style="margin-left: 100px;">The notifications are sent through the admin credentials using firebase cloud functions</p>

      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/gocorona/notification.png"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>

  <pcase
      heading="Future Scope"
      para=" If selected we might add these functionalities too in our app. <br>
      1. Add payment gateway to help NGO’s. <br>
      2. Backtracking through map history to find contacts of other Corona patients. <br>
      3. Distributed admins based on locations.<br>
      4. Alert notification of any increase corona patients in users location.<br>
.  
               
     "
      theme="theme_cricbuzz"
    />


    <pcase
      heading="Other Backend and App screens"
      para="The whole backend and some other app screens

     "
      theme="theme_cricbuzz"
    />

      <!-- Desighn -->
  <div class="distress-row">
    <div class="admin-column">
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/backend.jpg"
              alt="GoCorona app screenshots"
              width="400px"
            />
          </picture>

    </div>
    <div class="admin-column">
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/infected.jpg"
              alt="GoCorona app screenshots"
            />
          </picture>
    </div>
    <div class="admin-column">
      <picture>
            <!-- <source
              media="(max-width: 600px)"
              srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
            /> -->
            <img
              src="~assets/projects/gocorona/map.jpg"
              alt="GoCorona app screenshots"
            />
          </picture>
    </div>
  </div>
  


    <pcase
      heading="Conclusion"
      para="The basic idea hence to conclude is to clear the air of tensions of this pandemic. Amidst the tension  
      the only motto being to stay safe and sound and not inculcate the lifestyle the pandemic has given to us. 
      Rather be productive and work towards the better.
.  
               
     "
      theme="theme_cricbuzz"
    />


    <!-- key Focus Area -->

    <div class="keyfocus">
      <div class="content">
        <div class="contain">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Firebase Setup</span>
              <span>✔ Ideation </span>
              <span>✔ Showing live locations of Users in Map</span>
              <span>✔ Database Design</span>
              <span>✔ Grorcery Screen </span>
              <span>✔ Sending Messages </span>
              <span>✔ Appropriate using of Real time and Cloud Database</span>
              <span>✔ Basic Wireframe</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- conclusion -->

    <div class="Takeaway">
      <div class="contain">
        <h2 class="p-para black50">Learnings</h2>``
        <div class="pm black70">
          <p>
            The most challenging part of this project we faced was was we all were new to the flutter and we wantted to learn App development.
            We thought a lot how our app could be any different from Aarogya Setu and other corona related Apps. 
            We tried to make the app addressing the more local problems and help people in connectivity. My own family was scared about what to do 
            when we faced corona, and we thought talking to people and being aware of your surroundings might help. 
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
          <nuxt-link to="/projects/streerides">
            <pfooterp
              projectName="Streerides"
              projectCategories="Freelance"
              thumbnail="/1.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/Blockchain">
            <pfootern
              projectName="Blockchain Aadhar Voting"
              projectCategories="Microsoft Codefundoo Competition"
              thumbnail="/1.jpg"
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

.cricbuzz-ux-image {
  filter: hue-rotate(45deg);
}
.cricbuzz-ux-image img {
  filter: saturate(1.4);
}

.vimeo {
  /* height: 100%; */
  width: 300px;
  margin: 20px;
}

.distress-column {
  float: left;
  width: 33.33%;
  padding: 5px;
  margin-left: 150px;
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

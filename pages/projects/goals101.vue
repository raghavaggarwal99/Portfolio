<template>
  <div>

    <projecthero
      pDate="May- July 2020"
      pWebsite="Service Request Management"
      pCategory="Backend Design"
      pHeading="Service Request Management Tool"
      pHeadingcolor="color:#0F2E47;"
      pSubheading="Product designed to streamline the request management system of the company completely automated"
    />

    <!-- hero image -->
    <div class="p-fe-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_tbt-app" data-aos="reveal-right"></div>

        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/main2.jpg" />
        </picture>
      </div>
    </div>


   
     <Preface
      timeframe=" May-July 2020
            <br>3 Months"
      tools="VueJs
            <br> Sails"

       purpose="Internship at Goals101"

      github="https://www.goals101.ai/"

      role=" Backend Developer"
      team="Me only"
    />

    <!-- Refrence
      http://stephencalvillodesign.com/project/linkedin-elevate
      http://stephencalvillodesign.com/project/fullscreen
      
    -->
    <!-- Preface -->
    <pcase
      heading="Preface"
      para=" This project was aimed to
      streamline internal request management process of the company. The project involved complex workflow
      management involving multi-step approval of requests and also featured an audit log functionality.
      The project’s technology stack was Vue.js on the front-end and Sails.js on the back end.          
      "
      theme="theme_tbt-app"
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
                src="~assets/projects/goals101/vue.png"
                alt="GoCorona app screenshots"
              />
            </picture>

      </div>
      <br>
      <br>
      <div class="distress-column">
        <picture>
              <!-- <source
                media="(max-width: 600px)"
                srcset="~assets/projects/gocorona/cricbuzz-existing-screens-mobile.jpg"
              /> -->
              <img
                src="~assets/projects/goals101/sails.png"
                alt="GoCorona app screenshots"
              />
            </picture>
      </div>
    </div>


     <pcase
      heading="Features of the Tool"
      para=" There were total 4 important features in the whole tool : <br>
      1. Authentification screens that involves forgot password and also google sign in. <br>
      2. Request Screen where you can create a request and it displays all sent requests. <br>
      3. Dashboard to show which requests are in your permissions to approve or decline. <br>
      4. Access, Profile and Logs Screen which just displays the backend data directly. <br>        
      "
      theme="theme_tbt-app"
    />


     <pcase
      heading="1. Authentification Screens"
      para=" The database contains the information of company's employees which
      enable them to login. Other two features in this screen are :<br>
      1. Forgot password which sends a reset link to your gmail id and reset the password<br>
      2. Google Sign in <br>      
      "
      theme="theme_tbt-app"
    />


    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-icons-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/authentification.png" />
        </picture>
      </div>
    </div>



    <pcase
      heading="2. Request Screen"
      para="Here the user can create a request and automatically, it will hit the user's parent gmail to approve or decline his/her 
      request. Example, If a new intern hires wants to get VPN access, it will diredtly hit it's mentor and he can approve/decline the request.   
      Status of Requests: <br>
      1. Pending<br>
      2. Level1Approve<br>
      3. Level2Approve<br>
      4. Declined <br>
      5. IT Approved<br> 
      "
      theme="theme_tbt-app"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-screen-1-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/request.png" />
        </picture>
      </div>
    </div>



    <pcase
      heading="3. Dashboard Screen"
      para=" Here I have login as a mentor of the intern. He can see the requests in his portal the intern has requested.
      He can approve/decline the request. Approve request will move 1 level up and hit the level 2. The process will go ahead 
      in the same way unless the last level is achieved that is IT.        
      "
      theme="theme_tbt-app"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-mockup-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/dashboard.png" />
        </picture>
      </div>
    </div>

     <pcase
      heading="Special Features"
      para="    1. Any request will go upto maximum three levels.<br>
              2. Every time a operation on request happens, both parties receive an gmail.<br>
              3. If a CEO or a senior role employee makes a request, it automatically updates it's status according to the employee. <br>
              4. For requests that requires less than three levels, the code handles it directly. 
              Example The CEO's request will directly will automated to the IT. <br>
              5. All pages are paginated, which is dynamically coded in the backend. <br>
              6. Filters for every table, All dynamically coded in the backend. <br>

      "
      theme="theme_tbt-app"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-mockup-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/gmail.png" />
        </picture>
      </div>
    </div>

    <pcase
      heading="4. Displaying Data from the backend Screens"
      para="These are the total three screens: <br>
      1. Profile Screen to display of the logged in user. <br>
      2. Access Screen to display all the employees with their access. <br>
      3. Logs Screen that display all the entries of log table. <br>
                
      "
      theme="theme_tbt-app"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-playstore-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/profile.png" />
        </picture>
      </div>
    </div>

     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-playstore-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/access.png" />
        </picture>
      </div>
    </div>

     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-playstore-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/logs.png" />
        </picture>
      </div>
    </div>


    <!-- slides -->

    <pcase
      heading="Database Design"
      para=" The complexity of the project revolved aroung Backend and Database Design which is done in Sails.
      Important Features of the database design: <br>
      1. Heirarchy SQL Structure. <br>
      2. Pagination and Filters for every table <br>
      3. Automated queries and Gmail trigger for every update <br>
      "
      theme="theme_tbt-app"
    />


   <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-icons-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/database2.jpg" />
        </picture>
      </div>
    </div>


    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/tbt-app/tbt-app-icons-mobile.jpg"
          /> -->
          <img src="~assets/projects/goals101/backend.png" />
        </picture>
      </div>
    </div>





   
    <!-- key Focus Area -->

    <div class="keyfocus">
      <div class="content">
        <div class="contain">
          <h2 class="p-para black50">Stuff I did</h2>
          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Database Design</span>
              <span>✔ Ideation</span>
              <span>✔ Wireframe</span>
              <span>✔ Regular Meetings</span>
              <span>✔ User Tested with almost 10 people</span>
              <span>✔ Dynamically Code all the features</span>
              <span>✔ All requests make asynchronous</span>
              <span>✔ Gmail connectivity</span>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div class="Takeaway">
      <div class="contain">
        <h2 class="p-para black50">Learnings</h2>``
        <div class="pm black70">
          <p>
           The most challenging part was to make the database design. It's easy just to hard code and make special cases by making if else statements
           but making all the code dynamic by using of database in less time, is the tough task
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
          <nuxt-link to="/projects/automizeapps">
            <pfooterp
              projectName="Automize Apps."
              projectCategories="Internship"
              thumbnail="/sentiment.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/GoCorona">
            <pfootern
              projectName="GoCorona"
              projectCategories="App Development Competition"
              thumbnail="/gocorona.jpg"
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
import ScrollDown from '~/components/projects/scroll-down'
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
    ScrollDown,
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

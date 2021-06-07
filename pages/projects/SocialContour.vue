<template>
  <div>
    <div class="ppnp-container">
      <nuxt-link to="feeding-trends">
        <previous />
      </nuxt-link>

      <nuxt-link to="filmingeye">
        <next />
      </nuxt-link>

      <div class="ppnp-number-container">
        <p class="black ppnp-p-number">
          <span style="color:#11A78E;">04</span>
          <span>/</span>
          <span>20</span>
        </p>
      </div>
    </div>

    <projecthero
      pDate="May 2021 "
      pWebsite="SocialContour"
      pCategory="Product, Web"
      pHeading="Social Management Tool for strategic marketing"
      pHeadingcolor="color:#11A78E;"
      pSubheading="Web portal for business clients to improve their marketing brand"
    />

    <!-- hero image -->

     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/socialcontour/main3.jpg"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>



   <Preface
      timeframe=" May 2021
            <br>5 Weeks"
      tools="Vue Js
            <br>Flask"
       purpose="Freelance"

        github="https://github.com/mayurnile/gocorona"

      role=" Web Design + All development
            "
      team=" Me Only"
    />


    <!-- Preface -->
     <pcase
      heading="Preface"
      para=" The web portal was designed with VueJs and backend in python and the project was deployed using AWS lamda
      "
      theme="theme_cricbuzz"
    />

      <!-- Desighn -->

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/socialcontour/preface2.png"
            alt="cricbuzz app wireframing"
            margin-left="500px"
          />
        </picture>
      </div>
    </div>


    
    <pcase
      heading="Requirements"
      para="It was really a big project. A tight deadline.  Keeping the Project direction on the right path was in itself a challenge. Tasks:
      <br
      <br>
      1.  Connect social media handles Facebook, Instagram, Twitter to authorise the data. <br>
      1.  Post on all social media handles(Facebook, Instagram, Twitter) through the web portal. <br>
      2.  Analysis of each post, it's reach, engagement, likes. <br>
      3.  Showing all comments, and reply through the portal only. <br>
      "
      theme="theme_br"
    />

    <pcase
      heading="Authentification"
      para=" The portal opens up with a authentification page where user can login or signup. If the user is not loggged in, he/she won't be
      able to access anything  
     "
      theme="theme_cricbuzz"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/socialcontour/login.png"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>


     <pcase
      heading="Forgot Password + Reset Link"
      para=" The forgot password sent the user a unique reset link to it's gmail id where a user can reset the password.
      Once the password is reset, the link expires.
     "
      theme="theme_cricbuzz"
    />


    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/socialcontour/gmail.png"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/projects/socialcontour/resetpassword.png"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>


    <pcase
      heading="Home Page Screens"
      para=" It contains 3 screens <br>
      1. Adding account i.e connecting the social handle by asking the permission of the user and then adding into the database. <br>
      2. Posting on the connected allowed accounts. <br>
      3. Detailed Analysis of the posts and the connected accounts. i.e page, reach, engagement, comments. <br> 
     "
      theme="theme_cricbuzz"
    />


    <!--
    <div class="p-quote contain red">
      <blockquote>
        Building products is a creative and sometimes messy process. It requires entrepreneurs and product managers
        to balance coming up with moonshot and ambitious ideas, while prioritizing them to make sure they are
        aligned with the mission of their company and solving real scalable problems.
      </blockquote>
    </div>
    -->

    <!--
    <div class="contain">
      <div class="p-image-100-duo">
        <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
          <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

          <img src="~assets/projects/bharatrohan/bharatrohan-meeting.jpg" />
          <p class="ps white">Tense Meetings</p>
        </div>
      </div>
    </div>
    -->

    <pcase
      heading="1. Connecting Social Handles"
      para="Every handle has a developer account that needs to be made, so that you can access the API which allows you to take the actions on any handle. 
      When the user tries to make the connection with any handle, first of all it asks for a permission that your app requires. Whether it be page data, or posting
      or trying to read any private data. <br>
      After connecting, we receive the access token of the page which is added into the database and shown it in the page.
      
      "
      theme="theme_br"
    />


     <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <img src="~assets/projects/socialcontour/accounts.png" />
      </div>
    </div>


   <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <img src="~assets/projects/socialcontour/fb.png" />
      </div>
    </div>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>

        <img src="~assets/projects/socialcontour/twitter3.png" />
      </div>
    </div>




    <pcase
      heading="2. Post on Social media handles"
      para="All the connected accounts will be shown in the drop down and the user can select on which handle he/she wants to post. 
      Uploading the image, adding the caption, and campaign(to target posts with a particular tag), it's all depicted in the picture <br>
      Clicking on the post button will post on your page with the access token we had by connection"
      theme="theme_br"
    />

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/socialcontour/bharatrohan-user-stories.jpg"
          />
          <img src="~assets/projects/socialcontour/post.png" />
        </picture>
      </div>
    </div>


    <pcase
      heading="3. Detailed Report"
      para="The user can customize which analysis he/she wants of the page/post by selecting dropdowns and the result is shown in the table accordingly. <br>
      For instagram and twitter the user can also access public data and trending posts through hashtags or tags"
      theme="theme_br"
    />


    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/socialcontour/bharatrohan-user-stories.jpg"
          />
          <img src="~assets/projects/socialcontour/detailedreport.png" />
        </picture>
      </div>
    </div>


    <pcase
      heading="Hosting on AWS"
      para="The hosting on AWS contains a lot of steps:<br>
      1. The front end is deployed in a S3 Bucket.<br>
      2. The backend is deployed using AWS lamda functions for every particular API Gateway. <br>
      3. The connection is made from API Gateway to Lamda function to Relational Database. <br>
      4. The Relational Database is controlled through SQL Workbench<br>
      5. Cloudfront and Route S3 are used to create a hosted zone and host the project on a particular domain. <br>
      "
      theme="theme_br"
    />




    <pcase
      heading="Backend Design"
      para="The database design is relational that means MySQL. This is a picture of how the tables look like in SQL Workbench. The below picture shows 
      the database added in Mysql with tables design"
      theme="theme_br"
    />
    <!--
    <no-ssr>
      <agile>
        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/bharatrohan/bharatrohan-wireframing-1.jpg"
            alt="slider1"
          />
        </div>

        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/bharatrohan/bharatrohan-wireframing-2.jpg"
            alt="slider2"
          />
        </div>
        <div class="slide">
          <img
            class="slide-img"
            src="~assets/projects/bharatrohan/bharatrohan-wireframing-3.jpg"
            alt="slider2"
          />
        </div>
      </agile>
    </no-ssr>

  -->

      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/socialcontour/bharatrohan-user-stories.jpg"
          />
          <img src="~assets/projects/socialcontour/wireframe.jpg" />
        </picture>
      </div>
    </div>

   <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <source
            media="(max-width: 600px)"
            srcset="~assets/projects/socialcontour/bharatrohan-user-stories.jpg"
          />
          <img src="~assets/projects/socialcontour/backend.png" />
        </picture>
      </div>
    </div>

    
    <!-- Field Executive App -->

   
    <!-- key Focus Area -->

      <pcase
      heading="Future Scope"
      para=" These were the proposed further ideas for this project <br>
      1. The UI could be better with particular screens for analysis. <br>
      2. Using Google Calendar to schedule the posts <br>
      3. Instant messaging of Fb pages and twitter through the portal<br>          
     "
      theme="theme_cricbuzz"
    />


    <div class="keyfocus">
      <div class="content">
        <div class="contain">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Front end </span>
              <span>✔ Backend Design</span>
              <span>✔ Having Regular meetings of the project</span>
              <span>✔ Wireframe design from scratch</span>
              <span>✔ Hosting on AWS</span>
              <span>✔ Making financial Decisions by consulting the company</span>
              <span>✔ Design Mysql Tables to ease time complexity</span>
              <span>✔ Ideation</span>
              <span>✔ Use Domain for targeted hosting</span>
              <span>✔ Thinking what other features could be added</span>
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
          The whole project was a great experience. Even though the front end was not that of a tough task to be honest, I had the greatest difficulty in
          connecting handles and obtaining access tokens to access the API. THen comes the biggest part of hosting on AWS. It contains a lot of things and doing 
          one after the another was a huge process.
          </p>
        </div>
      </div>
    </div>
<!-- 
    <div class="p-quote contain red">
      <blockquote>
        The greatest challenge was not the project, but keeping the enthusiasm alive during all those times.
        I pretty much saw myself and people losing it but again rising with new energy to make all
        this possible. Thanks💚
      </blockquote>
    </div>

    -->

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>
    <!-- appreciate button -->

    <Appreciate
      heading="Lets do something awesome together."
      subHeading="Don't forget to appreciate."
    />

    <!-- Project Footer Navigation -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/feeding-trends">
            <pfooterp
              projectName="Feeding Trends"
              projectCategories="Web, Branding, Print"
              thumbnail="/ft-thumbnail-2.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/filmingeye">
            <pfootern
              projectName="Filming Eye"
              projectCategories="Web, Identity"
              thumbnail="/filming-eye-thumbnail.jpg"
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

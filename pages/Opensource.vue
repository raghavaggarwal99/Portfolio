<template>
  <div>
   

    <projecthero
      pDate=""
      pWebsite=""
      pCategory=""
      pHeading="Open Source"
      pHeadingcolor="color:#4FCEC4;"
      pSubheading="All open source projects that I have worked on "
    />



<div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/opensource/open.jpeg"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>

    <!-- Preface -->

    <!-- refrence
http://stephencalvillodesign.com/project/prestoq

    -->
    <pcase
      heading="Contributions"
      para="These are the contributions of my open source:
    "
      theme="theme_dreamz"
    />

    <pcase
      heading="1. Layer5"
      para="The work revolves around meshery adapters. The front end is written in React Js and the backend in Go. Some of the work I did: 
      <br>
      1. It helped me understand about the meshery adapters, Istio, Grafana and a little bit of Kubernetes <br>
      2. Handling the project's code on docker <br>
      3. Adding UI in CSS and creating SVGs mainly to understand the project  <br>
      4. Connectivity tests for Grafana and Prometheus<br> <br>
    "
      theme="theme_dreamz"
    />



    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/opensource/layer5.png"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>


    <pcase
      heading="2. Hackoctober"
      para="The work revolved around reading public repos available  
      <br>
      1. The major contribution was correcting algorithms in C++ code to get familiar with open source <br>
    
    "
      theme="theme_dreamz"
    />



    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <img
            src="~assets/opensource/hacktober.png"
            alt="cricbuzz app wireframing"
          />
        </picture>
      </div>
    </div>

   

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <!-- appreciate button -->
    <Appreciate
      heading="Share Your thoughts "
      subHeading="Damn you really like to scroll. Click Me."
    />

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/projects/filmingeye">
            <pfooterp
              projectName="Filming Eye"
              projectCategories="Web, Identity"
              thumbnail="/filming-eye-thumbnail.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/ft-events">
            <pfootern
              projectName="FT Events"
              projectCategories="Web Design, Admin Panel"
              thumbnail="/ft-event-thumbnail.jpg"
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
</style>

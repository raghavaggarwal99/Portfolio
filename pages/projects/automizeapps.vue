<template>
  <!--awesome inc work -->

  <div>
    
    <projecthero
      pDate="April-May 2020"
      pWebsite="Automize Apps"
      pCategory="Software Development"
      pHeading="Automize Apps"
      pHeadingcolor="color:#A05EE5;"
      pSubheading="Working on their Alpha product for business clients"
    />



     <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_ai" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/automize/main.jpg" alt="cool background" />
        </picture>
      </div>
    </div>



     <Preface

      timeframe=" April-May 2020
            <br>2 Months"
      tools="Python
            <br> Flask
            <br>NLP"

       purpose="Internship at Automize Apps"

      github="https://www.automizeapps.com/"

      role=" Web Developer"

      team="Me only"
    />

    <!-- Preface -->
    <pcase
      heading="Preface"
      para="Automize Apps was a startup that opened during Covid times and they were working on their alpha
      product to develop a site for clients to give them insights over their data.
      It involved a lot of features like showing word clouds, implementing complex NLP algos to show competitive analysis between two producs.
      <br><br>

        Due to a lot of data, they were using excel sheets for now where i come and my main work was data migration into SQL. and then comparing
        the time complexities of all queries operations for MySQL and Elastic Search

      <br> <br>"
      theme="theme_ai"
    />

    <!-- Challenge -->
    <pcase
      heading="Challenge"
      para="  These are the tasks that I was hired to do: <br>
      1. Doing the data migration into MySQL from the excel sheets. 
        <br>2. Implementing competitive analysis.
        <br>3. Implementing other small features using NLP Algorithms. <br><br>
        
        NLP Algos used: <br>
        1. Cosing simlilarity <br>
        2. Sentiment Analysis <br>
        3. TF-IDF <br>
        4. K - Clustering <br>
        5. Word2Vec <br>
        6. Recommendation Using Jaccard Index <br>
        7. DBSCAN"
      theme="theme_ai"
    />


    <!-- Challenge -->
    <pcase
      heading="Consumer Sentiments"
      para=" This is the main page which shows all the anlaysis summary. After migrating the data into MySQL 
      I have to shift all the backend operations to SQL Queries. You can have a detailed 
      <a href=https://drive.google.com/file/d/1Oaz18MjDeUn5aG0_EAaleWoKxx0XUpCn/view> video </a> 
      here which shows youthe consumer sentiments page. 
      "
      theme="theme_ai"
    />

    
    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/awesome-inc/awesome-inc-tagline-mobile.jpg"
          /> -->
          <img src="~assets/projects/automize/img1.png" alt="poster" />
        </picture>
      </div>
    </div>

        <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/awesome-inc/awesome-inc-tagline-mobile.jpg"
          /> -->
          <img src="~assets/projects/automize/img2.png" alt="poster" />
        </picture>
      </div>
    </div>


     <!-- Challenge -->
    <pcase
      heading="Competitive Analysis"
      para=" This was implemented by comparing five algorithms i.e Cosine Similarity, TF-IDF, Word2Vec, Jaccard Index, and Hashing and the best accuracy
      algorithm was chosen. You can have a detailed 
      <a href=https://drive.google.com/file/d/1kSybXGmptX3eyky6VT1P8A9vp1VL8oPe/view> video </a> 
      here which shows youthe consumer sentiments page. 
      "
      theme="theme_ai"
    />

    
    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/awesome-inc/awesome-inc-tagline-mobile.jpg"
          /> -->
          <img src="~assets/projects/automize/img3.png" alt="poster" />
        </picture>
      </div>
    </div>


    <div class="keyfocus">
      <div class="content">
        <div class="contain">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Data Migration</span>
              <span>✔ Ideation</span>
              <span>✔ Implementing NLP Algos</span>
              <span>✔ Regular Meetings</span>
              <span>✔ Sugessting better ideas</span>
              <span>✔ Studying NLP</span>
      
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
            When It comes to design for a brand that is itself into branding. You got to give your best. No excuses.
            Thats what happened with Awesome Inc. I loved working with an energetic client and people that were involved.
          </p>
        </div>
      </div>
    </div>

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>


    <!-- Project Footer Navigation -->

       <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />
        <div class="p-f-p-container">
          <nuxt-link to="/OpenSource">
            <pfooterp
              projectName="Open Source"
              projectCategories="Opensource"
              thumbnail="/1.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/goals101">
            <pfootern
              projectName="Change Management Tool"
              projectCategories="Internship at Goals101"
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
import playbutton from '~/components/playbutton'
import Parallax from 'vue-parallaxy'
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
    playbutton,
    Parallax
  },
}
</script>

<style>
.project-footer {
  bottom: 0%;
}

a:link {
  color: blue;
}

</style>

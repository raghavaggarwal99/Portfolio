<template>
  <div>

    <projecthero
      pDate="August-September 2019 "
      pWebsite="Aadhar Voting"
      pCategory="Blockchain"
      pHeading="Blockchain Aadhar Voting"
      pHeadingcolor="color:#FD3E5B;"
      pSubheading="Aadhaar Based voting system using blockchain technology Project implemented as part Microsoft Codefundo Competititon"
    />

 
    <!-- hero image -->
    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/blockchain/main.jpg" alt="cool background" />
        </picture>
      </div>
    </div>

  
    <Preface
      timeframe=" August 2019- September 2019
    <br />2 Months"
      tools="Nodejs
            <br>Ethereum
            <br> Solidity"
       purpose="Microsoft Codefundoo++ 2019"
        github="https://github.com/raghavaggarwal99/Blockchain"

      role=" Blockchain Transactions
      
            <br>Google Firebase"
      team=" The Three
            <br>Raghav Aggarwal
            <br>Devaishi Tiwari
            <br>Umang Kakkar"
    />

    
    <pcase
      heading="Preface"
      para="  If you notice, every client (browser) communicates with it’s own instance of the application. There is no central server to which all clients 
      connect to. This means, every person who wants to interact with a dapp (Decentralized Application) will need a full copy of the blockchain 
      running on their computer/phone etc. That means, before you can use an application, you have to download the entire blockchain
       and then start using the application. This might sound ridiculous at first but it has the
        advantage of not relying on a single central server which might disappear tomorrow.
    "
      theme="theme_elevito"
    />

  
    
    <!-- hero image -->
    <div class="p-hero_image">
      <div class="reveal-holder" data-aos="fade-up">
        <div class="reveal-block right theme_elevito" data-aos="reveal-right"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-hero-mobile.jpg"
          /> -->
          <img src="~assets/projects/blockchain/preface4.png" alt="cool background" />
        </picture>
      </div>
    </div>

  


  
    <pcase
      heading="Ideation"
      para=" These are the things how we thought E-Voting could be implemented<br>
            1. Using Blockchain just like a money transaction<br>
            2. Identifying each user <br>
            3. Voting can only happens once <br>
            4. Using camera/image processing to detect a user <br>
            5. Aadhar login for a unique user 
     "
      theme="Research"
    />

    <p class="contain just-para black90">
      The purpose of the website was to showcase our works we have done so far particularly me and my fellow designers and through
      that, to clients and to convince them that we are the people they are looking far.
    </p>


    <pcase
      heading="Authentification Screens"
      para="The portal opens up with a login page, and another page to get the aadhar information from the user. Every aadhar number is linked with the phone numbner
      to get the unique OTP which handles the login.
      All the backend of login is handled through Firebase with Nodejs
      "
      theme="theme_elevito"
    />

      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-wireframe-cyan-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/blockchain/img6.png"
            alt="website wireframing, wireframing"
          />
          <p class="ps black90">Email id and Password Sign in</p>
        </picture>
      </div>
    </div>

       <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-wireframe-cyan-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/blockchain/img5.png"
            alt="website wireframing, wireframing"
          />
          <p class="ps black90">Aadhar Login</p>
        </picture>
      </div>
    </div>

     <pcase
      heading="How the Blockchain is working?"
      para="
      <b>Step 1</b> - Setting up Environment Instead of developing the app against the live Ethereum blockchain, 
      we have used an in-memory blockchain (think of it as a blockchain simulator) called testrpc. <br>

      <b>Step 2 </b>- Creating Voting Smart Contract. <br>
        <p style=background-color:#D3D3D3; margin-right: 200px;>npm install solc</p>
      


    <b>Step3 </b>- Setting connection with ethereum Blockchain services. This will list out the 10 accounts that are given in free in ganache-cli. <br>

     <p style=background-color:#D3D3D3; margin-right: 200px;>node_modules/.bin/ganache-cli</p> 

     Here you can see, I am displaying the accounts at 3 places. All are same. First is the above written command. 
     2nd and 3rd is when i set up my connection with ganache-cli in browser and node terminal respectively
   
      "
      theme="theme_elevito"
    />

      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-wireframe-cyan-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/blockchain/img1.png"
            alt="website wireframing, wireframing"
          />
          <p class="ps black90">Blockchain Connect</p>
        </picture>
      </div>
    </div>


    <pcase
      heading=""
      para="<b>Step 4</b>- Compiling the contract </b> <br>
      The contract is written in solidity which contains all the logic for votes. 

        When you compile the code successfully using the command above, the compiler outputs 2 files that are important to understand: <br>

        <b>Voting_sol_Voting.bin</b> : This is the bytecode you get when the source code in Voting.sol is compiled. 
        This is the code which will be deployed to the blockchain. <br>
        <b>Voting_sol_Voting.abi</b> : This is an interface or template of the contract (called abi) 
        which tells the contract user what methods are available in the contract. Whenever you have to interact with the contract in the future,
        you will need this abi definition. You can read more details about ABI here.

      "
      theme="theme_elevito"
    />



     <!-- Step 5 - Testing in node console

    Not required just for testing in node console- After writing our smart contract, we'll use Web3js to deploy our app and interact with it -->


      <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-wireframe-cyan-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/blockchain/img4.png"
            alt="website wireframing, wireframing"
          />
          <p class="ps black90">Vote your party</p>
        </picture>
      </div>
    </div>


<br>

    <p style="margin-left: 30px;"> Given below shows the transaction hash of a particular vote and in the terminal you can found the 
    increase in votes of all candidates.</p>

    <br>
  <br>

    <div class="p-image-100-duo">
      <div class="reveal-holder" data-aos="fade-up" data-aos-once="true">
        <div class="reveal-block right" data-aos="reveal-right" data-aos-once="true"></div>
        <picture>
          <!-- <source
            media="(max-width: 600px)"
            srcset="~assets/projects/blockchain/elevito-wireframe-cyan-mobile.jpg"
          /> -->
          <img
            src="~assets/projects/blockchain/img2.png"
            alt="website wireframing, wireframing"
          />
          <p class="ps black90">Transaction Hash</p>
        </picture>
      </div>
    </div>



    <div class="keyfocus">
      <div class="content">
        <div class="contain content">
          <h2 class="p-para black50">Stuff I did</h2>

          <div class="pm black70">
            <div class="kf-layout">
              <span>✔ Research on Blockchain</span>
              <span>✔ Ideation</span>
              <span>✔ Regular Meetings</span>
              <span>✔ Collaborating with developers</span>
              <span>✔ Thinking how it can be used in real world</span>
              <span>✔ Backend ethereum connectivity</span>
              <span>✔ Front end using Html and CSS</span>
            <span>✔ Blockchain services</span>
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
            We always wanted to try blockchain and what the fus is all about, so we took the oppurtunity of creating a E-Voting portal through ethereum services.

          </p>
        </div>
      </div>
    </div>

    <!-- <div class="p-quote contain red">
      <blockquote>
        1 option is better than many.
        When you're communicating your process and solutions to a people who isn't always the key decision-maker,
        it's important to keep your points clear and concise enough for easy re-communication. Even though that person
        may appreciate the extra displayed effort, it can muddy the waters when feedback comes back out.
      </blockquote>
    </div> -->

    <!-- End Line  -->

    <div class="section-divider">
      <hr class="section-divider" />
    </div>

    <!-- Project Footer Navigatrion -->

    <div class="project-footer">
      <div class="projects-footer-container">
        <allprojectsnav />

        <div class="p-f-p-container">
          <nuxt-link to="/projects/GoCorona">
            <pfooterp
              projectName="GoCorona"
              projectCategories="Mishmash Diversity Hackathon"
              thumbnail="/1.jpg"
            />
          </nuxt-link>
        </div>

        <div class="p-f-n-container">
          <nuxt-link to="/projects/TravelGo">
            <pfootern
              projectName="Travelgo"
              projectCategories="Internship at Valiance Solutions"
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

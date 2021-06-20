 <template>
  <div class="nav-container">

    <nuxt-link to="/">
      <div class="logo">
        <span class="underline-magical">Work</span>
        </div>
    </nuxt-link>


    

    <!-- <div class="menu-button-container">AAAAAA
      <button v-on:click="show = !show" class="menu-button">Toggle</button>
      <transition name="slide">
        <div v-if="show" class="test1">hello</div>
      </transition>
    </div>-->

    <div class="menu-slide1" :class="{ active: changed }"></div>
    <div class="menu-icon" @click="show = !show">
      <!-- <button @click="changed = !changed">Change</button> -->

      <svg
        @click="changed = !changed"
        :class="{ active: changed }"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <transition-group name="layout" tag="g">
          <rect class="items line1" ref="rect" key="rect1" width="15" height="2" />
          <rect class="items line2" ref="rect" key="rect2" x="0" y="6" width="30" height="2" />
          <rect class="items line3" ref="rect" key="rect3" x="15" y="12" width="15" height="2" />
        </transition-group>
      </svg>
    </div>

    <transition name="slide-in">
      <div v-if="show">
        <div class="nav">
          <span class="nav__content">
            <span class="nav__list-item">
              <nuxt-link to="/">Home</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/playlife">Play</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/blog">Blog</nuxt-link>
            </span>
            <span class="nav__list-item">
              <nuxt-link to="/about">About</nuxt-link>
            </span>
            <!-- <span class="nav__list-item">
              <nuxt-link to="/photography">Photography</nuxt-link>
            </span>-->
          </span>

          <div class="nav-social-icon">
            <div class="menu-social-icon_container">
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.facebook.com/profile.php?id=100005265196901"
                    target="_blank"
                    rel="noopener"
                    title="Facebook (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/facebook-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.instagram.com/aggrwal_raghav"
                    target="_blank"
                    rel="noopener"
                    title="Instagram (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/instagram-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://www.linkedin.com/in/raghav0089"
                    target="_blank"
                    rel="noopener"
                    title="Linkdin (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/linkdin-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://medium.com/@raghavaggarwal0089"
                    target="_blank"
                    rel="noopener"
                    title="Medium (new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/medium-lightgrey.png" />
                    </div>
                  </a>
                </div>
              </div>
              <div class="social-one">
                <div class="social-two">
                  <a
                    class="button"
                    href="https://github.com/raghavaggarwal99"
                    target="_blank"
                    rel="noopener"
                    title="Github(new tab)"
                  >
                    <div class="social-three">
                      <img class="social-four" src="~assets/footer/github-social.png" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- <div class="h-fullscreen-container"
    <nuxt-link to='/playlife'>
      <div>
        <span class="underline-magical">Play</span>
      </div>
    </nuxt-link>
    </div> -->

     <nuxt-link to="/playlife">
      <div class="h-fullscreen-container">
        <span class="underline-magical">Play</span>
        </div>
    </nuxt-link>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      changed: false
    }
  }
}
</script>
<style scoped>

.nav-container {
  width: 100px;
  height: 100vh;
  left: 0%;
  position: fixed;
  top: 0%;
  z-index: 900;
  background: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

@media screen and (max-width: 999px) {
  .nav-container {
    width: 100%;
    height: 80px;
  }
}

.nav-container input,
button {
  border: none;
}

.logo {
  animation: turn 2s linear forwards 1s;
  position: absolute;
  transform: translate(-30%);
  left: 30%;
  top: 10%;
  
}

@media screen and (max-width: 999px) {
  .logo {
    left: 8%;
    padding-top: 19px;
  }

  .logo > svg {
    width: 60px;
  }
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}

/* menu */
/* menu icon */

/* testing */
svg {
  fill: var(--primary-color);
}

/* .active .circ {
  transform: translate3d(30px, 0, 0) scale(0.5);
}
.active .text {
  transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
} */

.items {
  transition: all 0.4s ease;
}

#text {
  transform-origin: 50% 50%;
}

/* testing end */

.menu-icon {
  position: fixed;
  z-index: 10;
  left: 34px;
  /* border-radius: 50%; */
  /* background-color: #edeaea; */
  top: 50%;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1),
    -webkit-transform 0.3s cubic-bezier(0.4, 0, 0, 1);
}

.menu-icon:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 999px) {
  .menu-icon {
    left: auto;
    right: 40px;
    top: 33px;
  }
}

.active {
  fill: black;
}
.active .rect {
  transform: translate3d(0, 30px, 0);
}

.active .line1 {
  transform: translateX(1px) rotate(45deg);
}
.active .line2 {
  transform: translate3d(-4px, 18px, 0px) rotate(-45deg);
}
.active .line3 {
  transform: translate3d(10px, -7px, 0px) rotate(45deg);
}
/* .menu-icon__line {
  background-color: #000;
  transform: translateX(0px) rotate(-45deg);
}
.menu-icon__line-left {
  transform: translateX(1px) rotate(45deg);
}
.menu-icon__line-right {
  transform: translateX(-2px) rotate(45deg);
} */

.nav {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--secondary-color);
  z-index: 8;
}

.menu-slide1 {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: -1;
  transform: translateX(-100vw);
  transition-delay: 0s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
}
/* .menu-slide2 {
  position: fixed;
  width: 100vw;
  top: 0%;
  height: 100vh;
  background: var(--primary-color);
  z-index: 12;
  transform: translateX(-100vw);
  transition-delay: 0.1s;
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
} */

.active.menu-slide1 {
  transform: translateX(0vw);
  transition-delay: 0s;
}

.slide-in-enter,
.slide-in-leave-to {
  transform: translateX(-100vw) translateY(0%);
}

/* .nav:after {
  background: #c21818;
  transition-delay: 0s;
} */
/* .nav:before {
  transition-delay: 0.1s;
} */
.slide-in-enter-to,
.slide-in-leave {
  transform: translateX(0%) translateY(0%);
}

.slide-in-enter-active {
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
  transition-delay: 0.1s;
}

.slide-in-leave-active {
  transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s;
  transition-delay: 0 s;
}

.nav__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.6em;
}

.nav__list-item {
  margin: 10px 24px;
  display: inline-block;
  position: relative;
}


.nav__list-item:before {
  content: '';
  position: absolute;
  background: var(--primary-color);
  width: 20px;
  height: 3px;
  top: 100%;
  transform: translate(0%, 0%);
  transition: all 0.3s ease;
  z-index: -1;
}
.nav__list-item:hover:before {
  width: 100%;
}

.menu-link-active .nav__list-item {
  width: 100%;
}

.h-fullscreen-container {
  position: absolute;
  top: 90%;
  left: 37%;
}



@media screen and (max-width: 999px) {
  .h-fullscreen-container {
    top: 35%;
    left: 46%;
  }

  .h-fullscreen-container p {
    margin: 15px 1px 0px -31px;
  }
}


.menu-social-icon_container {
  position: absolute;
  top: 82%;
  width: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 800px) {
  .menu-social-icon_container {
    top: 82%;
  }
}
</style>

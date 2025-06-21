<template>
  <div id="app">
    <div class="wrapper uk-container uk-container-xlarge uk-flex uk-flex-center">
      <div class="hero-fixed uk-width-2-5 uk-padding-large uk-margin-remove">
          <HeroSection />
      </div>

      <div class="main-content uk-width-expand uk-padding-large uk-margin-remove">
          <div id="about"><AboutSection /></div>
          <div id="experience"><ExperienceSection /></div>
          <div id="projects"><ProjectsSection /></div>
          <div id="certifications"><CertificationSection /></div>
          <FooterSection />
      </div>
    </div>

    <!-- Spotlight effect -->
    <div class="spotlight"></div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import CertificationSection from './components/CertificationSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    CertificationSection,
    FooterSection,
  },
  mounted() {
    this.handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    document.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
  }
}
</script>


<style scoped>
#app {
  background: linear-gradient(135deg, #161b22, #0d1117);
}

.hero-fixed {
  position: sticky;
  height: 100vh;
  top: 0;
  padding-top: 100px;
}

.main-content {
  padding-top: 100px;
}


@media screen and (max-width: 960px) {
  .wrapper {
    flex-direction: column;
  }

  .hero-fixed,
  .main-content {
    width: 100%;
    padding: 1rem 1rem;
    height: auto;
    position: static;
  }

  .hero-fixed {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .main-content {
    padding-bottom: 60px;
  }
}

.spotlight {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    rgba(255, 255, 255, 0.03),
    transparent 550px
  );
  transition: background 0.05s ease;
}
</style>
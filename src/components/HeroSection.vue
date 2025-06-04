<template>
  <section class="hero-section uk-section-xsmall">
    <div>
      <h1>Francis Vino</h1>
      <p class="title">UI/UX Engineer | Front End Enthusiast</p>
      <p class="subtitle">
        I build clean, responsive, and user-friendly interfaces that focus on great user experience.
      </p>

      <div class="uk-margin-top">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinofrancisloyd30@gmail.com&su=Subject&body=Message" target="_blank">
          <button class="uk-button uk-margin-small-right">
            <i class="fas fa-envelope uk-margin-xsmall-right"></i> Send Email
          </button>
        </a>

        <a href="/my-resume.pdf" target="_blank">
          <button class="uk-button">
            <i class="fas fa-file-lines uk-margin-xsmall-right"></i> Resume
          </button>
        </a>

      </div>

      <nav class="sidebar-nav uk-visible@m">
        <ul>
          <li
            v-for="section in ['about', 'experience', 'projects','certifications']"
            :key="section"
            class="nav-item"
            :class="{ active: activeSection === section }"
          >
            <a :href="'#' + section" uk-scroll>
              {{ section.charAt(0).toUpperCase() + section.slice(1) }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <ul class="social-links uk-nav uk-nav-default uk-flex">
      <li>
        <a href="https://github.com/frncsvn1030" target="_blank"><i class="fab fa-github"></i></a>
      </li>
      <li>
        <a href="https://linkedin.com/in/francis-loyd-vino-3b5086305" target="_blank"><i class="fab fa-linkedin"></i></a>
      </li>
      <li>
        <a href="https://instagram.com/flvinonovi" target="_blank"><i class="fab fa-instagram"></i></a>
      </li>
      <li>
        <a href="https://facebook.com/flvinonovi" target="_blank"><i class="fab fa-facebook"></i></a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        activeSection: 'about',
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); // trigger once on load
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const sections = ['about', 'experience', 'projects', 'certifications'];
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              this.activeSection = sections[i];
              break;
            }
          }
        }
      }
    }
  };
</script>


<style lang="scss" scoped>
.hero-section {
  color: #9ca3af;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: -1.8px;
    color: #e5e7eb;

  }

  .title {
    padding: 5px 0 5px 0; margin: 0;
    font-size: 1.3rem;
    color: #e5e7eb;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 0;
  }

  .social-links {
    gap: 1.25rem;
    padding: 0;
    margin-top: 1.5rem;

    li {
      list-style: none;
    }

    a {
      font-size: 1.6rem;
      color: #9ca3af;
      transition: color 0.3s ease;

      &:hover {
        color: #38bdf8;
      }
    }
  }
  .uk-button {
    background: #2a313f;
    color: #e5e7eb;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 999px;
    padding: 6px 28px;
    transition: all 0.2s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #374151;
      border-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}

.sidebar-nav {
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2rem 0 2rem 0;
    margin: 0;
  }

  .nav-item {
    list-style: none;

    a {
      position: relative;
      text-decoration: none;
      color: #9ca3afcc;
      font-weight: 400;
      font-size: 0.9rem;
      text-transform: uppercase;
      display: inline-block;
      padding-left: 2rem;
      letter-spacing: 0.05em;
      transition: color 0.3s ease, padding-left 0.3s ease;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 2px;
        width: 1.5rem; // default line
        background-color: #9ca3afcc;
        transition: width 0.3s ease, background-color 0.3s ease;
      }
    }

    a:hover {
      color: #e5e7eb;
    }

    &.active a {
      color: #e5e7eb;
      padding-left: 4.5rem; // shift text when active
      font-weight: 600;

      &::before {
        width: 4rem; // longer line
        background-color: #e5e7eb;
      }
    }
  }
}


</style>

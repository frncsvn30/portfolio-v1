<template>
  <section class="cert-section uk-section">
    <h4 class="uk-hidden@m">CERTIFICATIONS</h4>

    <CertificationItem 
      v-for="(cert, index) in visibleCertifications" 
      :key="index"
      :cert="cert"
    />

    <!-- ✅ Move this outside the v-for loop -->
    <div v-if="certifications.length > 4" class="view-all-btn">
      <button @click="showAll = !showAll" class="uk-button uk-button-text hover-move-group">
        {{ showAll ? 'View Less' : 'View All Certifications' }}
        <span uk-icon="icon: arrow-right" v-if="!showAll" class="hover-move hover-right"></span>
        <span uk-icon="icon: arrow-up" v-else class="hover-move hover-up"></span>
      </button>
    </div>
  </section>
</template>


<script>
import CertificationItem from './CertificationItem.vue';

export default {
  name: 'CertificationSection',
  components: { CertificationItem },
  data() {
    return {
      showAll: false,
      certifications: [
        {
          title: 'Craft & Click: Designing Identities and Experiences!',
          platform: 'DevCon Pampanga | 2025',
          link: 'https://example.com/decoding-excel-certificate',
          image: require('@/assets/certs/devcon.png'),
          description: 'A hands-on UI/UX workshop covering branding, wireframing, and prototyping. Focused on design thinking and creating user-centered experiences.',
          tags: ['User Centered Design', 'UI/UX', 'Low Fidelity', 'High Fidelity', 'Figma'],
          disabled: true,
        },
        {
          title: 'Responsive Web Design',
          platform: 'freeCodeCamp | 2025',
          link: 'https://www.freecodecamp.org/certification/frncsvn/responsive-web-design',
          image: require('@/assets/certs/rws.jpeg'),
          description: 'A certification on Responsive Web Design, covering HTML, CSS, Flexbox, Grid, and Media Queries to build responsive websites.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        },
        {
          title: 'Learn Intermediate JavaScript Course',
          platform: 'Codecademy | 2025',
          link: 'https://www.codecademy.com/profiles/frncsvn/certificates/512386fdc7f6c934f98b01e6afa8285a',
          image: require('@/assets/certs/javascript.png'),
          description: 'A certification covering intermediate JavaScript topics, including objects, classes, modules, and asynchronous programming with promises and async/await.',
          tags: ['JavaScript'],
        },
        {
          title: 'Learn Sass Course',
          platform: 'Codecademy | 2025',
          link: 'https://www.codecademy.com/profiles/frncsvn/certificates/eb1ffda40f347629dcef6de33d3f9741',
          image: require('@/assets/certs/sass.png'),
          description: 'A certification that covers advanced Sass concepts including mixins, inheritance, and modular CSS architecture to build scalable stylesheets.',
          tags: ['Sass'],
        },
        {
          title: 'Learn Sass: Fundamentals Course',
          platform: 'Codecademy | 2025',
          link: 'https://www.codecademy.com/profiles/frncsvn/certificates/85a4eb3889e340728fca80af6156330d',
          image: require('@/assets/certs/fundamentals-sass.png'),
          description: 'A certification introducing the fundamentals of Sass, such as variables, nesting, and partials, to streamline and organize CSS more efficiently.',
          tags: ['Sass Fundamentals'],
        },
        {
          title: 'Effective Leadership',
          platform: 'HP LIFE | 2025',
          link: 'https://www.life-global.org/certificate/c04f50a9-01b0-40f4-aee2-250c8953c469',
          image: require('@/assets/certs/hp-leadership.png'),
          description: 'Learned about leadership styles, team management, dealing with change, and making ethical decisions.',
          tags: ['Leadership'],
        },
      ],
    };
  },
  computed: {
    visibleCertifications() {
      return this.showAll ? this.certifications : this.certifications.slice(0, 4);
    }
  }
};
</script>

<style lang="scss" scoped>
.cert-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0;

  h4 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-weight: 600;
  }
}



.disabled-link {
  color: #888;
  cursor: not-allowed;
  text-decoration: none;
}


@media screen and (max-width: 768px) {
  .cert {
    flex-direction: column;

    .screenshot img {
      width: 100%;
    }
  }
}

.view-all-btn {
  margin-top: .5rem;

  button {
    color: #e5e7eb;
    padding: 0.5rem;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    &:hover {
      color: #e5e7eb;
    }

    .hover-move {
      transition: transform 0.3s ease;
    }

    &:hover .hover-right {
      transform: translateX(5px);
    }

    &:hover .hover-up {
      transform: translateY(-5px);
    }
  }
}
</style>

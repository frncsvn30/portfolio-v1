<template>
  <section class="cert-section uk-section">
    <h4 class="uk-hidden@m">CERTIFICATIONS</h4>
    <div class="cert" v-for="(cert, index) in certifications" :key="index">
      <div class="screenshot">
        <img :src="cert.image" :alt="cert.title" />
      </div>
      <div class="cert-details">
        <div class="title">
            <template v-if="!cert.disabled">
                <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="external-link">
                <h3>{{ cert.title }}
                  <span uk-icon="icon: link" class="uk-icon"></span>
                </h3>
                </a>
            </template>
            <template v-else>
                <h3 class="disabled-link">{{ cert.title }}</h3>
            </template>
        </div>


        <p class="platform">{{ cert.platform }}</p>

        <p class="description">{{ cert.description }}</p>
        <div class="tags">
            <span v-for="(tag, i) in cert.tags" :key="i" class="tag">{{ tag }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'CertificationSection',
  data() {
    return {
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
      ],
    };
  },
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

.cert {
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  .screenshot {
    flex-shrink: 0;

    img {
      width: 185px;
      height: auto;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }

  .cert-details {
    flex: 1;

    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      h3 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 600;
        color: #e5e7eb;

        &:hover {
          color: #38bdf8;
        }
      }

      .external-link {
        font-size: 1rem;
        color: #aaa;
        text-decoration: none;
      }
    }

    .platform {
        font-size: 1.1rem;
        color: #7f8fa6;
        margin: 0.25rem 0 1rem;
    }


    .description {
      margin: 0.75rem 0;
      color: #9ca3af;
      font-size: 1rem;
      line-height: 1.5;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .tag {
        color: #38bdf8;
        background: rgba(56, 189, 248, 0.1);
        padding: 0.35rem 0.75rem;
        font-size: 0.8rem;
        border-radius: 999px;
        font-weight: 500;
      }
    }
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
</style>

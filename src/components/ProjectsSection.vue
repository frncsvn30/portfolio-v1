<template>
  <section class="project-section uk-section">
    <h4 class="uk-hidden@m">PROJECTS</h4>
    <div class="project" v-for="(project, index) in projects" :key="index">
      <div class="screenshot">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div class="project-details">
        <div class="title">
          <template v-if="!project.disabled">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="external-link">
              <h3>{{ project.title }}
                <span uk-icon="icon: link" class="uk-icon"></span>
              </h3>
            </a>
          </template>
          <template v-else>
                <h3 class="disabled-link">{{ project.title }}</h3>
            </template>
        </div>
        <p class="description">{{ project.description }}</p>
        <div class="tags">
          <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        {
          title: 'OJT Boys Yearbook',
          link: 'https://ojt-boys-yearbook.vercel.app/',
          image: require('@/assets/ojt-boys-yearbook.png'),
          description:
            'A personal yearbook project created to archive the memories, moments, and journey of our college squad — a tribute to our time together.',
          tags: ['JavaScript', 'CSS', 'HTML', 'Vue', 'Tailwind', 'Git', 'Figma'],
        },
        {
          title: 'Quix Core UI Library',
          link: 'https://github.com/frncsvn1030/quix-core-ui-library.git',
          image: require('@/assets/quix.png'),
          description:
            'A custom UI library made to make web design and development easier. It has ready-to-use, reusable components like buttons, forms, cards, and etc. These components help keep designs consistent and speed up the building process.',
          tags: ['JavaScript', 'SCSS', 'UIkit', 'Git', 'CSS', 'HTML', 'Figma'],
          disabled: true,
        },
        {
          title: "Capstone Title Generator",
          link: 'https://capstone-title-generator-vino.netlify.app/',
          image: require('@/assets/capstone.png'),
          description:
            'A smart tool that helps students generate unique and relevant capstone project titles. It provides multiple ideas with short descriptions based on chosen topics.',
          tags: ['JavaScript', 'SCSS', 'HTML', 'Vue', 'NPM','UIkit'],
        },
        {
          title: "SDLS: A Smart Door Lock System with Attendance and Lab Monitoring for CCA Laboratory",
          link: 'https://example.com/dicks',
          image: require('@/assets/sdls.png'),
          description:
            'A capstone thesis project designed to enhance the security of CCA’s computer laboratories while streamlining lab management, computer usage monitoring, and student attendance tracking for improved efficiency and accountability.',
          tags: ['JavaScript', 'PHP', 'CSS', 'HTML', 'ESP32', 'Node', 'Firebase', 'React', 'NPM', 'Git', 'Figma'],
          disabled: true,
        },
        {
          title: "Interactive Assembly Utility Menu (IAUM)",
          link: 'https://github.com/frncsvn30/interactive-assembly-toolkit.git',
          image: require('@/assets/assembly.png'),
          description:
            'A text-based x86 assembly language project featuring a front page and interactive menu. Includes multiple tools such as string input, alphabet sorting, arithmetic operations, case conversion, and character analysis.',
          tags: ['Assembly Language', 'x86 Assembly', 'Emu8086'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.project-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0;

  h4 {
    margin: 0; padding: 0;
    color: #fff;
    font-weight: 600;
  }
}

.project {
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

  .project-details {
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
  .project {
    flex-direction: column;

    .screenshot img {
      width: 100%;
    }
  }
}
</style>

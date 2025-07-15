<template>
  <section class="project-section uk-section">
    <h4 class="uk-hidden@m">PROJECTS</h4>

    <ProjectsItem 
      v-for="(project, index) in visibleProjects" 
      :key="index"
      :project="project"
    />
    
  </section>

  <!-- ✅ Move this outside the v-for loop -->
  <div v-if="projects.length > 4" class="view-all-btn">
    <button @click="showAll = !showAll" class="uk-button uk-button-text">
      {{ showAll ? 'View Less' : 'View All Projects' }}
      <span uk-icon="icon: arrow-right" v-if="!showAll" class="hover-move hover-right">
      </span>
      <span uk-icon="icon: arrow-up" v-else class="hover-move hover-up">
      </span>
    </button>
  </div>
</template>

<script>
import ProjectsItem from './ProjectsItem.vue';

export default {
  name: 'ProjectSection',
  components: { ProjectsItem },
  data() {
    return {
      showAll: false,
      projects: [
        {
          title: 'OJT Boys Yearbook',
          link: 'https://ojt-boys-yearbook.vercel.app/',
          image: require('@/assets/ojt-boys-yearbook.png'),
          description:
            'A personal yearbook project created to archive the memories, moments, and journey of our college squad — a tribute to our time together.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Vue', 'Tailwind CSS', 'NPM', 'Git', 'Figma'],
        },
        {
          title: 'Quix Core UI Library',
          link: 'https://github.com/frncsvn1030/quix-core-ui-library.git',
          image: require('@/assets/quix.png'),
          description:
            'A custom UI library made to make web design and development easier. It has ready-to-use, reusable components like buttons, forms, cards, and etc. These components help keep designs consistent and speed up the building process.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Sass', 'UIkit', 'Git', 'Figma'],
          disabled: true,
        },
        {
          title: "Capstone Title Generator",
          link: 'https://capstone-title-generator-vino.netlify.app/',
          image: require('@/assets/capstone.png'),
          description:
            'A smart tool that helps students generate unique and relevant capstone project titles. It provides multiple ideas with short descriptions based on chosen topics.',
          tags: ['JavaScript', 'HTML', 'CSS', 'Vue', 'Sass', 'NPM', 'UIkit'],
        },
        {
          title: "SDLS: A Smart Door Lock System with Attendance and Lab Monitoring for CCA Laboratory",
          link: 'https://example.com/dicks',
          image: require('@/assets/sdls.png'),
          description:
            'A capstone thesis project designed to enhance the security of CCA’s computer laboratories while streamlining lab management, computer usage monitoring, and student attendance tracking for improved efficiency and accountability.',
          tags: ['JavaScript', 'HTML', 'CSS', 'PHP', 'ESP32', 'Node', 'React', 'Firebase', 'NPM', 'Git', 'Figma'],
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
  computed: {
    visibleProjects() {
      return this.showAll ? this.projects : this.projects.slice(0, 4);
    }
  }
};
</script>

<style lang="scss" scoped>
.project-section {
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

<template>
  <section class="experience-section uk-section">
    <h4 class="uk-hidden@m">EXPERIENCE</h4>
    
    <div class="uk-container uk-light" v-for="(exp, index) in experiences" :key="index">
      <ExperienceItem
        :date="exp.date"
        :company="exp.company"
        :role="exp.role"
        :link="exp.link"
        :description="exp.description"
        :techStack="exp.techStack"
      />
    </div>
    
    <div class="view-all-btn uk-container uk-light uk-margin-top">
      <a href="/my-resume.pdf" target="_blank">
        <button class="uk-button uk-button-text">
          View Full Resume
          <span uk-icon="icon: arrow-right" class="hover-move hover-right"></span>
        </button>
      </a>
    </div>
  </section>
</template>

<script>
import ExperienceItem from '../Experience/ExperienceItem.vue';

export default {
  name: 'ExperienceSection',
  components: { ExperienceItem },
  data() {
    return {
      experiences: [
        {
          date: 'MAR 2025 – PRESENT',
          company: 'Qstrike Innovations Phils., OPC',
          role: 'Software Engineer | UI/UX Intern',
          link: 'https://prolook.com/',
          description:
            `Responsible for contributing to user interface improvements, fixing bugs, and developing new features.
             I also <strong>communicate regularly with senior software engineers</strong> and <strong>lead a team of interns</strong>
             to ensure tasks are on track and quality standards are met.`,
          techStack: ['JavaScript', 'HTML', 'CSS', 'Sass', 'UIkit', 'NPM', 'Git', 'GitHub', 'Figma']
        },
        {
          date: 'FEB 2025',
          company: 'Quest Phil Diagnostics',
          role: 'Software Developer Intern',
          link: 'https://www.facebook.com/questphildiagnostics',
          description:
            `Trained as a Software Developer Intern, where I was introduced to the fundamentals of Java and JavaScript
             and gained early exposure to practical programming concepts and workflows.`,
          techStack: ['JavaScript', 'Java', 'NPM']
        },
        {
          date: 'OCT 2021 – JUL 2025',
          company: 'City College of Angeles',
          role: 'Bachelor of Science in Computer Science Student',
          link: 'https://www.cca.edu.ph/',
          description:
            `Studied core areas of computer science including programming, data structures, algorithms, and web
             development. Consistently earned Dean’s List honors throughout my academic years.`,
          techStack: [
            'Programming',
            'Web Design',
            'Web Development',
            'Data Science',
            'Data Structures & Algorithms',
            'Computer Architecture'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.experience-section {
  margin: 0;

  h4 {
    margin: 0;
    padding: 0;
    color: #e5e7eb;
    font-weight: 600;
  }

}

.view-all-btn {
  margin-top: 2rem !important;

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
      transition: 0.3s ease;
    }

    &:hover .hover-right {
      transform: translateX(5px);
    }
  }
}
</style>

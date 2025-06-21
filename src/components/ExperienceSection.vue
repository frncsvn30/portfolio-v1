<template>
  <section class="experience-section uk-section">
    <h4 class="uk-hidden@m">EXPERIENCE</h4>
    <div class="uk-container uk-light">
      <div class="experience-item">
        <!-- Date Column -->
        <div class="date-column">
          <p class="date">MAR 2025 – PRESENT</p>
        </div>

        <!-- Main Content -->
        <div class="content-column">
          <a href="https://prolook.com/" class="company-link" target="_blank">
            <p class="company">
              Qstrike Innovations Phils., OPC
              <span uk-icon="icon: link" class="uk-icon"></span>
            </p>
          </a>
          <p class="role">Software Engineer | UI/UX Intern</p>

          <p class="description">
            Responsible for contributing to user interface improvements, fixing bugs, and developing new features.
            I also <strong>communicate regularly with senior software engineers</strong> and <strong>lead a team of interns</strong>
            to ensure tasks are on track and quality standards are met.
          </p>

          <!-- Tech Stack -->
          <div class="stack-tags">
            <span class="tag">JavaScript</span>
            <span class="tag">HTML</span>
            <span class="tag">SCSS</span>
            <span class="tag">Git</span>
            <span class="tag">Github</span>
            <span class="tag">UIkit</span>
            <span class="tag">Figma</span>
          </div>
        </div>
      </div>
    </div>

    <div class="uk-container uk-light">
      <div class="experience-item">
        <!-- Date Column -->
        <div class="date-column">
          <p class="date">FEB 2025</p>
        </div>

        <!-- Main Content -->
        <div class="content-column">
          <a href="https://www.facebook.com/questphildiagnostics" class="company-link" target="_blank">
            <p class="company">
              Quest Phil Diagnostics
              <span uk-icon="icon: link" class="uk-icon"></span>
            </p>
          </a>
          <p class="role">Software Developer Intern</p>

          <p class="description">
            Trained as a Software Developer Intern, where I was introduced to the fundamentals of Java and JavaScript and gained early exposure to practical programming concepts and workflows.
          </p>

          <!-- Tech Stack -->
          <div class="stack-tags">
            <span class="tag">JavaScript</span>
            <span class="tag">Java</span>
            <span class="tag">NPM</span>
          </div>
        </div>
      </div>
    </div>


    <div class="uk-container uk-light">
      <div class="experience-item">
        <!-- Date Column -->
        <div class="date-column">
          <p class="date">OCT 2021 – JUL 2025</p>
        </div>

        <!-- Main Content -->
        <div class="content-column">
          <a href="https://www.cca.edu.ph/" class="company-link" target="_blank">
            <p class="company">
              City College of Angeles
              <span uk-icon="icon: link" class="uk-icon"></span>
            </p>
          </a>
          <p class="role">Bachelor of Science in Computer Science Student</p>

          <p class="description">
            Studied core areas of computer science including programming, data structures, algorithms, and web development. Consistently earned Dean’s List honors throughout my academic years.
          </p>

          <!-- Tech Stack -->
          <div class="stack-tags">
            <span class="tag">Programming</span>
            <span class="tag">Wen Design</span>
            <span class="tag">User Interface Design</span>
            <span class="tag">User Experience Design</span>
          </div>
        </div>
      </div>

      <div class="view-all-btn uk-container uk-light uk-margin-top">
        <a href="/my-resume.pdf" target="_blank">
          <button class="uk-button uk-button-text">
            View Full Resume
            <span uk-icon="icon: arrow-right"></span>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
};
</script>

<style lang="scss" scoped>
.experience-section {
  margin: 0;

  h4 {
    margin: 0; padding: 0;
    color: #e5e7eb;
    font-weight: 600;
  }

  .experience-item {
    display: flex;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @media screen and (max-width: 960px) {
      flex-direction: column;
      gap: .5rem;
    }
      
    .date-column {
      width: 180px;
      flex-shrink: 0;

      .date {
        color: #aaa;
        font-size: 0.8rem;
        margin: 0;
      }
    }

    .content-column {
      flex: 1;

      .company-link {
        text-decoration: none;

        .company {
          font-size: 1.2rem;
          font-weight: 600;
          color: #e5e7eb;
          margin: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;

          &:hover {
            color: #38bdf8;
          }
        }
      }

      .role {
        font-size: 1rem;
        color: #7f8fa6;
        margin: 0.25rem 0 1rem;
      }

      .description {
        color: #9ca3af;
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1rem;

        strong {
          font-weight: 600;
          color: #e5e7eb;
        }
      }

      .stack-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.1);
          padding: 0.3rem 0.7rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }
  }

  .uk-container:last-of-type .experience-item {
    border-bottom: none;
  }
}

.view-all-btn {
  margin-top: .5rem !important;
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
  }
}

</style>

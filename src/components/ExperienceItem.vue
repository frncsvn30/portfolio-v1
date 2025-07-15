<template>
    <div class="experience-item">
        <!-- Date Column -->
        <div class="date-column">
          <p class="date">{{ date }}</p>
        </div>

        <!-- Main Content -->
        <div class="content-column">
            <a :href="link" class="company-link" target="_blank">
            <p class="company">
              {{ company }}
              <span uk-icon="icon: link" class="uk-icon"></span>
            </p>
          </a>
          <p class="role">{{ role }}</p>

          <p class="description" v-html="description"></p>

          <!-- Tech Stack -->
          <div class="stack-tags">
            <span class="tag" v-for="(tech, index) in techStack" :key="index">
                {{ tech }}
            </span>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'ExperienceItem',
    props: {
        date: String,
        company: String,
        role: String,
        link: String,
        description: String,
        techStack: Array
    }
}
</script>

<style lang="scss" scoped>

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
  

</style>



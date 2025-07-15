<template>
    <div class="project">
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
</template>

<script>
export default {
    name: 'ProjectsItem',
    props: {
        project: Object
    }
}
</script>

<style lang="scss" scoped>
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

@media screen and (max-width: 768px) {
  .project {
    flex-direction: column;

    .screenshot img {
      width: 100%;
    }
  }
}
</style>
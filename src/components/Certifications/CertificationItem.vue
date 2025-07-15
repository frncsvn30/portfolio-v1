<template>
    <div class="cert">
      <div class="screenshot">
        <img :src="cert.image" :alt="cert.title" />
      </div>
      <div class="cert-details">
        <div class="title">
          <template v-if="!cert.disabled">
            <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="external-link">
              <h3>
                {{ cert.title }}
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
</template>

<script>
export default {
    name: 'CertificationItem',
    props: {
        cert: Object
    }
}
</script>

<style lang="scss" scoped>

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
      font-size: 1rem;
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
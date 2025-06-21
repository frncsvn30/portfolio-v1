<template>
  <section class="about-section">
    <div class="container">
      <h4 class="uk-hidden@m">ABOUT</h4>
      <p>
        My full name is Francis Loyd M. Vino. I graduated with a degree in
        <span>BS Computer Science</span> from City College of Angeles. Since college, I’ve developed
        a strong interest in web design and front-end development, which led me to explore
        building clean and user-friendly interfaces.
      </p>

      <p>
        I’m currently a <span>Software Engineer intern</span> at Qstrike Innovation Phils OPC.
        I’ve been gaining hands-on experience by working on real projects, contributing to
        interface improvements, and learning how to build and maintain web applications in a
        collaborative environment. I regularly communicate with senior software engineers for
        guidance and feedback, and I also lead a small team of interns to coordinate tasks and
        ensure steady project progress.
      </p>

      <p>
        When I’m not in front of my computer, I enjoy going for walks, sketching ideas or
        illustrations, spending time with my cat – Yuki, and watching Studio Ghibli films to
        unwind and find <span>creative inspiration</span>.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped lang="scss">
.about-section {
  
  h4 {
    margin: 0; padding: 0;
    color: #e5e7eb;
    font-weight: 600;
  }

  .container {
    margin: 0;
    color: #9ca3af;
    font-size: 0.95rem;
    line-height: 1.8;

    span {
      color: #e5e7eb;
      font-weight: 600;
    }

    p {
      font-size: 1.1rem;
      
      @media screen and (max-width: 1026px) {
        font-size: 1rem;
      }
    }

    p + p {
      margin-top: 1.5rem;
    }
  }
}
</style>

<template>
  <footer class="footer uk-section">
    <p>
      Coded in <strong>Visual Studio Code</strong> · 
      Built with <strong>Vue.js & UIkit</strong> · 
      Deployed on <strong>Netlify</strong>
    </p>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  font-size: 1.1rem;
  color: #9ca3af94;

  @media screen and (max-width: 1026px) {
    font-size: 1rem;
  }
}

.footer strong {
  font-weight: 600;
  color: #9ca3af;
}
</style>

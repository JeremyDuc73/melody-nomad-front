<template>
  <div class="footer container">
    <div class="footer__left">
      <p class="footer__title">
        Plan du site
      </p>
      <NuxtLink to="/" class="footer__link">Accueil</NuxtLink>
      <NuxtLink to="/histoire" class="footer__link">Notre histoire</NuxtLink>
      <NuxtLink to="/vietnam" class="footer__link">Destinations</NuxtLink>
      <NuxtLink to="/" class="footer__link">Blog</NuxtLink>
      <NuxtLink to="/contact" class="footer__link">Contact</NuxtLink>
    </div>
    <div class="footer__middle">
      <p class="footer__title">
        Pages légales
      </p>
      <NuxtLink to="/" class="footer__link">Politique de confidentialité</NuxtLink>
      <NuxtLink to="/" class="footer__link">Mentions légales</NuxtLink>
      <NuxtLink to="/" class="footer__link">Conditions général de vente</NuxtLink>
    </div>
    <div class="footer__right">
      <img src="/images/logo-brown.png" alt="logo">
    </div>
  </div>
</template>
<style lang="scss">
.footer {
  margin-top: 70px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  &__title {
    font-weight: 500;
    font-size: 32px;
    font-family: var(--font-body-heading), serif;
    margin-bottom: 15px;
  }
  &__link {
    font-weight: 500;
    font-family: var(--font-body), serif;
  }
  &__left, &__middle {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
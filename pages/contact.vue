<template>
  <Navbar />
  <div class="hero-contact">
    <img class="hero-contact__logo" src="/public/images/logo.png" alt="">
    <h1>Contact</h1>
    <img class="hero-contact__img-riziere" src="/public/images/riz-2.png" alt="">
    <img class="hero-contact__img-nuage" src="/public/images/nuage-hero.png"  alt="">
  </div>
  <div class="form">
    <div class="form__container">
      <img src="/images/contact.png" alt="">
      <div class="form__container__right">
        <h3>Contactez-nous</h3>
        <form class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label for="nom">Nom</label>
              <input type="text" id="nom" />
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input type="text" id="prenom" />
            </div>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="6"></textarea>
          </div>

          <button type="submit" class="submit-btn">Envoyer</button>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style lang="scss">
@use "assets/scss/contact";
</style>
<script setup lang="ts">
</script>
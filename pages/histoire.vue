<template>
  <Navbar />
  <div class="hero-histoire">
    <img class="hero-histoire__logo" src="/public/images/logo.png" alt="">
    <h1>notre<br>histoire</h1>
    <img class="hero-histoire__img-riziere" src="/public/images/riz-2.png" alt="">
    <img class="hero-histoire__img-nuage" src="/public/images/nuage-hero.png"  alt="">
  </div>
  <div class="section-1-histoire container">
    <Card
        title="Expériences immersives uniques"
        text="Avec Melody Nomad, plongez au cœur d’expériences rares et enrichissantes grâce à notre réseau privilégié. Nous vous
connectons à des artistes locaux, artisans et lieux emblématiques souvent méconnus des circuits traditionnels. Chaque
rencontre et activité sont soigneusement choisies pour vous offrir une immersion authentique et inoubliable dans la culture
musicale.
"
        position="left"
        img="/images/card-1.jpeg"
    />
    <Card
        title="Accessibilité"
        text="Que vous soyez musicien, amateur de musique ou simplement curieux, nos séjours sont faits pour vous. Nous proposons des
formules adaptées à tous : économiques ou premium, avec des options personnalisées comme transport privé ou collectif.
Vivez un voyage à votre rythme, conçu selon vos envies et besoins, pour une expérience unique."
        position="right"
        img="/images/card-2.jpeg"
    />
    <Card
        title="Tourisme éthique et responsable"
        text="Nous valorisons un tourisme respectueux et éthique. Nos voyages soutiennent les communautés locales en collaborant avec
des artistes et artisans du cru. Chaque rencontre est une occasion d’échange sincère, favorisant l’apprentissage mutuel tout
en préservant l’environnement et les traditions culturelles."
        position="left"
        img="/images/card-3.jpeg"
    />
  </div>
  <div class="section-2-histoire container">
    <div class="section-2-histoire__destinations">
      <Destination text="Tanzanie" img="/images/tanzanie.jpeg"/>
      <Destination text="Sénégal" img="/images/senegal.jpeg"/>
      <Destination text="Vietnam" img="/images/vietnam.jpeg"/>
    </div>
    <ClientOnly>
      <Globe/>
    </ClientOnly>
  </div>
  <div class="section-3-histoire container">
    <h3>Les avis de nos voyageurs</h3>
    <div class="section-3-rates">
      <RateCard text="Elodie & Marc"/>
      <RateCard text="Nathalie"/>
      <RateCard text="Claude & Laure"/>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollReveal = (await import('scrollreveal')).default

    ScrollReveal().reveal('.section-1-histoire', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-2-histoire', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-3-histoire', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
  }
})
</script>

<style lang="scss">
@use "assets/scss/histoire";
</style>
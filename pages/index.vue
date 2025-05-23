<template>
  <Navbar />
  <div class="hero">
    <img class="hero__logo" src="/public/images/logo.png" alt="">
    <h1>melody<br>nomad</h1>
    <img class="hero__img-nuage" src="/public/images/nuage-hero.png" >
  </div>
  <div class="introduction container">
    <p class="introduction__text">
      Melody Nomad, créé par Robin et Sylvain, deux amis passionnés de musique et de voyages, propose des expériences uniques et immersives autour des cultures musicales. Forte de leurs explorations en Asie, en Afrique et en Amérique Latine, Melody Nomad vous invite à des séjours où la musique devient un langage universel, liant les cultures et les générations. Que vous soyez musicien ou simple curieux, partez à la découverte du monde à travers ses traditions musicales, ses artistes et ses artisans locaux. Rejoignez-nous pour voyager aux rythmes du monde et transformer chaque mélodie en souvenir inoubliable.
    </p>
    <div class="introduction__button">
      <a class="introduction__button__link" href="/histoire">
        <div class="introduction__button__link__icon">
          <Icon name="tabler:click" size="37"/>
        </div>
        <p>Découvrir l'histoire</p>
      </a>
    </div>
  </div>
  <div class="section-1">
    <img class="section-1__nuage-top" src="/public/images/section-1-nuage-top.png" alt="">
    <img class="section-1__nuage-bottom" src="/public/images/section-1-nuage-bottom.png" alt="">
    <div class="container">
      <h2>Découvrir nos destinations</h2>
    </div>
  </div>
  <div class="section-2 container">
    <div class="section-2__destinations">
      <Destination text="Tanzanie" img="/images/tanzanie.jpeg"/>
      <Destination text="Sénégal" img="/images/senegal.jpeg"/>
      <Destination text="Vietnam" img="/images/vietnam.jpeg"/>
    </div>
    <ClientOnly>
      <Globe/>
    </ClientOnly>
  </div>
  <div class="section-3 container">
    <img src="/public/images/timeline.png" alt="">
  </div>
  <div class="section-4 container">
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
  <div class="section-5 container">
    <h3>Les avis de nos voyageurs</h3>
    <div class="rates">
      <RateCard text="Elodie & Marc"/>
      <RateCard text="Nathalie"/>
      <RateCard text="Claude & Laure"/>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss">
  @use "assets/scss/home";
</style>
<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollReveal = (await import('scrollreveal')).default

    ScrollReveal().reveal('.section-1', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.introduction', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-2', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-3', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-4', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-5', {
      delay: 200,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
  }
})
</script>


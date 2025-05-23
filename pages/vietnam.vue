<template>
  <Navbar />
  <div class="hero-vietnam">
    <img class="hero-vietnam__logo" src="/public/images/logo.png" alt="">
    <h1>vietnam</h1>
    <img class="hero-vietnam__img-riziere" src="/public/images/riz-2.png" alt="">
    <img class="hero-vietnam__img-nuage" src="/public/images/nuage-hero.png"  alt="">
    <img class="hero-vietnam__map" src="/public/images/vietnam.svg" alt="">
  </div>
  <div class="section-2-vietnam">
    <div class="section-2-vietnam__card">
      <h4>Immersion culturelle et musicale au Vietnam</h4>
      <div class="section-2-vietnam__card__middle">
        <ul>
          <li>Hanoï, Baie de Lan Ha... - <strong>12 jours / 11 nuits</strong></li>
          <li>Prochain départ - <strong>8 novembre 2025</strong></li>
          <li><strong>À partir de 2 990 €</strong> - Vols non inclus</li>
          <li><strong>Hébergements, spectacles, ateliers musicaux</strong></li>
        </ul>
        <div class="section-2-vietnam__card__middle__img"></div>
      </div>
      <div class="section-2-vietnam__card__buttons">
        <a class="inverted" href="#">Découvrir l'itinéraire</a>
        <a class="classic" href="#">Réserver maintenant</a>
      </div>
    </div>
  </div>
  <div class="section-3-vietnam">
    <img class="section-3-vietnam__nuage-top" src="/public/images/section-1-nuage-top.png" alt="">
    <img class="section-3-vietnam__nuage-bottom" src="/public/images/section-1-nuage-bottom.png" alt="">
    <div class="section-3-vietnam__text container">
      <p>
        Plongez au cœur du Vietnam à travers sa musique et ses traditions. De Hanoï aux Hauts Plateaux, chaque étape
        vous emmène à la rencontre d’un patrimoine vivant et authentique. Découvrez la musique traditionnelle dans la
        vibrante capitale, explorez les paysages enchanteurs de Ninh Binh et laissez-vous porter par les chants
        impériaux de Hué. À Hoi An, flânez entre lanternes et mélodies d’antan avant de partir à la découverte des
        villages des ethnies minoritaires. Partagez leurs rituels, assistez à des performances de gongs et vibrez au
        rythme des danses folkloriques. Un voyage immersif où chaque son et chaque rencontre racontent une histoire.
      </p>
    </div>
  </div>
  <div class="section-4-vietnam">
    <div class="section-4-vietnam__card">
      <img src="/public/images/section-4-vietnam-card.png" alt="">
      <p class="section-4-vietnam__card__title">Jour - 1</p>
      <p class="section-4-vietnam__card__text">texte de presentation des jours puis slide de carte pour jour 2</p>
      <div class="nav-button">
        <a href=""><img src="/images/arrow-right.svg" class="arrow left" alt="left arrow" /></a>
        <div class="divider"></div>
        <a href=""><img src="/images/arrow-right.svg" class="arrow right" alt="right arrow" /></a>
      </div>
    </div>
    <img class="section-4-vietnam__vietnam" src="/images/vietnam-brown.svg" alt="">
  </div>
  <div class="section-5-vietnam container">
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
  </div>
  <div class="section-6-vietnam container">
    <h3>Les prochains départs</h3>
    <div class="section-6-vietnam__cards">
      <VietnamCard date="Mardi 21 octobre 2025" rent/>
      <VietnamCard date="Lundi 17 novembre 2025" rent/>
      <VietnamCard date="Vendredi 5 decembre 2025" rent/>
      <VietnamCard date="Mecredi 11 fevrier 2026" rent/>
    </div>
  </div>
  <div class="section-7-vietnam">
    <img class="section-7-vietnam__nuage-top" src="/public/images/section-1-nuage-top.png" alt="">
    <img class="section-7-vietnam__nuage-bottom" src="/public/images/section-1-nuage-bottom.png" alt="">
    <div class="section-7-vietnam__card container">
      <h3>Télécharger notre guide</h3>
      <p>Avant de partir à l’aventure il est important de se préparer ! Biensure Melody Nomad vous accompagne dans ces étapes mais pour vos préparer au mieux vous pouvez télécharger notre guide ou vous retrouverez nos conseils et astuce avant de partir.</p>
      <a href="#">Télécharge le guide de voyage</a>
    </div>
  </div>
  <div class="section-8-vietnam container">
    <h3>Découvrez nos destinations</h3>
    <div class="section-8-vietnam__destinations-container">
      <div class="section-8-vietnam__destinations-container__items">
        <Destination text="Tanzanie" img="/images/tanzanie.jpeg"/>
        <Destination text="Sénégal" img="/images/senegal.jpeg"/>
        <Destination text="Vietnam" img="/images/vietnam.jpeg"/>
      </div>
      <ClientOnly>
        <Globe/>
      </ClientOnly>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss">
  @use "assets/scss/vietnam";
</style>
<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const ScrollReveal = (await import('scrollreveal')).default

    ScrollReveal().reveal('.section-3-vietnam', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-4-vietnam', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-5-vietnam', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-6-vietnam', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-7-vietnam', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
    ScrollReveal().reveal('.section-8-vietnam', {
      delay: 300,
      distance: '40px',
      duration: 800,
      origin: 'bottom',
      reset: false
    })
  }
})
</script>
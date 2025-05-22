<template>
  <div class="top-right-slide">
    <div class="inner-container-top">
      <NuxtLink to="/" class="nav-links">ACCUEIL</NuxtLink>
    </div>
  </div>
  <div class="middle-right-slide">
    <div class="inner-container-middle">
      <NuxtLink to="/histoire" class="nav-links">NOTRE HISTOIRE</NuxtLink>
    </div>
  </div>
  <div class="bottom-right-slide">
    <div class="inner-container-bottom">
      <NuxtLink to="#" class="nav-links">CONTACT</NuxtLink>
    </div>
  </div>

  <div class="top-left-slide">
    <div class="inner-container-left-top">
      <NuxtLink to="/vietnam" class="nav-links">NOS VOYAGES</NuxtLink>
    </div>
  </div>
  <div class="bottom-left-slide">
    <div class="inner-container-left-bottom">
      <NuxtLink to="#" class="nav-links">BLOG</NuxtLink>
    </div>
  </div>

  <div class="menu-btn">
    <div class="eks-one"></div>
    <div class="eks-two"></div>
    <div class="eks-three"></div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(async () => {
  const menu = document.querySelector('.menu-btn');
  const topLeftSlider = document.querySelector('.top-left-slide');
  const bottomLeftSlider = document.querySelector('.bottom-left-slide');

  const topRightSlider = document.querySelector('.top-right-slide');
  const middleRightSlider = document.querySelector('.middle-right-slide');
  const bottomRightSlider = document.querySelector('.bottom-right-slide');

  const eksOne = document.querySelector('.eks-one');
  const eksTwo = document.querySelector('.eks-two');
  const eksThree = document.querySelector('.eks-three');

  var isOpen = false;

  menu.addEventListener('click', () => {
    topLeftSlider.classList.toggle('top-left-slide-show');
    bottomLeftSlider.classList.toggle('bottom-left-slide-show');
    topRightSlider.classList.toggle('top-right-slide-show');
    middleRightSlider.classList.toggle('middle-right-slide-show');
    bottomRightSlider.classList.toggle('bottom-right-slide-show');
    eksTwo.classList.toggle('eks-two-fade');
    document.body.classList.toggle('no-scroll');

    const tl = gsap.timeline();
    const tlEksThree = gsap.timeline();

    if(!isOpen) {
      tl.to('.eks-one', {
        y: isOpen? 0 : 9,
      })
          .to('.eks-one', {
            rotate: isOpen? 0 : 45
          })

      tlEksThree.to('.eks-three', {
        y: isOpen? 0 : -9,
      })
          .to('.eks-three', {
            rotate: isOpen? 0 : -45
          })
    }
    else {
      tl.to('.eks-one', {
        rotate: isOpen? 0 : 45,
      })
          .to('.eks-one', {
            y: isOpen? 0 : 9,
          })

      tlEksThree.to('.eks-three', {
        rotate: isOpen? 0 : -45
      })
          .to('.eks-three', {
            y: isOpen? 0 : -9
          })
    }

    isOpen = !isOpen
  })

  gsap.from('.simple', {
    x: -100,
    duration: 1
  })
  gsap.from('.menu', {
    x: -100,
    duration: 1.2,
    delay: 0.3,
    opacity: 0
  })
  gsap.from('.navi', {
    y: -500,
    duration: 2.,
    delay: 0.4,
    opacity: 0
  })
})
</script>
<style lang="scss">
.menu-btn {
  cursor: pointer;
  position: fixed;
  top: 25px;
  right: 30px;
  z-index: 50;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--brown);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-btn
div {
  background-color: var(--beige);
  width: 50%;
  height: 3px;
  margin: 3px 0;
}

.eks-two {
  opacity: 1;
  transition: 1s ease-in;
}

.eks-two-fade {
  opacity: 0;
}

.top-right-slide {
  position: fixed;
  top: 0;
  min-height: 100vh;
  z-index: 10;
  width: 100%;
  background-color: #dacaaa;
  clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%);
  transition: 0.5s ease-in;
}
.top-right-slide-show {
  clip-path: polygon(0 0, 100% 0, 100% 20%, 0 20%);
}

/* RIGHT TOP */
.inner-container-top {
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-container-top::after {
  content: '';
  position: absolute;
  top: 0;
  height: 20vh;
  width: 100%;
  background-color: var(--beige);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.5s ease-in;
}
.inner-container-top:hover::after {
  clip-path: polygon(0 0, 75% 0, 25% 100%, 0 100%);
}
/* END RIGHT TOP */

/* RIGHT MIDDLE */
.inner-container-middle {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20vh;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.inner-container-middle::after {
  content: '';
  position: absolute;
  top: 0;
  height: 20vh;
  width: 100%;
  background-color: var(--beige);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.5s ease-in;
}
.inner-container-middle:hover::after {
  clip-path: polygon(0 0, 75% 0, 25% 100%, 0 100%);
}
/* END RIGHT MIDDLE */

/* RIGHT BOTTOM */
.inner-container-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-container-bottom::after {
  content: '';
  position: absolute;
  top: 0;
  height: 20vh;
  width: 100%;
  background-color: var(--beige);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.5s ease-in;
}
.inner-container-bottom:hover::after {
  clip-path: polygon(0 0, 75% 0, 25% 100%, 0 100%);
}
/* END RIGHT BOTTOM */

/* LEFT TOP */
.inner-container-left-top {
  width: 100%;
  min-height: 20vh;
  transform: translateY(100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-container-left-top::after {
  content: '';
  position: absolute;
  top: 0;
  height: 20vh;
  width: 100%;
  background-color: var(--brown);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.5s ease-in;
}
.inner-container-left-top:hover::after {
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 75% 100%);
}
/* END LEFT TOP */

/* LEFT BOTTOM */
.inner-container-left-bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 20vh;
  transform: translateY(-100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner-container-left-bottom::after {
  content: '';
  position: absolute;
  top: 0;
  height: 20vh;
  width: 100%;
  background-color: var(--brown);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  transition: 0.5s ease-in;
}
.inner-container-left-bottom:hover::after {
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 75% 100%);
}
/* END LEFT BOTTOM */

.middle-right-slide {
  position: fixed;
  top: 0;
  z-index: 11;
  min-height: 100vh;
  width: 100%;
  background-color: #dacaaa;
  clip-path: polygon(100% 40%, 100% 40%, 100% 60%, 100% 60%);
  transition: 0.5s ease-in;
}
.middle-right-slide-show {
  clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
}
.bottom-right-slide {
  position: fixed;
  top: 0;
  z-index: 12;
  min-height: 100vh;
  width: 100%;
  background-color: #dacaaa;
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  transition: 0.5s ease-in;
}
.bottom-right-slide-show {
  clip-path: polygon(0 80%, 100% 80%, 100% 100%, 0 100%);
}

.top-left-slide {
  position: fixed;
  top: 0;
  z-index: 13;
  min-height: 100vh;
  width: 100%;
  background-color: #78351d;
  clip-path: polygon(0 20%, 0% 20%, 0% 40%, 0 40%);
  transition: 0.5s ease-in;
}
.top-left-slide-show {
  clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
}

.bottom-left-slide {
  position: fixed;
  top: 0;
  z-index: 13;
  min-height: 100vh;
  width: 100%;
  background-color: #78351d;
  clip-path: polygon(0 60%, 0% 60%, 0% 80%, 0 80%);
  transition: 0.5s ease-in;
}
.bottom-left-slide-show {
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
}

.nav-links {
  text-decoration: none;
  color: var(--beige);
  font-size: 2.5rem;
  position: fixed;
  z-index: 4;
  transition: 0.3s ease-in;
  transform: translateY(10%);
  padding-bottom: 5px;
}
.nav-links::before{
  content: '';
  position: absolute;
  bottom:0;
  right: 50%;
  height: 100%;
  width:0;
  transition: 0.4s ease-in;
}
.nav-links::after{
  content: '';
  position: absolute;
  bottom:0;
  left: 50%;
  height: 100%;
  width:0;
  transition: 0.4s ease-in;
}
.nav-links:hover::before{
  content: '';
  position: absolute;
  bottom:0;
  right: 50%;
  height: 100%;
  width: 50%;
  border-bottom: 3px solid var(--beige);
}
.nav-links:hover::after{
  content: '';
  position: absolute;
  bottom:0;
  left: 50%;
  height: 100%;
  width: 50%;
  transition: 0.4s ease-in;
  border-bottom: 3px solid var(--beige);
}

.nav-links:hover {
  letter-spacing: 5px;
  transform: translateY(0);
}
.inner-container-middle .nav-links{
    color: var(--brown);
}
.inner-container-middle .nav-links:hover::before{
  border-bottom: 3px solid var(--brown);
}
.inner-container-middle .nav-links:hover::after{
  border-bottom: 3px solid var(--brown);
}
.inner-container-top .nav-links{
  color: var(--brown);
}
.inner-container-top .nav-links:hover::before{
  border-bottom: 3px solid var(--brown);
}
.inner-container-top .nav-links:hover::after{
  border-bottom: 3px solid var(--brown);
}
.inner-container-bottom .nav-links{
  color: var(--brown);
}
.inner-container-bottom .nav-links:hover::before{
  border-bottom: 3px solid var(--brown);
}
.inner-container-bottom .nav-links:hover::after{
  border-bottom: 3px solid var(--brown);
}
</style>
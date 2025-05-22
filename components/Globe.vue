<template>
  <div ref="container" class="globe-container" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

const container = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!container.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.z = 190

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  const globe = new ThreeGlobe()
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')

  scene.add(globe)

  // Clouds
  const CLOUDS_ALT = 0.004
  const CLOUDS_ROTATION_SPEED = -0.006
  new THREE.TextureLoader().load('/images/clouds.png', texture => {
    const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: texture, transparent: true })
    )
    scene.add(clouds)

    const animateClouds = () => {
      clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180
      requestAnimationFrame(animateClouds)
    }
    animateClouds()
  })

  scene.add(new THREE.AmbientLight(0xffffff, 2)) // lumière ambiante douce

  const dirLight = new THREE.DirectionalLight(0xffffff, 3)
  dirLight.position.set(5, 3, 5)
  scene.add(dirLight)

  scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 2))


  const controls = new TrackballControls(camera, renderer.domElement)
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.3
  controls.minDistance = 150
  controls.rotateSpeed = 1.2
  controls.noZoom = true
  controls.zoomSpeed = 0.8

  const animate = () => {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()

  window.addEventListener('resize', () => {
    const width = container.value!.clientWidth
    const height = container.value!.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    renderer.domElement.addEventListener('wheel', e => e.preventDefault())
  })
})
</script>

<style scoped>
.globe-container {
  width: 600px;
  height: 600px;
}
</style>

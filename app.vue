<template>
  <div id="main">
    <TresCanvas
      window-size
      shadows
      clear-color="#C8C8C8"
    >
      <TresPerspectiveCamera
        :position="[0, 0.625, 15]"
        :look-at="[0, 0.625, 0]"
      />

      <OrbitControls />

      <VCircle
        v-for="(color, index) in ['blue', 'yellow', 'black', 'green', 'red']"
        :key="index"
        :position="[(index - 2) * 1.25, index % 2 === 0 ? 1.25 : 0, 0]"
        :rotation="[0, (index % 2 === 0 ? -1 : 1) * Math.PI / 16, 0]"
        :color="color"
      />

      <TresMesh
        receive-shadow
        :position="[0, 0, -5]"
        :rotation="[0, 0, 0]"
      >
        <TresPlaneGeometry :args="[20, 20, 10, 10]" />
        <TresMeshPhongMaterial
          color="#f7f7f7"
        />
      </TresMesh>

      <TresDirectionalLight
        cast-shadow
        :position="[1, 3, 5]"
        :intensity="1.5"
      />
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
import { OrbitControls } from '@tresjs/cientos'
</script>

<style>
#main {
  height: 100%;
  width: 100%;
}
</style>

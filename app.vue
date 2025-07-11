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

      <VCircle
        v-for="(color, index) in ['blue', 'yellow', 'black', 'green', 'red']"
        :key="index"
        :position="[(index - 2) * 1.25, index % 2 === 0 ? 1.25 : 0, 0]"
        :rotation="[0, (index % 2 === 0 ? -1 : 1) * Math.PI / 16, 0]"
        :color="color"
      />

      <TresMesh
        receive-shadow
        :position="[0, 0, -10]"
        :rotation="[-Math.PI / 4, 0, 0]"
      >
        <TresPlaneGeometry :args="[20, 20, 10, 10]" />
        <TresMeshStandardMaterial color="#f7f7f7" />
      </TresMesh>

      <TresDirectionalLight
        cast-shadow
        :position="[0, 2, 2]"
        :intensity="1"
      />
    </TresCanvas>
  </div>
</template>

<style>
#main {
  height: 100%;
  width: 100%;
}
</style>

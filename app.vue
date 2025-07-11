<template>
  <div id="main">
    <TresCanvas
      window-size
      shadows
      clear-color="#B8B8B8"
    >
      <TresPerspectiveCamera
        :position="[0, 0, 8]"
        :look-at="[0, 0, 0]"
      />

      <VCircle
        :position="[-2.5, 1.25, 0]"
        :rotation="[0, -Math.PI / 16, 0]"
        color="blue"
      />

      <VCircle
        :position="[-1.25, 0, 0]"
        :rotation="[0, Math.PI / 16, 0]"
        color="yellow"
      />

      <VCircle
        :position="[0, 1.25, 0]"
        :rotation="[0, -Math.PI / 16, 0]"
        color="black"
      />

      <VCircle
        :position="[1.25, 0, 0]"
        :rotation="[0, Math.PI / 16, 0]"
        color="green"
      />

      <VCircle
        :position="[2.5, 1.25, 0]"
        :rotation="[0, -Math.PI / 16, 0]"
        color="red"
      />

      <TresDirectionalLight
        cast-shadow
        :position="[0, 2, 5]"
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

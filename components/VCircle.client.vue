<template>
  <TresMesh
    cast-shadow
    :position="position"
    :rotation="rotation"
  >
    <TresTorusGeometry
      :args="[1.0875, 0.1625, 32, 32]"
    />
    <TresMeshToonMaterial
      :color="color"
    />
  </TresMesh>
</template>

<script lang="ts" setup>
defineProps<{
  color: string
  position: [number, number, number]
  rotation?: [number, number, number]
}>()
</script>

<template>
  <TresMesh
    cast-shadow
    :position="position"
    :rotation="rotation"
  >
    <TresTorusGeometry
      :args="[1.1, 0.15, 16, 32]"
    />
    <TresMeshToonMaterial
      :color="color"
    />
  </TresMesh>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  color: string
  position: [number, number, number]
  rotation?: [number, number, number]
}>(), {
  rotation: () => [0, 0, 0],
})
</script>

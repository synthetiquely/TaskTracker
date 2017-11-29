<template lang="html">
  <span :style="{ color: '#ae5856' }">
    {{text}}
  </span>
</template>

<script>
export default {
  props: ['text'],
};
</script>

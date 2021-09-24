<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from '../../data/parts';

export default {
  name: 'PartInfo',
  props: [
    'partType',
    'partId',
  ],
  computed: {
    part() {
      return parts[this.partType].find((part) => part.id === +this.partId);
    },
  },
};
</script>

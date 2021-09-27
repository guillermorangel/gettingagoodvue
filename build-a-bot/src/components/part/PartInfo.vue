<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-part-mixin';

export default {
  name: 'PartInfo',
  mixins: [
    getPartsMixin,
  ],
  props: {
    partId: {
      type: [
        Number,
        String,
      ],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
    partType: {
      type: String,
    },
  },
  computed: {
    part() {
      return this.parts[this.partType].find((part) => part.id === +this.partId);
    },
  },
};
</script>

export default {
  beforeMount(element) {
    const el = element;
    el.style.position = 'absolute';
    el.style.bottom = '5px';
    el.style.right = '5px';
  },
};

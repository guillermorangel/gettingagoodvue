function applyStyle(element, binding) {
  const el = element;
  Object.keys(binding.value).forEach((key) => {
    el.style[key] = binding.value[key];
  });
  el.style.position = 'absolute';
}

export default {
  beforeMount(element, binding) {
    applyStyle(element, binding);
  },

  updated(element, binding) {
    applyStyle(element, binding);
  },
};

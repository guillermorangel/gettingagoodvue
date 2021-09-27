export default {
  beforeMount(element, binding) {
    // console.log('arg:', binding.arg);
    // console.log('modifiers:', binding.modifiers);
    if (binding.arg !== 'position') return;

    const el = element;
    Object.keys(binding.modifiers).forEach((key) => {
      el.style[key] = '5px';
    });

    el.style.position = 'absolute';
  },
};

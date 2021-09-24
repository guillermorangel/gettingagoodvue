<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li>
        <span>Heads</span>
      </li>
      <li>
        <span>Arms</span>
      </li>
      <li>
        <span>Torsos</span>
      </li>
      <li>
        <span>Bases</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: palevioletred;
  }
</style>

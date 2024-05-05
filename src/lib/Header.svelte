<!-- Navigation.svelte -->
<script>
	import Menu from "./Menu.svelte";
</script>

<nav class="navbar">
  <Menu />
</nav>

<style>
  /* Estilos existentes omitidos para brevidade */

  .navbar {
    background-color: #f8f9fa;
    padding: 1.25rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(41, 108, 3, 0.5);
    width: 100%;
  }

</style>



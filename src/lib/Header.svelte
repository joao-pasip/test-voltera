<!-- Navigation.svelte -->
<script>
	import Menu from "./Menu.svelte";
</script>

<header>
  <nav class="navbar container">
    <Menu />
  </nav>
</header>

<style>
  /* Estilos existentes omitidos para brevidade */

  header {
    background-color: #f8f9fa;
    border-bottom: 2px solid rgba(41, 108, 3, 0.5);
    margin-bottom: 2.5rem;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.25rem;
  }

</style>



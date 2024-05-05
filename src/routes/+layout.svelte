<script>

	import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";

</script>

<Header />

<div class="container-slot">
  <slot />
</div>

<Footer />

<style>
  .container-slot {
    min-height: 100vh;
  }
</style>
<script>
	import { page } from "$app/stores";


  let listaMenu = [
    { 'href': '/', 'label': 'Home' },
    { 'href': '/markdown', 'label': 'Markdown' },
    { 'href': '/america', 'label': 'América' },
    { 'href': '/tipografia', 'label': 'Tipografia' },
    { 'href': '/faq', 'label': 'Perguntas frequentes' },
  ]

  let menuActive = false;
  let selectedLink = ''; // Inicialmente, nenhuma opção selecionada


  function toggleMenu() {
    menuActive = !menuActive;
  }

  function closeMenu() {
    menuActive = false;
  }
</script>

<div class="logo">
    <a href="/" on:click={closeMenu}>
      <img src="favicon.png" alt="Logo">
    </a>
</div>
<ul class="nav-list" class:active={menuActive}>
    <!-- {#if menuActive}
      <button class="close-button" on:click={closeMenu}>
        <img src="x-solid.svg" alt="Fechar menu">
      </button>
    {/if} -->
    {#each listaMenu as { href, label }}
      <li>
        {#if $page.url.pathname === href}
          <a {href} class="nav-link selectedLink" on:click={closeMenu}>
            {label}
          </a>
        {:else}
          <a {href} class="nav-link" on:click={closeMenu} class:selectedLink={selectedLink === `/${href}`}>
            {label}
          </a>
        {/if}
      </li>
    {/each}
    
  </ul>
<button class="hamburger" on:click={toggleMenu}>
  <span></span>
  <span></span>
  <span></span>
  
</button>

<style>
  .logo img {
    height: 50px;
  }

  .nav-list {
    list-style-type: none;
    display: flex;
    padding: 0;
  }

  .nav-link {
    color: #296C03;
    text-decoration: none;
    padding: 0 15px;
    font-size: 18px;
    transition: color 0.3s;
  }

  .nav-link:hover {
    color: #007bff;
  }

  .nav-link.selectedLink {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }

  .hamburger {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: none;
  }

  .hamburger span {
    background-color: rgba(41, 108, 3);
    display: block;
    height: 2px;
    margin-bottom: 6px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    width: 25px;
  }

  @media screen and (max-width: 768px) {
    .nav-list {
      display: none;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #296C03;
      position: absolute;
      top: 90px; /* ajuste a altura conforme necessário */
      left: 0;
      padding: 1.25rem 0;
      z-index: 1;
    }

    .nav-list.active {
      display: flex;
    }

    .hamburger {
      display: block;
    }

      .nav-link {
      color: #DBE6D3;
      text-decoration: none;
      padding: 0 15px;
      font-size: 18px;
      transition: color 0.3s;
    }

    /* .close-button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
    } */
  }
</style>
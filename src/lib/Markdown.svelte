<script>
// @ts-nocheck

	import { onMount, onDestroy  } from "svelte";
  // import * as marked from 'marked';
  import { page } from "$app/stores";
  import SvelteMarkdown from "svelte-markdown";
  import { goto } from '$app/navigation';

  let source = ''; // Inicializa a variável para armazenar o conteúdo do Markdown
  let searchTerm = ''; // Termo de busca
  let occurrenceCount = 0; // Contagem de ocorrências
  let inputRef; // Referência para o campo de entrada

  // Função para carregar o conteúdo do arquivo Markdown
  async function loadMarkdownFile() {
    console.log($page);
    try {
      const response = await fetch(`${$page.url.pathname}.md`, {cache: "no-store"});
      console.log($page.url.pathname);
      if (!response.ok) {
        throw new Error(`Failed to load Markdown file: ${response.status} ${response.statusText}`);
      }
      source = await response.text()
      return source; // Retorna o conteúdo do arquivo
    } catch (error) {
      console.error('Error loading Markdown file:', error);
      return ''; // Retorna uma string vazia em caso de erro
    }
  }
  
  // Carrega os dados ao montar o componente
  // onMount(loadMarkdownFile);
   onMount(async () => {
    source = await loadMarkdownFile();
    // searchTerm = page?.query.get('q') || ''; // Obtém o termo de busca da query da URL
    searchTerm = $page.url.searchParams.get('q');
    if(searchTerm) {
      updateUrlWithSearchTerm()
      countOccurrences()
    }
    // console.log(page);
  });

  // Função para contar ocorrências da palavra no texto
  function countOccurrences() {
    if (!searchTerm || !source) return 0; // Se a busca estiver vazia ou o conteúdo do Markdown não foi carregado, retorne 0
    const regex = new RegExp('\\b' + searchTerm + '\\b', 'gi'); // Crie uma expressão regular para procurar a palavra inteira
    const matches = source.toLowerCase().match(regex); // Faça a correspondência no texto do Markdown
    console.log(matches ? matches.length : 0);
    occurrenceCount = matches ? matches.length : 0
    return matches ? matches.length : searchTerm.length
  }

  // Atualiza a URL com o termo de busca
  function updateUrlWithSearchTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('q', searchTerm);
    goto(window.location.pathname + '?' + urlParams.toString(), { replaceState: true });
  }

  // Atualiza a URL ao digitar no campo de input
  function handleSearchTermChange(event) {
    const element = event.target.elements
    const inputValue = element["q"].value
    searchTerm = inputValue
    // searchTerm = event.target.value;
    if (!searchTerm || !source) return 0; // Se a busca estiver vazia ou o conteúdo do Markdown não foi carregado, retorne 0
    const regex = new RegExp('\\b' + searchTerm + '\\b', 'gi'); // Crie uma expressão regular para procurar a palavra inteira
    const matches = source.toLowerCase().match(regex); // Faça a correspondência no texto do Markdown
    // console.log(matches ? matches.length : 0);
    occurrenceCount = matches ? matches.length : 0
    // updateUrlWithSearchTerm()
  }
  $: inputRef = searchTerm

  // Atualiza a contagem de ocorrências sempre que o termo de busca mudar
  $: occurrenceCount = countOccurrences();
  
  onMount(() => {
    if (inputRef) {
      inputRef.focus();
    }
    // console.log($page);
  });

  // // Limpa o termo de busca da URL ao destruir o componente para evitar que ele persista
  onDestroy(() => {
    if($page.query) {
      const urlParams = new URLSearchParams($page.query.toString());
      urlParams.delete('q');
      page.query.set(urlParams.toString());
    }
  });


</script>

<main>

  <form method="get" on:submit={handleSearchTermChange} class="container">
    <h2>Contagem de ocorrências: {occurrenceCount}</h2>
    <input type="text" bind:value={searchTerm} placeholder="Digite a palavra" bind:this={inputRef} id="q" name="q">
    <button type="submit">Pesquisar</button>
  </form>
  <section class="container">
    {#if source}
      <SvelteMarkdown {source} />
    {:else}
      <p>Loading...</p>
    {/if}
  </section>

</main>

<style>
  form {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  form button {
    background-color: #19320a;
    border: none;
    padding: 0.6rem 1rem;
    color: #DBE6D3;
    transition: .3s;
    cursor: pointer;
  }

  form button:hover {
    background-color: #296c03;
  }

  form input {
    border-radius: 0;
    padding: 0.6rem 1rem;
  }

   form input:focus {
    border: 1px solid #19320a; /* Altere para a cor desejada */
    outline: none; /* Remove a borda de destaque padrão */
  }

</style>

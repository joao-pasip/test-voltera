// /** @type {import('./$types').PageLoad} */
// export async function load({ fetch }) {
//   console.log("Olá mundo!");
//   try {
//     const response = await fetch('/america.md');
//     if (!response.ok) {
//       throw new Error(`Failed to load Markdown file: ${response.status} ${response.statusText}`);
//     }
//     const markdownText = await response.text(); // Obter o conteúdo do arquivo como texto
//     return { markdownText };
//   } catch (error) {
//     console.error('Error loading Markdown file:', error);
//     throw error; // Lançar o erro para ser capturado por quem chama esta função
//   }
// }

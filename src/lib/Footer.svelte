<script>
  const year = new Date().getFullYear()
</script>

<footer>
  <div class="containerFooter">
      <p class="copyright">© {year} Voltera Test. Todos os direitos reservados.</p>
  </div>
</footer>

<style>
  footer {
    background-color: #296C03;
    padding: 2rem 0;
    text-align: center;
    width: 100%;
    height: fit-content;
  }

  .containerFooter {
    width: 100%;
    margin: 0 auto;
    padding: 0; /* Adiciona um espaço interno ao container */
  }

  .copyright {
    color: #DBE6D3;
    font-size: 14px;
  }

  /* Responsividade */
  @media screen and (max-width: 768px) {
    .containerFooter {
      width: 100%; /* Reduz o espaço interno do container em telas menores */
    }
  }
</style>
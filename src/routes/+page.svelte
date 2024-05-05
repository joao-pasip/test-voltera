<section class="container section-voltera">
  <div>
    <h2>Por que ser Voltera?</h2>
    <p>
      Por ter a <strong>oportunidade</strong> de trabalhar na empresa que utiliza a força do mercado para <strong>solucionar</strong> verdadeiramente os <strong>problemas sociais e ambientais.</strong> Ser <strong>Voltera Energia</strong> é trabalhar com propósito e, constantemente, gerar impacto positivo na sociedade. Ser <strong>Voltera Energia</strong> é fazer parte do <strong>Movimento B</strong>, <strong>construir uma nova economia e cuidar das pessoas e da natureza.</strong>
    </p>
  </div>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kiKYd6awVLQ?si=ceGzF4l8_-RL-IDX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</section>

<section class="section-pasip-color">
  <div class="container section-pasip">
    <img src="pasip_foto.jpeg" alt="Foto João">
    <div>
      <h2>Sobre mim</h2>
      <p>Sou o João, apaixonado por construir soluções que permitam transformar as relações entre empresas e pessoas. Além disso, acredito que a mágica do desenvolvimento é resolver problemas e a nossa capacidade de aprender a aprender.
  
      Esse é um breve resumo de quem sou e do que acredito. Seja bem-vindo(a) ao teste desse eterno e apaixonado desenvolvedor aprendedor e aplicador. Muito obrigado e fico no aguardo do feedback! #QueroSerVoltera</p>
    </div>
  </div>
</section>

<style>
  .section-voltera {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    padding: 5rem 0;
    /* border: 2px solid red; */
  }

  .section-pasip-color {
    background-color: #DBE6D3;
    padding: 5rem 0;
  }

  .section-pasip {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    /* border: 2px solid red; */
  }

  img {
    width: 560px;
    aspect-ratio: 16 / 9;
  }

  h2 {
    color: #48A715;
  }

  @media screen and (max-width: 768px) {
     .section-voltera {
        grid-template-columns: 100%;
        gap: 2rem;
        padding-top: 1rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }

      .section-pasip {
        grid-template-columns: 100%;
        gap: 2rem;
      }

      iframe, img {
        width: 100%;
      }

      h2, p {
        text-align: center;
      }
  }
</style>
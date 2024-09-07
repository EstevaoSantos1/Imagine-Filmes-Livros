function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    campoPesquisa = campoPesquisa.toLowerCase(); 
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tag.toLowerCase()
      if(campoPesquisa == ""){
        resultados += `

                <div class="image-conteiner" class="titulo-imagem"> 
                    <img src="${dado.imagem}">
                    <h2 class="texto">
                        <p>${dado.titulo}</p>
                    </h2> 
                </div>`;
        
      }
      else if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Cria a estrutura HTML para cada item de resultado
        resultados += `
          <div class="item-resultado">
            <div class="titulo-imagem">
              <img src="${dado.imagem}">
              <h2 class="texto">
                <a href="${dado.Assistir}" target="_blank">${dado.titulo}</a>
              </h2>
            </div>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">mais informações</a>
            <p>click no titulo para assistir/ler<p>
          </div>
        `;
        }
    }

    if(!resultados){
      resultados = "<p>Nada foi encontrado, contate nossa central : Imagine@Livros&Filmes.com<p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }
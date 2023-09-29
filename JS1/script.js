function criarTabela(numero) {
    var container = document.createElement('div');
    container.className = 'table-container';

    var tabela = document.createElement('table');
    var titulo = document.createElement('th');
    titulo.textContent = 'Produto de ' + numero;
    titulo.colSpan = 2;
    var linhaTitulo = document.createElement('tr');
    linhaTitulo.appendChild(titulo);
    tabela.appendChild(linhaTitulo);

    for (var i = 1; i <= 10; i++) {
      var linha = document.createElement('tr');
      var celula1 = document.createElement('td');
      var celula2 = document.createElement('td');
      celula1.textContent = numero + 'x' + i;
      celula2.textContent = numero * i;
      linha.appendChild(celula1);
      linha.appendChild(celula2);
      tabela.appendChild(linha);
    }

    container.appendChild(tabela);
    return container;
  }

  for (var i = 1; i <= 10; i++) {
    var tabela = criarTabela(i);
    document.body.appendChild(tabela);
    
    if (i % 5 === 0) {
      var quebra = document.createElement('div');
      quebra.style.clear = 'both';
      document.body.appendChild(quebra);
    }
    }

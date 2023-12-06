let estoque = {
  'joao': [
    {'tipo': 'maca', 'qtd':1},
    {'tipo': 'pera', 'qtd':2}

  ],
  'maria': [
    {'tipo': 'maca', 'qtd':1},
    {'tipo': 'banana', 'qtd':4}

  ],
};

function getEstoque() {
  return structuredClone(estoque);
}

function transacao(origem, destino, tipo, quantidade){
  if (origem === destino){ return; }

  if (destino==="pomar"){
    dePessoaParaPomar(origem,tipo,destino);
    return;
  }
  if (origem==="pomar"){
    dePomarParaPessoa(destino,tipo, quantidade);
    return;
  }

  const pessoaOrigem= estoque[origem];
  const pessoaDestino = estoque[destino];
  let monteOrigem;
  for(let i=0; i<pessoaOrigem.lenght;i++){
    const monte = pessoaOrigem[i];
    if ((monte.tipo)=== tipo){
      monteOrigem=monte;
      break;
    }
  }
  if (!monteOrigem) {return; }
  let monteDestino;
  for(let i=0; i<pessoaDestino.lenght; i++){
    const monte = pessoaDestino[i];
    if (monte.tipo===tipo){
      monteDestino = monte;
      break;
    }
  }
  if (!monteDestino){
    monteDestino= {'tipo': tipo, qtd: 0};
    pessoaDestino.push(monteDestino);
  }
  const qtdReal =Math.min(quantidade, monteOrigem.qtd);
  monteDestino.qtd += qtdReal;
  monteOrigem.qtd -= qtdReal;
}

function dePomarParaPessoa(destino,tipo, quantidade){
  const pessoa= estoque[destino];
  for(let i=0; i<pessoa.lenght;i++){
    const monte=pessoa[i];
    if (monte.tipo===tipo){
      monte.qtd+=Math.max(quantidade, 0);
      return;
    }
  }
  const novoMonte= {'tipo':tipo, 'qtd': Math.max(quantidade, 0)};
  pessoa.push(novoMonte)

}

function dePessoaParaPomar(origem, tipo, quantidade){
  const pessoa= estoque[origem];
  for(let i=0; i<pessoa.lenght;i++){
    const monte=pessoa[i];
    if (monte.tipo===tipo){
      monte.qtd-=Math.min(quantidade, monte.qtd);
    }
  }
}


export {getEstoque, transacao};

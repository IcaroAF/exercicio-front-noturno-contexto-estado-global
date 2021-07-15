import { useState } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export default function App() {
  const [carrinho, setCarrinho] = useState({});
  // const incrementarCarrinho = (id, qtd) =>
  //   setCarrinho((carrinho) => {
  //     const novoCarrinho = { ...carrinho };
  //     novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

  //     if (novoCarrinho[id] === 0) {
  //       delete novoCarrinho[id];
  //     }

  //     return novoCarrinho;
  //   });

  const adicionarAoCarrinho = (id) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + 1;

      return novoCarrinho;
    });

  const mudarQtdNoCarrinho = (id, qtd) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });

  const removerDoCarrinho = (id) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };

      delete novoCarrinho[id];

      return novoCarrinho;
    });

  return (
    <div className="App">
      <Cabecalho
        carrinho={carrinho}
        produtos={produtos}
        mudarQtdNoCarrinho={mudarQtdNoCarrinho}
        removerDoCarrinho={removerDoCarrinho}
      />
      <Produtos
        produtos={produtos}
        carrinho={carrinho}
        adicionarCarrinho={(id) => adicionarAoCarrinho(id)}
      />
    </div>
  );
}

import { useState, createContext } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const ContextoDoCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});

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

  const valorPassadoPeloContexto = {
    carrinho,
    produtos,
    adicionarAoCarrinho,
    mudarQtdNoCarrinho,
    removerDoCarrinho,
  };

  return (
    <ContextoDoCarrinho.Provider value={valorPassadoPeloContexto}>
      <div className="App">
        <Cabecalho />
        <Produtos />
      </div>
    </ContextoDoCarrinho.Provider>
  );
}

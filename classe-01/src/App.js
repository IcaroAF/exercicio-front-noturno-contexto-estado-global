import { createContext, useState } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const ContextoDoCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});

  const incrementarCarrinho = (id, qtd) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });

  const valorPassadoPeloContexto = { carrinho, produtos, incrementarCarrinho };

  return (
    <ContextoDoCarrinho.Provider value={valorPassadoPeloContexto}>
      <div className="App">
        <Cabecalho />
        <Produtos />
      </div>
    </ContextoDoCarrinho.Provider>
  );
}

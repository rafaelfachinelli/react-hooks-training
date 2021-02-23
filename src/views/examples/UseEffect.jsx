import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(number) {
  number = parseInt(number);
  if (number < 0) return -1;
  if (number === 0) return 1;
  return calcFatorial(number - 1) * number;
}

function isNumberPair(number) {
  return number % 2 === 0;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [isPair, setIsPair] = useState();

  useEffect(() => {
    setFatorial(calcFatorial(number));
    setIsPair(isNumberPair(number));
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">Status: </span>
        <span className="text red">{isPair ? "Par" : "Ímpar"}</span>
      </div>
    </div>
  );
};

export default UseEffect;

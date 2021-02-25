import React, { useState, useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload.name } };
    case "numberMultBy7":
      return { ...state, number: state.number * 7 };
    case "numberDivideBy25":
      return { ...state, number: state.number / 25 };
    case "numberParseInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + action.payload.number };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState(0);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: "login", payload: { name: "Rafael" } })
            }
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMultBy7" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberDivideBy25" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberParseInt" })}
          >
            parseInt
          </button>
          <input
            type="number"
            className="input"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            className="btn"
            onClick={() =>
              dispatch({
                type: "numberAddN",
                payload: { number: parseInt(number) }
              })
            }
          >
            +{number}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;

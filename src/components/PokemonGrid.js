import React from "react";

function PokemonGrid(props) {
  const { pokemons } = props;

  return (
    <div className="pokemon-grid">
      {/* 
                INSTRUCTION: 
                if pokemons data is available, display the pokemons in a 3-columns grid. 
                You may use the css class "pokemon-card" to style each pokemon card.
                if not, display a "No pokemons found." message 
            */}
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card">
            <h3>{pokemon.name}</h3>
            <div>Type: {pokemon.type}</div>
            <div>Level: {pokemon.level}</div>
          </div>
        ))
      ) : (
        <h1>No Pokemons Found</h1>
      )}
    </div>
  );
}

export default PokemonGrid;

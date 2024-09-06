import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard:Component<Props> = ({pokemon}) => {
    const  [isVisible, setIsVisible] = createSignal(true);  
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    
    const deleteFavoritePokemon = () => {
        const favoritePokemons = JSON.parse(localStorage.getItem("favoritePokemons") ?? "[]") as FavoritePokemon[];

        const newFavoritePokemons = favoritePokemons.filter((p) => p.id !== pokemon.id);

        localStorage.setItem("favoritePokemons", JSON.stringify(newFavoritePokemons));
        setIsVisible(false);
    };

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img 
                        src={imgSrc}
                        alt={pokemon.name} 
                        width="96" 
                        height="96"
                        style={`view-transition-name: ${pokemon.name}-image`}
                     />
                    <p class="capitalize">#{pokemon.id} - {pokemon.name}</p>
                </a>
                <button class="text-red-400" onClick={deleteFavoritePokemon}>Delete</button>
            </div>
        </Show>
    );
}
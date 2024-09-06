import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For, type Component } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = ():FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem("favoritePokemons") ?? "[]");

    return favoritePokemons;
}    

export const FavoritePokemonsList: Component = () => {

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4" >
            <For each={pokemons()}>
                {(pokemon) => <FavoritePokemonCard pokemon={pokemon}/>}
            </For>
        </div>
    );
};
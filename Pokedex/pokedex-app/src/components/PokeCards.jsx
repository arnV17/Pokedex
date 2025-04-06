import { useEffect, useState } from "react";

export function PokeCards({ pokenum }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return; // Avoid errors in SSR

        let cache = {};

        try {
            const storedPokedex = localStorage.getItem("pokedex");
            if (storedPokedex) {
                cache = JSON.parse(storedPokedex);
            }
        } catch (error) {
            console.error("Error accessing localStorage:", error);
        }

        if (cache[pokenum]) {
            setData(cache[pokenum]);
            console.log("Found Pokémon in cache");
            return;
        }

        async function fetchPokemonData() {
            setLoading(true);
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokenum}`);
                const pokemonData = await res.json();
                setData(pokemonData);

                // Update cache
                cache[pokenum] = pokemonData;
                localStorage.setItem("pokedex", JSON.stringify(cache));
            } catch (err) {
                console.error("Error fetching Pokémon data:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemonData();
    }, [pokenum]);

    if (loading) return <h2>Loading Pokémon...</h2>;
    if (!data) return <h2>No Pokémon data available</h2>;

    return (
        <div className="poke-card">
            <h2>Pokedex: #{pokenum}</h2>
            <img src={data.sprites?.front_default} alt={data.name} />
            <h2>{data.name}</h2>
            {data.moves?.length > 0 ? (
                data.moves.map((move, index) => (
                    <button key={index}>{move.move.name}</button>
                ))
            ) : (
                <p>No moves available</p>
            )}
        </div>
    );
}

export default PokeCards;

async function fetchData() {
    try {
        const pokemonName: string = (document.getElementById("pokemonName") as HTMLInputElement).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch any data.");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite") as HTMLImageElement;
        const pokemonHeight = data.height;
        const pHeight = document.getElementById("pokemonHeight");
        const pokemonWeight = data.weight;
        const pWeight = document.getElementById("pokemonWeight");
        const pokemonTypes = data.types;
        const pTypes = document.getElementById("pokemonTypes");

        if (imgElement && pHeight && pWeight && pTypes) {

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";

            pHeight.innerText = "Height: " + pokemonHeight;
            pHeight.style.display = "block";

            pWeight.innerText = "Weight: " + pokemonWeight;
            pWeight.style.display = "block";

            pTypes.innerText = "Types: ";

            pokemonTypes.forEach((types: { type: { name: string } }) => {
                pTypes.innerText += " " + types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1) + ". ";
            });

            pTypes.style.display = "block";
        }

    } catch (error) {
        console.log(error);
    }
}
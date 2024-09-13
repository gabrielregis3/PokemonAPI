"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            if (!response.ok) {
                throw new Error("Could not fetch any data.");
            }
            const data = yield response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
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
                pokemonTypes.forEach((types) => {
                    pTypes.innerText += " " + types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1) + ". ";
                });
                pTypes.style.display = "block";
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}

import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/pokemon';
import { PokemonService } from '../shared/pokemon.service';


@Component({
	moduleId: module.id,
	selector: "pk-list",
	templateUrl: "list-pokemon.template.html"
})

export class ListPokemonComponent implements OnInit {
	pokemon: Pokemon[];
	errorMessage: string;


	constructor(private _pokemonService: PokemonService) {}
	ngOnInit() {
		//get all pokemon
		this.getPokemon();
	}

	getPokemon() {
		this._pokemonService.getPokemons()
			.subscribe(
				(pokemon: Pokemon[]) => {
					console.log(pokemon);
					this.pokemon = pokemon
				},
				error => this.errorMessage = error
			)
	}
}
import React, { Component } from 'react';
import Pokedex from './Pokedex';

export default class Pokegame extends Component {
	static defaultProps = {
		pokemons: [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};

	render() {
		let deck1 = [];
		let deck2 = [...this.props.pokemons];

		while (deck1.length < deck2.length) {
			const randomIndex = Math.floor(Math.random() * deck2.length);
			deck1.push(deck2[randomIndex]);
			deck2.splice(randomIndex, 1);
		}

		const exp1 = deck1.reduce((exp, current) => {
			return exp + current.base_experience;
		}, 0);

		const exp2 = deck2.reduce((exp, current) => {
			return exp + current.base_experience;
		}, 0);

		return (
			<div>
				<Pokedex pokemons={deck1} exp={exp1} isWinner={exp1 > exp2} />
				<Pokedex pokemons={deck2} exp={exp2} isWinner={exp2 > exp1} />
			</div>
		);
	}
}

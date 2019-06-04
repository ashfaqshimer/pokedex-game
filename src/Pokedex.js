import React, { Component } from 'react';

import './Pokedex.css';
import Pokecard from './Pokecard';

export default class Pokedex extends Component {
	render() {
		const { pokemons, exp, isWinner } = this.props;

		return (
			<div className='Pokedex'>
				<h1 className='Pokedex-title'>Pokedex</h1>
				<p>Total Exp = {exp}</p>
				{pokemons.map(pokemon => {
					return (
						<Pokecard
							key={Math.random()}
							id={pokemon.id}
							name={pokemon.name}
							type={pokemon.type}
							exp={pokemon.base_experience}
						/>
					);
				})}
				{isWinner ? (
					<h1 className='Pokedex-winner'>You win!</h1>
				) : (
					<h1 className='Pokedex-loser'>You lose!</h1>
				)}
			</div>
		);
	}
}

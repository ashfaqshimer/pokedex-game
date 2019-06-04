import React, { Component } from 'react';

import './Pokecard.css';

export default class Pokecard extends Component {
	render() {
		const { name, id, type, exp } = this.props;
		// const imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
		const imgurl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

		let stringId = String(id);

		switch (stringId.length) {
			case 1:
				stringId = `00${id}`;
				break;
			case 2:
				stringId = `0${id}`;
				break;
			default:
				stringId = id;
		}

		return (
			<div className='Pokecard'>
				<h3>{name}</h3>
				<img src={`${imgurl}${stringId}.png`} alt={name} />
				<div className='Pokecard-stats'>
					<p>Type: {type} </p>
					<p>EXP: {exp} </p>
				</div>
			</div>
		);
	}
}

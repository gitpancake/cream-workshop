import { wallet } from '../wallet';
import { connect4Contract } from '../contract';
import { BigNumber } from 'ethers';

export async function getMyActiveGames(): Promise<number[]> {
	const games: BigNumber[] = await connect4Contract.getActiveGamesIds();

	const mappedGames = games.map((game) => game.toNumber());

	return mappedGames;
}

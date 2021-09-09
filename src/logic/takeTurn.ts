import { wallet } from '../wallet';
import { connect4Contract } from '../contract';
import { utils } from 'ethers';

/* TODO: Bet prop has to be a bignumber.
Take a look to the ethers.js documentation to type it correctly. */
export async function takeTurn(
	gameId: number,
	columnId: number,
	bet: number,
): Promise<void> {
	await connect4Contract.takeTurn(gameId, columnId, {
		value: utils.parseEther(bet.toString()),
	});
}

import { wallet } from '../wallet';
import { connect4Contract } from '../contract';

export async function newGame(address: string): Promise<void> {
	await connect4Contract.newGame(address);
	console.log('Created new game...');
}

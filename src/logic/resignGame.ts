import { wallet } from '../wallet';
import { connect4Contract } from '../contract';

export async function resignGame(gameId: number): Promise<void> {
	await connect4Contract.resignGame(gameId);
}

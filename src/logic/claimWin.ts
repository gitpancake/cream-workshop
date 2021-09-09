import { wallet } from '../wallet';
import { connect4Contract } from '../contract';

export async function claimWin(gameId: number): Promise<void> {
	await connect4Contract.claimWin(gameId);
}

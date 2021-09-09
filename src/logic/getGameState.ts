import { wallet } from '../wallet';
import { connect4Contract } from '../contract';

export async function getGameState(gameId: number): Promise<number[][]> {
	const gameState = await connect4Contract.getBoard(gameId);

	return gameState;
}

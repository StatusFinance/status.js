import { Coin } from "./coin";
import { Action } from "./transactions";

export interface ActionBitcoinTransferOut extends Action {
  to: string;
  amount: number
  value?: number;
  coin?: Coin
}
  
export interface ActionBitcoinTransferIn extends Action {
  to: string;
  amount: number
  value?: number;
  coin?: Coin
}

export interface ActionBitcoinReward extends Action {
  coin?: Coin
}

export enum BitcoinActionsType {
  SEND_IN = 'send-in',
  SEND_OUT = 'send-out',
  REWARD = "reward"
}

export type BitcoinAction = ActionBitcoinTransferOut | ActionBitcoinTransferIn | ActionBitcoinReward

export interface BitcoinTransactionDetails {
  hash: string;
  blockNumber: number;
  confirmations: number;
  actions: BitcoinAction[];
  amount: number
  value?: number;
  fee: {
    amount: number;
    value: number;
    rate: number;
    coin: Coin;
  };
}

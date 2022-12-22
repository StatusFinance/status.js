import { BitcoinActionsType, BitcoinTransactionDetails } from "./bitcoin";
import { EVMActionsType, EVMTransactionDetails } from "./evm";

export enum Chain {
  BITCOIN = 'bitcoin',
  ETHEREUM = 'ethereum',
  BSC = 'bsc',
  AVAX_C = 'avax-c',
  POLYGON = 'polygon',
}

export enum TransactionStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
  NOT_FOUND = 'not_found',
}

export interface Action {
  type: EVMActionsType | BitcoinActionsType
}

export type TransactionData = EVMTransactionDetails | BitcoinTransactionDetails;

export type Transaction = {
  hash: string;
  status: TransactionStatus;
  data?: TransactionData;
};

export type TransactionOptions = {
  hash: string;
  chain: Chain | string;
};
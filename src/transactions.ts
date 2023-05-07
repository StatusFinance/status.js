import { APIOptions } from "./api";
import { BitcoinActionsType, BitcoinTransactionDetails } from "./bitcoin";
import { EVMActionsType, EVMTransactionDetails } from "./evm";

export async function getTransaction(apiOptions: APIOptions, options: TransactionOptions): Promise<Transaction> {
  if (!options.hash) throw new Error('Transaction hash is required');
  if (!options.chain) throw new Error('Chain is required');

  const baseUrl = apiOptions.apiBaseUrl || 'https://api.status.finance';
  const apiKey = apiOptions.apiKey || false;

  const url = `${baseUrl}/transactions?${new URLSearchParams(options)}`;

  const request = new Request(url, { method: 'GET', headers: apiKey ? { 'x-api-key': apiKey } : {} });

  const response = await fetch(request);
  const responseBody = await response.json();

  if (!response.ok) {
      const errorMessage = Array.isArray(responseBody.message) ? responseBody.message.join(', ') : responseBody.message;
      throw new Error(errorMessage);
  }

  return responseBody;
}

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
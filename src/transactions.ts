import { APIOptions } from "./types/api";
import { Transaction, TransactionOptions } from "./types/transactions";

async function getTransaction(apiOptions: APIOptions, options: TransactionOptions): Promise<Transaction> {
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

export { getTransaction }

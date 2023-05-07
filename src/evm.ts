import { Coin } from "./coin"
import { Action, Chain } from "./transactions"

export const EVMChains = [
  Chain.ETHEREUM,
  Chain.BSC,
  Chain.AVAX_C,
  Chain.POLYGON,
]

export interface ERC20Token {
  amount: number;
  tokenAddress: string;
  decimals: number;
  value?: number;
  coin?: Coin;
}

export interface ActionArgentRecoveryExecuted extends Action {
  wallet: string
  recovery: string
  executeAfter: Date
}

export interface ActionCompoundFinanceMint extends Action {
  from: string
  fromToken: ERC20Token
  toToken: ERC20Token
}

export interface ActionCompoundFinanceRedeem extends Action {
  from: string
  fromToken: ERC20Token
  toToken: ERC20Token
}

export interface ActionERC721Transfer extends Action {
  from: string
  to: string
  tokenId: number
  tokenAddress: string
  name?: string;
}

export interface ActionERC721Mint extends Action {
  to: string
  tokenId: number
  tokenAddress: string
  name?: string;
}

export interface ActionERC721Burn extends Action {
  from: string
  tokenId: number
  tokenAddress: string
  name?: string;
}

export interface ActionERC721ApprovalAll extends Action {
  owner: string
  spender: string
  approved: boolean
  tokenAddress: string
  name?: string;
}

export interface ActionERC721Approval extends Action {
  owner: string
  spender: string
  tokenId: number
  tokenAddress: string
  name?: string;
}

export interface ActionERC20Approval extends Action {
  owner: string
  spender: string
  tokenAddress: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionERC20Transfer extends Action {
  from: string
  to: string
  tokenAddress: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionERC20Mint extends Action {
  to: string
  tokenAddress: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionERC20Burn extends Action {
  from: string
  tokenAddress: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionWETHWithdraw extends Action {
  from: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionWETHDeposit extends Action {
  from: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionEVMTransfer extends Action {
  to: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionUniswapV2Swap extends Action {
  from: string
  receipient: string
  fromToken: ERC20Token
  toToken: ERC20Token
}

export interface ActionUniswapV2LiquidityAdd extends Action {
  token0: {
    amount: number
    tokenAddress: string
    value?: number
    coin?: Coin
  }
  token1: {
    amount: number
    tokenAddress: string
    value?: number
    coin?: Coin
  }
}

export interface ActionUniswapV2LiquidityRemove extends Action {
  token0: {
    amount: number
    tokenAddress: string
    value?: number
    coin?: Coin
  }
  token1: {
    amount: number
    tokenAddress: string
    value?: number
    coin?: Coin
  }
}

export interface ActionSeaportOrderCancelled extends Action {
  orderHash: string
  offerer: string
  zone: string
}

export interface ActionSeaportOrderExecuted extends Action {
  orderHash: string
  buyer: string
  seller: string
  zone: string
  items: SeaportItem[]
  payouts: SeaportPayout[]
}

export interface SeaportItem {
  itemType: number
  token: string
  identifier: number
  name?: string
  amount?: number
}

export interface SeaportPayout {
  // itemType: number
  token: string
  receipient: string
  amount: number
  value?: number
  coin?: Coin
}

export interface ActionUniswapV3Swap extends Action {
  from: string
  receipient: string
  fromToken: ERC20Token
  toToken: ERC20Token
}

export interface ActionUniswapUniversalRouterSwap extends Action {
  from: string
  receipient: string
  fromToken: ERC20Token
  toToken: ERC20Token
}

export interface ActionUniswapV3LiquidityAdd extends Action {
  liquidity: number;
  token0: ERC20Token
  token1: ERC20Token;
}

export interface ActionUniswapV3LiquidityRemove extends Action {
  liquidity: number;
  token0: ERC20Token
  token1: ERC20Token;
}

export interface ActionENSRegister extends Action {
  owner: string
  name: string
  expires: Date
  cost: number
  value?: number
  coin?: Coin
}

export interface ActionENSRenew {
  type: EVMActionsType.ENS_RENEW
  name: string
  expires: Date
  cost: number
  value: number
  coin: any
}

export type EVMActions = ActionSeaportOrderCancelled | ActionArgentRecoveryExecuted | ActionCompoundFinanceMint | ActionENSRegister| ActionENSRenew | ActionERC20Approval | ActionERC721ApprovalAll | ActionERC721Approval | ActionERC721Transfer | ActionERC721Mint | ActionERC721Burn | ActionERC20Transfer | ActionERC20Mint | ActionERC20Burn | ActionEVMTransfer | ActionUniswapV2Swap | ActionUniswapUniversalRouterSwap | ActionUniswapV2LiquidityAdd | ActionUniswapV2LiquidityRemove | ActionUniswapV3Swap | ActionUniswapV3LiquidityAdd | ActionUniswapV3LiquidityRemove | ActionWETHWithdraw

export enum EVMActionsType {
  SEND = 'send',
  ERC20_APPROVAL = 'erc20-approval',
  ERC20_TRANSFER = 'erc20-transfer',
  ERC20_MINT = 'erc20-mint',
  ERC20_BURN = 'erc20-burn',
  UNISWAP_UNIVERSAL_ROUTER_SWAP = 'uniswap-universal-router-swap',
  UNISWAP_V2_SWAP = 'uniswap-v2-swap',
  UNISWAP_V2_LIQUIDITY_ADD = 'uniswap-v2-liquidity-add',
  UNISWAP_V2_LIQUIDITY_REMOVE = 'uniswap-v2-liquidity-remove',
  UNISWAP_V3_SWAP = 'uniswap-v3-swap',
  UNISWAP_V3_LIQUIDITY_ADD = 'uniswap-v3-liquidity-add',
  UNISWAP_V3_LIQUIDITY_REMOVE = 'uniswap-v3-liquidity-remove',
  PANCAKESWAP_SWAP = 'pancakeswap-v2-swap',
  SUSHISWAP_V2_SWAP = 'sushiswap-v2-swap',
  WETH_WITHDRAWAL = 'weth-withdrawal',
  WETH_DEPOSIT = 'weth-deposit',
  ERC721_TRANSFER = 'erc721-transfer',
  ERC721_APPROVAL_FOR_ALL = 'erc721-approval-for-all',
  ERC721_APPROVAL = 'erc721-approval',
  ERC721_MINT = 'erc721-mint',
  ERC721_BURN = 'erc721-burn',
  ENS_REGISTER = 'ens-register',
  ENS_TRANSFER = 'ens-transfer',
  ENS_RENEW = 'ens-renew',
  COMPOUND_FINANCE_MINT = 'compound-finance-mint',
  COMPOUND_FINANCE_REDEEM = 'compound-finance-redeem',
  ARGENT_RECOVERY_EXECUTED = 'argent-recovery-executed',
  SEAPORT_ORDER_CANCELLED = 'seaport-order-cancelled',
  SEAPORT_ORDER_EXECUTED = 'seaport-order-executed',
}

export interface EVMTransactionDetails {
  hash: string;
  blockNumber: number;
  confirmations: number;
  from: string;
  to: string;
  actions: EVMActions[];
  reason?: string;
  fee: {
      amount: number;
      value: number;
      coin: Coin;
  };
}

export interface EVMLog {
  blockNumber: number;
  blockHash: string;
  transactionIndex: number;

  removed: boolean;

  address: string;
  data: string;

  topics: Array<string>;

  transactionHash: string;
  logIndex: number;
}
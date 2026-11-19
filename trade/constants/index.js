export const defaultCountryName = 'United Kingdom';
export const unitedNations = 'un';
export const referralKey = 'referral';

export const COOKIE_EXPIRATION_TIME = 600000;

const CURRENCY_USD = 'USD';
const CURRENCY_EUR = 'EUR';
const CURRENCY_GBP = 'GBP';

export const defaultCurrency = CURRENCY_GBP;
export const currencyMapper = {
  [CURRENCY_GBP]: '£',
  [CURRENCY_USD]: '$',
  [CURRENCY_EUR]: '€',
};

export const currencyList = Object.entries(currencyMapper).map(([key, value]) => ({ currency: key, symbol: value }));

export const API_URL = process.env.NUXT_ENV_API_URL
  ? process.env.NUXT_ENV_API_URL.replace(new RegExp('"', 'g'), '')
  : 'http://app.example.com';

export const SITE_URL = process.env.NUXT_ENV_SITE_URL
  ? process.env.NUXT_ENV_SITE_URL.replace(new RegExp('"', 'g'), '')
  : 'http://example.com';

/**
 * ORDER IMPORTANT
 * SAME ORDER SHOULD BE IN FRONTEND AND BACKEND
 */
export const DEPOSIT_CRYPTO_ID = 0;
export const DEPOSIT_BANK_ID = 1;
export const DEPOSIT_CARD_ID = 2;
export const DEPOSIT_CASH_ID = 3;
export const DEPOSIT_METHODS = [
  { id: DEPOSIT_CRYPTO_ID, model: `App\Models\CryptoDeposit`, label: 'Blockchain', name: 'crypto' },
  { id: DEPOSIT_BANK_ID, model: `App\Models\WireTransfer`, label: 'Bank Transfer', name: 'bank transfer' },
  { id: DEPOSIT_CARD_ID, model: `App\Models\CreditCard`, label: 'Credit Card', name: 'card' },
];

/**
 * ORDER IMPORTANT
 * SAME ORDER SHOULD BE IN FRONTEND AND BACKEND
 */
export const WITHDRAW_CRYPTO_ID = 0;
export const WITHDRAW_BANK_ID = 1;
export const WITHDRAW_CASH_ID = 2;
export const WITHDRAW_METHODS = [
  { id: WITHDRAW_CRYPTO_ID, model: `App\Models\CryptoWithdraw`, label: 'Blockchain', name: 'crypto' },
  { id: WITHDRAW_BANK_ID, model: `App\Models\BankTransfer`, label: 'Bank Transfer', name: 'bank_transfer' },
];

export const SUPPORT = 0;
export const SUPPORT_METHODS = [{ id: SUPPORT, model: ``, label: 'Support', name: 'support' }];

export const STATUS_CREATED = 'created';
export const STATUS_CONFIRMING = 'confirming';
export const STATUS_COMPLETED = 'completed';
export const STATUS_REJECTED = 'rejected';
export const STATUS_DELETED = 'deleted';
export const STATUS_FAILED = 'failed';

export const DEPOSIT_KEY = 'deposit';
export const WITHDRAW_KEY = 'withdraw';
export const SUPPORT_KEY = 'support';
export const defaultFaqData = { [DEPOSIT_KEY]: {}, [WITHDRAW_KEY]: {}, [SUPPORT_KEY]: {} };
export const methodsFaq = {
  [DEPOSIT_KEY]: DEPOSIT_METHODS,
  [WITHDRAW_KEY]: WITHDRAW_METHODS,
  [SUPPORT_KEY]: SUPPORT_METHODS,
};
export const defaultFaqEntity = { id: 0, category: '', subcategory: -1, title: '', description: '' };
export const defaultFaqList = Array(3)
  .fill()
  .map(() => ({ ...defaultFaqEntity }));

export const statusMapper = {
  [STATUS_CREATED]: 'Pending',
  [STATUS_REJECTED]: 'Canceled',
  [STATUS_COMPLETED]: 'Completed',
  [STATUS_CONFIRMING]: 'In Process',
  [STATUS_DELETED]: 'Deleted',
  [STATUS_FAILED]: 'Failed',
};

export const DEPOSIT_PATH = 'deposit';
export const WITHDRAW_PATH = 'withdraw';
export const KYC_PATH = 'kyc';

export const VISIT_URS = [DEPOSIT_PATH];

export const COIN_BTC = 'BTC';
export const COIN_USDT = 'USDT';
export const COIN_ETH = 'ETH';

export const KYC_YES = 'YES';
export const KYC_NO = 'NO';
export const KYC_VERIFICATION = 'VERIFICATION';
export const KYC_PARTIAL = 'PARTIAL';

export const KYCEnum = {
  [KYC_PARTIAL]: 'Partial',
  [KYC_VERIFICATION]: 'In process',
  [KYC_YES]: 'Verified',
  [KYC_NO]: 'Pending',
};

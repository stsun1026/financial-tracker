import {
  RAPID_API_KEY_KEY,
  RAPID_API_HOST_KEY,
} from '../rapid-api-constants';
import { RAPID_API_HOST_VALUE } from './yahoo-finance-constants';

const rapidApiKeyHeader = {
  [RAPID_API_KEY_KEY]: process.env.RAPID_API_KEY
}

export const yahooFinanceHeader = {
  ...rapidApiKeyHeader,
  [RAPID_API_HOST_KEY]: RAPID_API_HOST_VALUE,
}

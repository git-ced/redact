import { english as engSexual } from './sexual/english';
import { english as engProfanity } from './profanity/english';
import { filipino as filSexual } from './sexual/filipino';
import { filipino as filProfanity } from './profanity/filipino';

interface IListLanguage {
  profanity: string[];
  sexual: string[];
}

interface IList {
  english: IListLanguage;
  filipino: IListLanguage;
}

/**
 * List of all built in blacklisted words.
 */
export const list: IList = {
  english: {
    profanity: engProfanity,
    sexual: engSexual
  },
  filipino: {
    profanity: filProfanity,
    sexual: filSexual
  },
};
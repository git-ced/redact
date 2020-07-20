import { isBlacklisted, blacklist } from '../../src/index';

import { english as englishProfanity } from './../../src/lists/profanity/english';
import { english as englishSexual } from './../../src/lists/sexual/english';

const blacklistedWords = blacklist(...englishProfanity, ...englishSexual);

describe('Is Blacklisted', () => {
  it('English Profanity isBlacklisted', () => {
    expect(isBlacklisted('Fuck yeah men', blacklistedWords))
      .toEqual(true);
  });
  it('English Profanity isBlacklisted 2', () => {
    expect(isBlacklisted('Good job men', blacklistedWords))
      .toEqual(false);
  });
});

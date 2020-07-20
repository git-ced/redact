import { blacklistCount, blacklist } from '../../src/index';

import { english as englishProfanity } from './../../src/lists/profanity/english';
import { english as englishSexual } from './../../src/lists/sexual/english';

const blacklistedWords = blacklist(...englishProfanity, ...englishSexual);

describe('Blacklist Count', () => {
  it('English Profanity blacklistCount', () => {
    expect(blacklistCount('Fuck yeah men', blacklistedWords))
      .toEqual(1);
  });
  it('English Profanity blacklistCount 2', () => {
    expect(blacklistCount('Fuck fuck FUCK yeah men', blacklistedWords))
      .toEqual(3);
  });
  it('English Profanity blacklistCount 3', () => {
    expect(blacklistCount('Good job men', blacklistedWords))
      .toEqual(0);
  });
});

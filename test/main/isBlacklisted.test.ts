import { isBlacklisted, blacklist, list } from '../../src/index';

const blacklistedWords = blacklist(...list.english.profanity, ...list.english.sexual);

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

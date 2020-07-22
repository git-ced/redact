import { blacklistCount, blacklist, list } from '../../src/index';

const blacklistedWords = blacklist(...list.english.profanity, ...list.english.sexual);

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

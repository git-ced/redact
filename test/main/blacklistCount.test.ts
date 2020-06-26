import { blacklistCount } from '../../src/index';
import { english } from '../../src/lists/profanity/english';

describe('Blacklist Count', () => {
  it('English Profanity blacklistCount', () => {
    expect(blacklistCount('Fuck yeah men', english))
      .toEqual(1);
  });
  it('English Profanity blacklistCount 2', () => {
    expect(blacklistCount('Fuck fuck FUCK yeah men', english))
      .toEqual(3);
  });
  it('English Profanity blacklistCount 3', () => {
    expect(blacklistCount('Good job men', english))
      .toEqual(0);
  });
});

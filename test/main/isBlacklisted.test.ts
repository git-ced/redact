import { isBlacklisted } from '../../src/index';
import { english } from '../../src/lists/profanity/english';

describe('Is Blacklisted', () => {
  it('English Profanity isBlacklisted', () => {
    expect(isBlacklisted('Fuck yeah men', english))
      .toEqual(true);
  });
  it('English Profanity isBlacklisted 2', () => {
    expect(isBlacklisted('Good job men', english))
      .toEqual(false);
  });
});

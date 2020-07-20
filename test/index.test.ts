import { isBlacklisted, blacklistCount, blacklist } from './../src/index';

import { english as englishProfanity } from './../src/lists/profanity/english';
import { english as englishSexual } from './../src/lists/sexual/english';

import { redact } from '../src';

const blacklistedWords = blacklist(...englishProfanity, ...englishSexual)

describe('Main Test', () => {
  it('English Profanity Filter', () => {
    expect(redact('Fuck yeah men', blacklistedWords))
      .toEqual('**** yeah men');
  });
  it('English Profanity Filter Options 1', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      grawlix: '$',
    }))
      .toEqual('$$$$ yeah men');
  });
  it('English Profanity Filter Options 2', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      replaceByLength: false,
    }))
      .toEqual('* yeah men');
  });
  it('English Profanity Filter Options 3', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      caseSensitive: true,
    }))
      .toEqual('Fuck yeah men');
  });
  it('English Profanity Filter Options 4', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      replaceByLength: false,
      grawlix: 'Nice'
    }))
      .toEqual('Nice yeah men');
  });
  it('English Profanity isBlacklisted', () => {
    expect(isBlacklisted('Fuck yeah men', blacklistedWords))
      .toEqual(true);
  });
  it('English Profanity isBlacklisted 2', () => {
    expect(isBlacklisted('Good job men', blacklistedWords))
      .toEqual(false);
  });
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

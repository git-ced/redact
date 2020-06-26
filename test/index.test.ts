import { isBlacklisted, blacklistCount } from './../src/index';
import { english } from './../src/lists/profanity/english';
import { redact } from '../src';

describe('Main Test', () => {
  it('English Profanity Filter', () => {
    expect(redact('Fuck yeah men', english))
      .toEqual('**** yeah men');
  });
  it('English Profanity Filter Options 1', () => {
    expect(redact('Fuck yeah men', english, {
      grawlix: '$',
    }))
      .toEqual('$$$$ yeah men');
  });
  it('English Profanity Filter Options 2', () => {
    expect(redact('Fuck yeah men', english, {
      replaceByLength: false,
    }))
      .toEqual('* yeah men');
  });
  it('English Profanity Filter Options 3', () => {
    expect(redact('Fuck yeah men', english, {
      caseSensitive: true,
    }))
      .toEqual('Fuck yeah men');
  });
  it('English Profanity Filter Options 4', () => {
    expect(redact('Fuck yeah men', english, {
      replaceByLength: false,
      grawlix: 'Nice'
    }))
      .toEqual('Nice yeah men');
  });
  it('English Profanity isBlacklisted', () => {
    expect(isBlacklisted('Fuck yeah men', english))
      .toEqual(true);
  });
  it('English Profanity isBlacklisted 2', () => {
    expect(isBlacklisted('Good job men', english))
      .toEqual(false);
  });
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

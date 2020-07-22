import { redact, blacklist, list } from './../../src/index';

const blacklistedWords = blacklist(...list.english.profanity, ...list.english.sexual);

describe('Redact', () => {
  it('English Profanity Redact', () => {
    expect(redact('Fuck yeah men', blacklistedWords))
      .toEqual('**** yeah men');
  });
  it('English Profanity Redact Options 1', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      grawlix: '$',
    }))
      .toEqual('$$$$ yeah men');
  });
  it('English Profanity Redact Options 2', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      replaceByLength: false,
    }))
      .toEqual('* yeah men');
  });
  it('English Profanity Redact Options 3', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      caseSensitive: true,
    }))
      .toEqual('Fuck yeah men');
  });
  it('English Profanity Redact Options 4', () => {
    expect(redact('Fuck yeah men', blacklistedWords, {
      replaceByLength: false,
      grawlix: 'Nice'
    }))
      .toEqual('Nice yeah men');
  });
});

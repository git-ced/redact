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
});

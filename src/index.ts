const uniqueOnly = (arr: string[]) => (
  arr.filter((v, i, a) => a.indexOf(v) === i)
)

/**
 * Returns a distinct values for all the blacklisted words given
 *
 * @param {Array<string>} args Word to be blacklisted.
 */
export const blacklist = (...args: string[]) => uniqueOnly(args);

/**
 * Filters the blacklist to allow some given words
 *
 * @param {Array<string>} blacklist Blacklisted words.
 * @param {Array<string>} args Word to be whitelisted.
 */
export const whitelist = (blacklist: string[], ...args: string[]) => uniqueOnly(blacklist.filter((b) => !args.includes(b)));

/**
 * Evaluate a string if its in the blacklist and
 * return an edited version.
 *
 * @param {string} string - Sentence to filter.
 * @param {Array<string>} blacklist Blacklisted words.
 */
export const redact = (string: string, blacklist: string[]) => { };

/**
 * Returns if the sentence has a blacklisted word
 *
 * @param {string} string - Sentence to lookup.
 */
export const isBlacklisted = () => { };

/**
 * Returns the count of blacklisted words in the sentence
 *
 * @param {string} string - Sentence to lookup.
 */
export const blacklistCount = () => { };

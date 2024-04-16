/*
 * Remove prefix country code for Vietnamese phone number
 * Input:
 *   +84785288888
 *   +840785288888
 *   84785288888
 *   840785288888
 * Output:
 *   0785288888
 */

export const removePhoneCountryPrefix = (phoneNumber: string): string => {
  return phoneNumber.replace(/^(\+840|\+84|840|84)/, '0');
};

// https://gist.github.com/tungvn/2460c5ba947e5cbe6606c5e85249cf04
export const isVietnamesePhoneNumber = (phoneNumber: string): boolean => {
  return /^(03|05|07|08|09)+([0-9]{8})\b/.test(removePhoneCountryPrefix(phoneNumber));
};

// https://newbedev.com/regex-to-disallow-more-than-1-dash-consecutively
/*
 * (\s+)? Allow zero or more Spaces start of line
 * (\+)?  Allow zero or one +
 * (?!.*--) Assert that there are no -- present anywhere
 * [0-9]+(?:-[0-9]+)* Allow start with first Numbers and allow any Number and one - and Assert that the last one isn't a -
 * (\s+) Allow zero or more Spaces end of line
 */

export const isPhoneNumber = (phoneNumber: string): boolean => {
  return /^(\s+)?(\+)?(?!.*--)[0-9]+(?:-[0-9]+)*(\s+)?$/.test(phoneNumber);
};

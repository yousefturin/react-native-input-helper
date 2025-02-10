export const cardPattern = [
  { type: 'Visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
  { type: 'MasterCard', pattern: /^5[1-5][0-9]{14}$/ },
  { type: 'AmericanExpress', pattern: /^3[47][0-9]{13}$/ },
  { type: 'Discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
  { type: 'JCB', pattern: /^(?:2131|1800|35\d{3})\d{11}$/ },
  { type: 'Troy', pattern: /^9792[0-9]{12}$/ },
];

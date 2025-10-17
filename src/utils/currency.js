export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatNumber = (number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale).format(number);
};

export const parseCurrency = (currencyString) => {
  return parseFloat(currencyString.replace(/[^0-9.-]+/g, ''));
};

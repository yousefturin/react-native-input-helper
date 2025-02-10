import {
  ValidateIban,
  ValidateEmail,
  ValidatePhoneNumber,
  ValidateCreditCard,
  FormatIban,
  FormatPhoneNumber,
  FormatCreditCard,
} from '../index';

describe('Validation and Formatting Functions', () => {
  describe('ValidateIban', () => {
    it('should return true for a valid IBAN', () => {
      expect(ValidateIban('DE89370400440532013000')).toBe(true);
    });

    it('should return false for an invalid IBAN', () => {
      expect(ValidateIban('INVALID_IBAN')).toBe(false);
    });
  });

  describe('ValidateEmail', () => {
    it('should return true for a valid email', () => {
      expect(ValidateEmail('test@example.com')).toBe(true);
    });

    it('should return false for an invalid email', () => {
      expect(ValidateEmail('invalid-email')).toBe(false);
    });
  });

  describe('ValidatePhoneNumber', () => {
    it('should return true for a valid phone number with country code', () => {
      expect(
        ValidatePhoneNumber({
          phoneNumber: '+1 223 456 7890',
          countryCode: 'US',
        })
      ).toBe(true);
    });

    it('should return false for an invalid phone number', () => {
      expect(
        ValidatePhoneNumber({
          phoneNumber: 'invalid_number',
          countryCode: 'US',
        })
      ).toBe(false);
    });
  });

  describe('ValidateCreditCard', () => {
    it('should return true for a valid credit card number', () => {
      expect(ValidateCreditCard('4111111111111111')).toStrictEqual({
        type: 'Visa',
        isValid: true,
      });
    });

    it('should return false for an invalid credit card number', () => {
      expect(ValidateCreditCard('1234567890123456')).toStrictEqual({
        isValid: false,
        type: undefined,
      });
    });
  });

  describe('FormatIban', () => {
    it('should format an IBAN correctly with spaces', () => {
      expect(
        FormatIban({ iban: 'DE89370400440532013000', separator: ' ' })
      ).toBe('DE89 3704 0044 0532 0130 00');
    });
  });

  describe('FormatPhoneNumber', () => {
    it('should format a phone number correctly for a given country', () => {
      expect(
        FormatPhoneNumber({ phoneNumber: '+12234567890', countryCode: 'US' })
      ).toBe('+1 223 456 7890');
    });
  });

  describe('FormatCreditCard', () => {
    it('should format a credit card number with spaces', () => {
      expect(FormatCreditCard('4111111111111111')).toBe('4111 1111 1111 1111');
    });
  });
});

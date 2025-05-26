import { Format, Validate } from '../src/core/InputHelper';
import type {
  CreditCardProp,
  EmailProp,
  IbanFormatProp,
  IbanProp,
  PhoneNumberProps,
} from '../src/core/types';

/**
 * Validates an IBAN
 * @param IbanProp
 * @returns
 * @example
 * ValidateIban('DE89370400440532013000');
 * // returns true
 */
export function ValidateIban(iban: IbanProp) {
  return Validate.iban(iban);
}
/**
 * Validates an email
 * @param EmailProps
 * @returns
 * @example
 * ValidateEmail('--@--.com');
 * // returns false
 */
export function ValidateEmail(email: EmailProp) {
  return Validate.email(email);
}
/**
 * Validates a phone number based on the country code
 * @param PhoneNumberProps
 * @returns
 * @example
 * ValidatePhoneNumber({
 * phoneNumber: '+90 552 222 22 22',
 * countryCode: 'TR',
 * });
 * // returns true
 * @note
 * this function only validated if the phone is in the correct format.
 */
export function ValidatePhoneNumber(PhoneNumberProps: PhoneNumberProps) {
  return Validate.phoneNumber(
    PhoneNumberProps.phoneNumber,
    PhoneNumberProps.countryCode
  );
}
/**
 * Validates a credit card number
 * @param cardNumber
 * @returns
 * @example
 * ValidateCreditCard('4111111111111111);
 * // returns {isValid: true, type: 'Visa'}
 * @note
 * this function only validated if the phone is in the correct format.
 */
export function ValidateCreditCard(cardNumber: CreditCardProp) {
  return Validate.creditCard(cardNumber);
}
/**
 * Formats an IBAN with a separator
 * @param IbanFormatProp
 * @returns
 * @example
 * FormatIban({
 * iban: 'DE89370400440532013000',
 * separator: ' ',
 * });
 * // returns DE89 3704 0044 0532 0130 00
 * @note
 * This function must take the IBAN code without spaces.
 */
export function FormatIban(IbanFormatProp: IbanFormatProp) {
  return Format.iban(IbanFormatProp.iban, IbanFormatProp.separator);
}
/**
 * Formats a phone number based on the country code
 * @param PhoneNumberProps
 * @returns
 * @example
 * FormatPhoneNumber({
 *  phoneNumber: '+905522222222',
 * countryCode: 'TR',
 * });
 * // returns +90 552 222 22 22
 * @note
 * This function must take the country key with + sign.
 */
export function FormatPhoneNumber(PhoneNumberProps: PhoneNumberProps) {
  return Format.phoneNumber(
    PhoneNumberProps.phoneNumber,
    PhoneNumberProps.countryCode
  );
}
/**
 * Formats a credit card number
 * @param cardNumber
 * @returns
 * @example
 * FormatCreditCard('4111111111111111');
 * // returns 4111 1111 1111 1111
 */
export function FormatCreditCard(cardNumber: CreditCardProp) {
  return Format.creditCard(cardNumber);
}

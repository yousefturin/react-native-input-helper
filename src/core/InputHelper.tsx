import { isValidLuhn, mod97 } from '../utils';
import {
  cardPattern,
  emailPattern,
  ibanCodeLength,
  phoneCodeLength,
  phoneFormat,
} from './constants';
import { ibanReg, ibanReplaceReg } from './constants/iban-pattern';
import type {
  CreditCardProp,
  EmailProp,
  IbanFormatProp,
  IbanProp,
  PhoneNumberProps,
} from './types';

export class Validate {
  static IBAN_REG = /^([A-Z]{2})(\d{2})([A-Z\d]+)$/;

  static email(email: EmailProp): boolean {
    if (!email) return false;
    if (email.length > 254) return false;

    var valid = emailPattern.test(email);
    if (!valid) return false;

    var emailParts = email.split('@');
    if (!emailParts[0]) return false;
    if (emailParts[0].length > 64) return false;
    if (!emailParts[1]) return false;
    var emailDomainParts = emailParts[1].split('.');
    if (
      emailDomainParts.some(function (part) {
        return part.length > 63;
      })
    )
      return false;

    return true;
  }

  static iban(iban: IbanProp): boolean {
    if (!iban) return false;
    var ibanStr = String(iban)
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, ''),
      code = ibanStr.match(this.IBAN_REG),
      digits;
    if (
      !code ||
      !code[1] ||
      iban.length !== ibanCodeLength[code[1] as keyof typeof ibanCodeLength]
    )
      return false;

    digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
      return (letter.charCodeAt(0) - 55).toString();
    });
    return mod97(digits) === 1;
  }
  static phoneNumber(phoneNumber: string, countryCode?: string): boolean {
    if (!phoneNumber) return false;
    if (!countryCode) return false;
    const country =
      phoneCodeLength[
        countryCode.toUpperCase() as keyof typeof phoneCodeLength
      ];
    if (!country) return false;
    return phoneNumber.length === country;
  }
  static creditCard(creditCard: CreditCardProp): {
    isValid: boolean;
    type: string | undefined;
  } {
    if (!creditCard) return { type: undefined, isValid: false };
    const cardType = cardPattern.find(({ pattern }) =>
      pattern.test(creditCard)
    )?.type;
    const isValid = !!cardType && isValidLuhn(creditCard);
    return { type: cardType, isValid: isValid };
  }
}

export class Format {
  static iban(
    iban: IbanFormatProp['iban'],
    separator: IbanFormatProp['separator'] = ' '
  ): string {
    if (!iban) return '';
    return iban
      .replace(ibanReg, '')
      .toUpperCase()
      .replace(ibanReplaceReg, '$1' + separator);
  }
  static phoneNumber(
    phoneNumber: PhoneNumberProps['phoneNumber'],
    countryCode: PhoneNumberProps['countryCode']
  ): string {
    if (!phoneNumber) return phoneNumber;
    if (!countryCode) return phoneNumber;
    const country =
      phoneFormat[countryCode.toUpperCase() as keyof typeof phoneFormat];
    if (!country) return phoneNumber;
    let cleaned = phoneNumber.replace(/\D/g, '');
    const numericCountryCode = country.toString().replace(/\D/g, '');

    if (cleaned.startsWith(numericCountryCode)) {
      cleaned = cleaned.slice(numericCountryCode.length);
    } else {
      cleaned = numericCountryCode + cleaned;
    }
    let formatted = '';
    let inputIndex = 0;

    for (let char of country.toString()) {
      if (inputIndex >= cleaned.length) break;

      if (char === 'X') {
        formatted += cleaned[inputIndex++];
      } else {
        formatted += char;
      }
    }
    return formatted;
  }
  static creditCard(creditCard: CreditCardProp): string {
    if (!creditCard) return creditCard;

    const rawInput = creditCard.replace(/\D/g, '');
    const { type } = Validate.creditCard(rawInput);

    let formattedInput = '';

    if (type === 'AmericanExpress') {
      formattedInput = rawInput.replace(
        /(\d{4})(\d{6})?(\d{5})?/,
        (_, p1, p2, p3) => [p1, p2, p3].filter(Boolean).join(' ')
      );
    } else {
      formattedInput = rawInput.replace(/(.{4})/g, '$1 ').trim();
    }
    return formattedInput;
  }
}

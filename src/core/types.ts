export type IbanProp = string;
export type IbanFormatProp = {
  /**
   * The IBAN to format
   */
  iban: string;

  /**
   * The separator to format the IBAN
   */
  separator?: string;
};
export type CreditCardProp = string;
export type EmailProp = string;
export type PhoneNumberProps = {
  /**
   * The phone number to format
   */
  phoneNumber: string;

  /**
   * The country code to format the phone number
   */
  countryCode?: string;
};

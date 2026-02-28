# valifmt

A **lightweight utility library** for **validating and formatting**:

- ✅ All major **phone number formats** (international-ready)
- ✅ All **IBAN** types from supported countries
- ✅ All common **credit card** types (Visa, MasterCard, Troy, AmEx, and more)
- ✅ **Email** addresses (RFC-compliant)

Works in **any JavaScript or TypeScript environment** — React Native, React, Next.js, Node.js, or plain TypeScript. No native dependencies.

---

## 🚀 Why use this library?

Unlike other libraries that handle only one input type — or require pulling in multiple large packages — `valifmt` provides:

- 🔹 **Unified** validation and formatting API
- 🔹 **Minimal bundle size** — much smaller than using validator.js + libphonenumber + iban + creditcard utils separately
- 🔹 **Zero dependencies** — works anywhere JS/TS runs

---

## 📦 Comparison

| Feature                 | `valifmt`                   | validator.js | libphonenumber-js | iban  |
| ----------------------- | --------------------------- | ------------ | ----------------- | ----- |
| Phone number formatting | ✅ All formats               | ❌            | ✅                 | ❌     |
| IBAN validation         | ✅ All countries             | ❌            | ❌                 | ✅     |
| Credit card types       | ✅ Visa/Master/Troy/etc      | ✅ (partial)  | ❌                 | ❌     |
| Email validation        | ✅ RFC-compliant             | ✅            | ❌                 | ❌     |
| Bundle size             | 🟢 Lightweight (3.73 kB)     | ⚠️ Larger     | ⚠️ Larger          | Small |
| All-in-one              | ✅ Yes                       | ❌            | ❌                 | ❌     |

---

## ✨ Features

- 📱 Phone Number:
  - Validate phone numbers by country code
  - Format for display using country-specific patterns (240+ countries)
- 💳 Credit Card:
  - Validate card numbers using the Luhn algorithm
  - Identify card type (Visa, MasterCard, AmericanExpress, Discover, JCB, Troy)
  - Format for display
- 🏦 IBAN:
  - Validate IBAN format using MOD-97 checksum (90+ countries)
  - Supports UBAN used in KKTC (starts with `CT`)
  - Format with customizable separator
- 📧 Email:
  - Validate email addresses (RFC-compliant, max 254 chars)

---

## 📦 Installation

```bash
npm install @yusefturin/valifmt
# or
yarn add @yusefturin/valifmt
```

---

## 📘 Usage

```typescript
import {
  ValidatePhoneNumber,
  FormatPhoneNumber,
  ValidateIban,
  FormatIban,
  ValidateCreditCard,
  FormatCreditCard,
  ValidateEmail,
} from '@yusefturin/valifmt';
```

---

### 📱 Phone Number

```typescript
// Validate — pass an object with phoneNumber and optional countryCode
ValidatePhoneNumber({ phoneNumber: '+90 552 222 22 22', countryCode: 'TR' }); // true
ValidatePhoneNumber({ phoneNumber: '+1 800 555 0199', countryCode: 'US' });   // true

// Format — same object shape, returns a formatted string
FormatPhoneNumber({ phoneNumber: '+905522222222', countryCode: 'TR' }); // '+90 552 222 22 22'
FormatPhoneNumber({ phoneNumber: '+18005550199', countryCode: 'US' });  // '+1 800 555 0199'
```

> **Note:** `countryCode` is an ISO 3166-1 alpha-2 code (e.g. `'TR'`, `'US'`, `'GB'`). It is optional but required for country-specific length validation and formatting.

---

### 🏦 IBAN

```typescript
// Validate — pass the raw IBAN string
ValidateIban('TR330006100519786457841326'); // true
ValidateIban('DE89370400440532013000');     // true

// Format — pass an object with iban and an optional separator (default: ' ')
FormatIban({ iban: 'TR330006100519786457841326' });                    // 'TR33 0006 1005 1978 6457 8413 26'
FormatIban({ iban: 'DE89370400440532013000', separator: '-' });        // 'DE89-3704-0044-0532-0130-00'
```

> **Note:** `ValidateIban` also supports UBAN used in KKTC (Turkish Republic of Northern Cyprus), which starts with `CT`.

---

### 💳 Credit Card

```typescript
// Validate — returns { isValid: boolean, type: string | undefined }
ValidateCreditCard('4111111111111111');  // { isValid: true, type: 'Visa' }
ValidateCreditCard('5500005555555559');  // { isValid: true, type: 'MasterCard' }
ValidateCreditCard('378282246310005');   // { isValid: true, type: 'AmericanExpress' }
ValidateCreditCard('9792123456789012');  // { isValid: true, type: 'Troy' }

// Format — groups digits for display
FormatCreditCard('4111111111111111'); // '4111 1111 1111 1111'
FormatCreditCard('378282246310005');  // '3782 822463 10005'  (AmEx: 4-6-5 format)
```

**Supported card types:**

| Type            | Pattern                             |
| --------------- | ----------------------------------- |
| Visa            | Starts with `4`                     |
| MasterCard      | Starts with `51`–`55`               |
| AmericanExpress | Starts with `34` or `37`            |
| Discover        | Starts with `6011` or `65`          |
| JCB             | Starts with `2131`, `1800`, or `35` |
| Troy            | Starts with `9792`                  |

---

### 📧 Email

```typescript
// Validate — returns boolean
ValidateEmail('user@example.com');  // true
ValidateEmail('invalid-email');     // false
ValidateEmail('a@b.c');             // true
```

---

## 🔤 Type Definitions

```typescript
type PhoneNumberProps = {
  phoneNumber: string;
  countryCode?: string; // ISO 3166-1 alpha-2 (e.g. 'TR', 'US', 'GB')
};

type IbanFormatProp = {
  iban: string;
  separator?: string; // default: ' '
};

type CreditCardProp = string;
type IbanProp = string;
type EmailProp = string;
```

---

## 📄 License

MIT

## 🙌 Contributing

Contributions are welcome! Feel free to open issues or PRs for enhancements or regional validation formats.

## 🔍 Keywords

`validation`, `formatter`, `credit-card`, `iban`, `phone-number`, `email`, `typescript`, `lightweight`

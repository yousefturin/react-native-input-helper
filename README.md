# react-native-input-helper

A **lightweight utility library** for **validating and formatting**:

- ✅ All major **phone number formats** (international-ready)
- ✅ All **IBAN** types from supported countries
- ✅ All common **credit card** types (Visa, MasterCard, Troy, and more)

Built to work seamlessly in **React Native** environments. Ideal for performance-focused apps that want an **all-in-one input helper** without bloating their bundle.

---

## 🚀 Why use this library?

Unlike other libraries that handle only one input type — or require pulling in multiple large packages — `react-native-input-helper` provides:

- 🔹 **Unified** validation and formatting API
- 🔹 **Minimal bundle size** — much smaller than using validator.js + libphonenumber + iban + creditcard utils separately
- 🔹 **Works out of the box** with React Native (no native dependencies)

---

## 📦 Comparison

| Feature                 | `react-native-input-helper` | validator.js | libphonenumber-js | iban  |
| ----------------------- | --------------------------- | ------------ | ----------------- | ----- |
| Phone number formatting | ✅ All formats               | ❌            | ✅                 | ❌     |
| IBAN validation         | ✅ All countries             | ❌            | ❌                 | ✅     |
| Credit card types       | ✅ Visa/Master/Troy/etc      | ✅ (partial)  | ❌                 | ❌     |
| Bundle size             | 🟢 Lightweight               | ⚠️ Larger     | ⚠️ Larger          | Small |
| All-in-one              | ✅ Yes                       | ❌            | ❌                 | ❌     |

---

## ✨ Features

- 📱 Phone Number:
  - Validate phone numbers from all regions
  - Format for display
- 💳 Credit Card:
  - Validate card numbers (Visa, MasterCard, Troy, AmEx, etc.)
  - Identify card type
- 🏦 IBAN:
  - Validate IBAN format
  - Supports all official country formats

---

## 📦 Installation

```bash
npm install react-native-input-helper
# or
yarn add react-native-input-helper
```

## 📘 Usage

```bash
import {
  ValidatePhoneNumber,
  FormatPhoneNumber,
  ValidateIban,
  FormatIban,
  ValidateCreditCard,
  FormatCreditCard
} from 'react-native-input-helper';

// Phone
ValidatePhoneNumber('+90 534 123 45 67'); // true
FormatPhoneNumber('+905341234567'); // +90 534 123 45 67

// IBAN
ValidateIban('TR330006100519786457841326'); // true
FormatIban('TR330006100519786457841326'); // TR33 0006 1005 1978 6457 8413 26
 //**NOTE**:ValidateIban also supports UBAN that is used in KKTC which starts with 'CT'

// Credit Card
ValidateCreditCard('4111111111111111').isValid; // true
ValidateCreditCard('4111111111111111').type; // 'Visa'
FormatCreditCard('4111111111111111') // 4111 1111 1111 1111

```

## 📄 License

MIT

## 🙌 Contributing

Contributions are welcome! Feel free to open issues or PRs for enhancements or regional validation formats.

## 🔍 Keywords

`react-native`, `validation`, `formatter`, `credit-card`, `iban`, `phone-number`, `lightweight`, `input-helper`

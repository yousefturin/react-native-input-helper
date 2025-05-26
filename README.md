# react-native-input-helper

This Library covers Validation and Formatin for user inputs such as Iban, Email, PhoneNumber, CreditCard.

## Installation

```sh
npm install react-native-input-helper
```

## Usage

### Importing the Functions

```javascript
import {
  ValidateIban,
  ValidateEmail,
  ValidatePhoneNumber,
  ValidateCreditCard,
  FormatIban,
  FormatPhoneNumber,
  FormatCreditCard
} from "react-native-input-helper";
```

## Validation Functions

### `ValidateIban(iban)`

Validates a given IBAN.

#### Example:

```javascript
console.log(ValidateIban("DE89370400440532013000"));
// returns true

console.log(ValidateIban("INVALID_IBAN"));
// returns false
```

---

### `ValidateEmail(email)`

Validates a given email.

#### Example:

```javascript
console.log(ValidateEmail("test@example.com"));
// returns true

console.log(ValidateEmail("--@--.com"));
// returns false
```

---

### `ValidatePhoneNumber({ phoneNumber, countryCode })`

ValidatePhoneNumber is a simplified and smaller in size, which is based on [google/libphonenumber](https://github.com/google/libphonenumber), where it does validate phone number based on given country code.

#### Example:

```javascript
console.log(
  ValidatePhoneNumber({ phoneNumber: "+90 552 222 22 22", countryCode: "TR" })
);
// returns true

console.log(
  ValidatePhoneNumber({ phoneNumber: "+90 552 222 22", countryCode: "TR" })
);
// returns false
```

**Note:** This function only validates if the phone number is in the correct format.

---

### `ValidateCreditCard(cardNumber)`

Validates a credit card number. with a **return** `{ type:Visa|MasterCard|AmericanExpress|Discover|JCB|Troy, isValid:true|fal };`

#### Example:

```javascript
console.log(ValidateCreditCard("4111111111111111").isValid);
// returns true

console.log(ValidateCreditCard("1234567890123456").isValid);
// returns false
```

---

## Formatting Functions

### `FormatIban({ iban, separator })`

Formats an IBAN with a separator, this Method can be called to format user Input onChange.

#### Example:

```javascript
console.log(FormatIban({ iban: "DE89370400440532013000", separator: " " }));
// returns "DE89 3704 0044 0532 0130 00"
```

**Note:** This function must take the IBAN code without spaces.

---

### `FormatPhoneNumber({ phoneNumber, countryCode })`

Formats a phone number based on the country code.

#### Example:

```javascript
console.log(
  FormatPhoneNumber({ phoneNumber: "+905522222222", countryCode: "TR" })
);
// returns "+90 552 222 22 22"
```

**Note:** This function must take the country code with a `+` sign. it can be used to format the Phone number while user is typing.

---

### `FormatCreditCard(cardNumber)`

Formats a credit card number.

#### Example:

```javascript
console.log(FormatCreditCard("4111111111111111"));
// returns "4111 1111 1111 1111"
```

```

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

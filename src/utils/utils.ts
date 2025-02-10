type DataParam =
  | string
  | number
  | object
  | boolean
  | undefined
  | null
  | any[]
  | (() => void);

export function Input(dataParam: DataParam): boolean {
  if (
    dataParam === undefined ||
    dataParam === null ||
    dataParam === '' ||
    (typeof dataParam === 'number' &&
      (Number.isNaN(dataParam) || !isFinite(dataParam))) ||
    (Array.isArray(dataParam) && dataParam.length === 0) ||
    (typeof dataParam === 'object' && Object.keys(dataParam).length === 0) ||
    typeof dataParam === 'function'
  ) {
    return false;
  }
  return true;
}
export function mod97(string: string): number {
  var checksum = parseInt(string.slice(0, 2), 10),
    fragment;

  for (var offset = 2; offset < string.length; offset += 7) {
    fragment = String(checksum) + string.substring(offset, offset + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
}
export function isValidLuhn(cardNumber: string): boolean {
  const reversedDigits = cardNumber.split('').reverse();
  return (
    reversedDigits
      .map((digit, index) => {
        let num = parseInt(digit, 10);
        if (index % 2 === 1) num *= 2;
        return num > 9 ? num - 9 : num;
      })
      .reduce((acc, num) => acc + num, 0) %
    10 ===
    0
  );
}

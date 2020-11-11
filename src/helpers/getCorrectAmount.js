export const getCorrectAmount = function (value) {
  const valid = /^\d{0,9}(\.\d{0,2})?$/.test(value);
  let val = value;

  if (!valid) {
    val = val.replace(',', '.');

    const dotCheck = val.indexOf('..');
    if (dotCheck >= 0) {
      val = val.replace('..', '.');
    }
    val = val.replace(/(\.)(.)(\.)/g, '.$2');

    // clear commas
    val = val.replace(/,/g, '');
    // clear not numbers
    val = val.replace(/[^0-9.]/g, '');
    // 2 digits after comma
    const totalLength = val.length;
    const only2DecimalsCount = val.indexOf('.');

    if (only2DecimalsCount >= 0 && totalLength > (only2DecimalsCount + 2)) {
      val = val.substring(0, (only2DecimalsCount + 3));
    }
  }

  return val;
};

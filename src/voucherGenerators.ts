export const generateVoucher = (): string => {
  const voucherData = new Array<number | string>(10);

  function generateChar(): string {
    return String.fromCharCode(generateInt(65, 90));
  }

  function generateInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function returnRandomPrimitive(): number | string {
    if (generateInt(0, 9) % generateInt(0, 9) == 0) {
      return generateChar();
    }
    return generateInt(0, 9);
  }

  for (let itter = 0; itter < 10; itter++) {
    let newVoucherPrimitive = voucherData[itter - 1];
    const previousVoucherPrimitive = voucherData[itter - 1];
    while (newVoucherPrimitive === previousVoucherPrimitive)
      newVoucherPrimitive = returnRandomPrimitive();
    voucherData[itter] = newVoucherPrimitive;
  }

  return voucherData.join('');
};

export const generateMultipleVouchers = (count: number): Array<string> => {
  const vouchers = Array<string>();

  for (let itter = 0; itter < count; itter++) {
    vouchers.push(generateVoucher());
  }

  return vouchers;
};

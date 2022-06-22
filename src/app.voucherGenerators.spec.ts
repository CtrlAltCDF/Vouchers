import { generateVoucher, generateMultipleVouchers } from './voucherGenerators';

describe('VoucherGeneration', () => {
  describe('when generateVoucher is called', () => {
    it('should create one voucher', () => {
      expect(generateVoucher().length).toEqual(10);
    });
  });
  describe('when generateVouchers is called', () => {
    it('should create 5 vouchers when count is 5', () => {
      expect(generateMultipleVouchers(5).length).toEqual(5);
    });
  });
});

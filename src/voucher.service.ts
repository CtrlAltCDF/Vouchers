import { Injectable } from '@nestjs/common';
import { Voucher } from './interfaces/voucher';
import { generateVoucher } from './voucherGenerators';

@Injectable()
export class VoucherService {
  private readonly vouchers: Voucher[] = [];

  findAll() {
    return this.vouchers;
  }

  generate(count: number) {
    for (let itter = 0; itter < count; itter++) {
      let newVoucher = generateVoucher();
      while (
        this.vouchers.find((voucherRow) => voucherRow.code === newVoucher)
      ) {
        newVoucher = generateVoucher();
      }
      this.vouchers.push({
        createStamp: new Date(Date.now()),
        code: newVoucher,
        redeemed: false,
      });
    }
    return count;
  }

  redeem(code: string) {
    const voucher = this.vouchers.find(
      (voucherItem) => voucherItem.code === code,
    );
    if (!voucher || voucher.redeemed) {
      return false;
    }
    voucher.redeemed = true;
    return true;
  }
}

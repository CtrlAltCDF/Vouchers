import { Injectable } from '@nestjs/common';
import { generateVoucher } from './voucherGenerators';

@Injectable()
export class VoucherService {
  private readonly vouchers = new Set<string>();

  findAll() {
    return Array.from(this.vouchers);
  }

  generate(count: number) {
    for (let itter = 0; itter < count; itter++) {
      let voucher: string;
      do {
        voucher = generateVoucher();
      } while (this.find(voucher));
      this.vouchers.add(voucher);
    }
    return { created: count, total: this.vouchers.size };
  }

  find(code: string) {
    if (this.vouchers.has(code)) {
      return true;
    }
    return false;
  }
}

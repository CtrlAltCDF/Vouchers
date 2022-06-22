import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { Voucher } from './interfaces/voucher';
import { RedeemVoucherDto } from './redeem-voucher.dto';
import { VoucherService } from './voucher.service';

@Controller('vouchers')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Get('generate')
  generateVouchers(@Query('count') count: number): string {
    const amount = this.voucherService.generate(count);
    return `Generated ${amount} vouchers.`;
  }

  @Get('all')
  returnAllVouchers(): Voucher[] {
    return this.voucherService.findAll();
  }

  @Post('redeem')
  redeem(@Body() body: RedeemVoucherDto): string {
    const { code } = body;
    if (this.voucherService.redeem(code)) {
      return 'Voucher Successfully redeemed';
    }
    return 'Failed to redeem voucher';
  }
}

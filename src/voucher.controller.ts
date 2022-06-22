import { Controller, Get, Param, Query, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateVouchersDto } from './create-vouchers.dto';
import { VoucherService } from './voucher.service';

@Controller('vouchers')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Post('generate')
  generateVoucher(@Body() body: CreateVouchersDto): string {
    const { count } = body;
    const { created, total } = this.voucherService.generate(count);
    return `${created} vouchers successfully. ${total} total vouchers`;
  }

  @Get('all')
  returnAllVouchers() {
    return this.voucherService.findAll();
  }

  @Get(':code')
  findVoucher(
    @Res({ passthrough: true }) res: Response,
    @Param('code') code: string,
  ): string {
    if (this.voucherService.find(code)) {
      return `Voucher ${code} exists.`;
    }
    res.status(404);
    return `Voucher ${code} does not exist.`;
  }
}

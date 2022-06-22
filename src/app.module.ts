import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoucherController } from './voucher.controller';
import { VoucherService } from './voucher.service';

@Module({
  imports: [],
  controllers: [AppController, VoucherController],
  providers: [AppService, VoucherService],
})
export class AppModule {}

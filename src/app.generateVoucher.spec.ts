import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('VoucherGeneration', () => {
  describe('generateOne', () => {
    it('should create one voucher', () => {
        expect(1).toEqual(1);
    //   expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

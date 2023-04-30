import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { actionButtons } from './app.buttons';

@Update()
export class AppUpdate {
  constructor(@InjectBot()private readonly bot: Telegraf<Context>, private readonly appService: AppService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply('Привет, друг 👋🏼');
    await ctx.reply('Что ты хочешь добавить?', actionButtons() )
  }
}

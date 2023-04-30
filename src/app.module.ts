import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { ConfigModule } from '@nestjs/config';
import { TOKEN_TG } from './config';

const sessions = new LocalSession({database: 'session_db.json'})
console.log('object :>> ', TOKEN_TG);
@Module({
  imports: [
    TelegrafModule.forRoot({
      middlewares: [sessions.middleware()],
      token: '6094316521:AAFRCeZV0gNjnpCiamNpOXULBbYkjDKQ8ZM'
    }),
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  providers: [AppService, AppUpdate],
})
export class AppModule {}

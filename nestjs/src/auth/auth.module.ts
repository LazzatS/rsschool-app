import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '../config/config.module';
import { CourseModule } from '../course/course.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
import { BasicStrategy } from './strategies/basic.strategy';
import { DevStrategy } from './strategies/dev.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [PassportModule.register({}), UserModule, CourseModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, JwtService, GithubStrategy, JwtStrategy, BasicStrategy, DevStrategy],
})
export class AuthModule {}

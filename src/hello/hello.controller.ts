import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('hello')
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    return response.status(200).json({
      message: 'Hello World!',
    });
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 Not Found';
  }

  @Get('error')
  @HttpCode(500)
  errorPage() {
    return 'Error';
  }

  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    // console.log(typeof query.name);
    // console.log(typeof query.age);
    return `Hello ${query.name} you are ${query.age} years old`;
  }
}

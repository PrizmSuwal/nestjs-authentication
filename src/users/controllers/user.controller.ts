import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { usersDTO } from '../users.dto';

@Controller('users')
export class UsersController {
    constructor (private usersService: UsersService){}

    @Post('add')
    async addUser(@Body() users: usersDTO) {
        return this.usersService.addUser(users);
    }

    @Get('list')
    async listUser(){
        return this.usersService.listUser();
    }
}

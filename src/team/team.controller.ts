import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('team')
export class TeamController {
  constructor(@InjectDataSource() private bdd: DataSource) {}

  @Post()
  create(@Body() bodyJSON) {
    return this.bdd.query('INSERT INTO team (label) VALUES (?)', [bodyJSON.label]);
  }

  @Get()
  findAll() {
    return this.bdd.query('SELECT * FROM team');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bdd.query('SELECT * FROM team WHERE id_team = ?', [id])
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() bodyJSON) {
    return this.bdd.query('UPDATE team SET label = ? where id_team = ?', [bodyJSON.label, id])
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bdd.query('DELETE FROM team WHERE id_team = ?', [id])
  }
}

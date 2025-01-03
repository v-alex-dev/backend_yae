import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Ingredient } from '@prisma/client';

@Controller('ingredient')
export class IngredientController {
    
    constructor(private readonly ingredientService: IngredientService) {}

    @Get()
    async getIngredients() : Promise<Ingredient[]> {
        return this.ingredientService.ingredients({});
    }

    @Get(':id')
    async getIngredient(@Param('id') id: string) : Promise<Ingredient> {
        return this.ingredientService.ingredient({id: String(id)});
    }

    @Post()
    async createIngredient(@Body() data: {name: string}) : Promise<Ingredient> {
        return this.ingredientService.createIngredient(data);
    }

    @Put(':id')
    async updateIngredient(@Param('id') id: string, @Body() data: {name: string}) : Promise<Ingredient> {
        return this.ingredientService.updateIngredient({where: {id: String(id)}, data});
    }

    @Delete(':id')
    async deleteIngredient(@Param('id') id: string) : Promise<Ingredient> {
        return this.ingredientService.deleteIngredient({id: String(id)});
    }

}

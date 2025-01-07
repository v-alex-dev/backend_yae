import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
  } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from '@prisma/client';

@Controller('recipe')
export class RecipeController {
    constructor( private readonly recipeService: RecipeService) {}

    @Get()
    async getRecipes() : Promise<Recipe[]> {
        return this.recipeService.recipes({});
    }

    @Get(':id')
    async getRecipe(@Param('id') id: string) : Promise<Recipe> {
        return this.recipeService.recipe({id: String(id)});
    }

    @Post()
    async createRecipe(@Body() data: {name: string, description: string}) : Promise<Recipe> {
        return this.recipeService.createRecipe(data);
    }

    @Put(':id')
    async updateRecipe(@Param('id') id: string, @Body() data: {name: string, description: string}) : Promise<Recipe> {
        return this.recipeService.updateRecipe({where: {id: String(id)}, data});
    }

    @Delete(':id')
    async deleteRecipe(@Param('id') id: string) : Promise<Recipe> {
        return this.recipeService.deleteRecipe({id: String(id)});
    }
}

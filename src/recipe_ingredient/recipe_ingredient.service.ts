import { Injectable } from '@nestjs/common';
import { Prisma, Recipe_ingredients } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeIngredientService {
    constructor(private readonly prisma : PrismaService) {}

    async createRecipeIngredient(data: Prisma.Recipe_ingredientsCreateInput): Promise<Recipe_ingredients> { 
        return this.prisma.recipe_ingredients.create({
            data,
        });
    }
}

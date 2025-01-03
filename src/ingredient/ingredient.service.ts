import { Injectable } from '@nestjs/common';
import { Ingredient, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IngredientService {
    constructor(private prisma: PrismaService) {}

    async ingredient(
        ingredientWhereUniqueInput: Prisma.IngredientWhereUniqueInput,
    ): Promise<Ingredient | null> {
        return this.prisma.ingredient.findUnique({
            where: ingredientWhereUniqueInput,
        });
    }

    async ingredients(params: { 
        skip?: number;
        take?: number;
        cursor?: Prisma.IngredientWhereUniqueInput;
        where?: Prisma.IngredientWhereInput;
        orderBy?: Prisma.IngredientOrderByWithRelationInput;
    }): Promise<Ingredient[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.ingredient.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createIngredient(data: Prisma.IngredientCreateInput): Promise<Ingredient> {
        return this.prisma.ingredient.create({
            data,
        });
    }

    async updateIngredient(params: { 
        where: Prisma.IngredientWhereUniqueInput;
        data: Prisma.IngredientUpdateInput;
    }): Promise<Ingredient> {
        const { where, data } = params;
        return this.prisma.ingredient.update({
            data,
            where,
        });
    }

    async deleteIngredient(
        where: Prisma.IngredientWhereUniqueInput,
    ): Promise<Ingredient> {
        return this.prisma.ingredient.delete({
            where,
        });
    }
    
}

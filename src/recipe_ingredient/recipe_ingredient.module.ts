import { Module } from '@nestjs/common';
import { RecipeIngredientService } from './recipe_ingredient.service';
import { RecipeIngredientController } from './recipe_ingredient.controller';

@Module({
  providers: [RecipeIngredientService],
  controllers: [RecipeIngredientController]
})
export class RecipeIngredientModule {}

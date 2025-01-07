import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecipeIngredientModule } from './recipe_ingredient/recipe_ingredient.module';

@Module({
  imports: [IngredientModule, RecipeModule, RecipeIngredientModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

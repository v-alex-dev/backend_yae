import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [IngredientModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

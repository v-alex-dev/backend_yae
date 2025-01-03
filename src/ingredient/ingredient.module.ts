import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';

@Module({
  controllers: [IngredientController],
  imports: [],
  providers: [IngredientService],

})
export class IngredientModule {}

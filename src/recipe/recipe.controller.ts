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
export class RecipeController {}

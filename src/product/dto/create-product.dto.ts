import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsOptional,
  IsUrl,
  IsInt,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Vernis à ongles rouge',
    description: 'Nom du produit',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({
    example: 'Vernis longue tenue, couleur rouge intense',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 9.99, description: 'Prix du produit, doit être > 0' })
  @IsNumber({}, { message: 'Le prix doit être un nombre valide.' })
  @Min(0.01, { message: 'Le prix doit être supérieur à 0.' })
  price!: number;

  @ApiProperty({ example: 50, description: 'Stock disponible, doit être >= 0' })
  @IsInt({ message: 'Le stock doit être un entier.' })
  @Min(0, { message: 'Le stock doit être supérieur ou égal à 0.' })
  stock!: number;

  @ApiProperty({ example: 'https://example.com/image.jpg', required: false })
  @IsOptional()
  @IsUrl({}, { message: "L'image doit être une URL valide." })
  image?: string;
}

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
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber({}, { message: 'Le prix doit être un nombre valide.' })
  @Min(0.01, { message: 'Le prix doit être supérieur à 0.' })
  price!: number;

  @IsInt({ message: 'Le stock doit être un entier.' })
  @Min(0, { message: 'Le stock doit être supérieur ou égal à 0.' })
  stock!: number;

  @IsOptional()
  @IsUrl({}, { message: "L'image doit être une URL valide." })
  image?: string;
}

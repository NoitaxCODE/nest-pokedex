import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

  //Le pongo signo de pregunta a limit y a offset para indicarle a typescript que son opcionales

  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  offset?:number;

}
import {
  IsString,
  IsEmail,
  IsUUID,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';
import { Match } from 'src/decorators/match.decorator';

export class CreateUserDTO {
  @IsUUID('4', {
    message: 'Please provide a valid id',
    context: {
      errorCode: 'id',
      example: '123e4567-e89b-12d3-a456-426614174000',
      field: 'id',
      value: '123e4567-e89b-12d3-a456-426614174000',
    },
  })
  id: string;

  @IsNotEmpty({
    message: 'Please provide a username',
    context: {
      errorCode: 'username',
      example: 'john.doe',
      field: 'username',
      value: 'john.doe',
    },
  })
  @IsString({
    message: 'Username must be a string',
    context: {
      errorCode: 'username',
      example: 'john.doe',
      field: 'username',
      value: 'john.doe',
    },
  })
  username: string;

  @IsNotEmpty({
    message: 'Please provide a password',
    context: {
      errorCode: 'password',
      example: 'LjC3pwgqEtDKyq5',
      field: 'password',
      value: 'LjC3pwgqEtDKyq5',
    },
  })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message: 'Password must be strong',
      context: {
        errorCode: 'password',
        example: 'LjC3pwgqEtDKyq5',
        field: 'password',
        value: 'LjC3pwgqEtDKyq5',
      },
    },
  )
  password: string;

  @IsNotEmpty({
    message: 'Please provide a repeat password',
    context: {
      errorCode: 'repeatPassword',
      example: 'LjC3pwgqEtDKyq5',
      field: 'repeatPassword',
      value: 'LjC3pwgqEtDKyq5',
    },
  })
  @IsString({
    message: 'Repeat password must be a string',
    context: {
      errorCode: 'repeatPassword',
      example: 'LjC3pwgqEtDKyq5',
      field: 'repeatPassword',
      value: 'LjC3pwgqEtDKyq5',
    },
  })
  @Match('password', {
    message: 'Passwords do not match',
    context: {
      errorCode: 'repeatPassword',
      example: 'LjC3pwgqEtDKyq5',
      field: 'repeatPassword',
      value: 'LjC3pwgqEtDKyq5',
    },
  })
  repeatPassword: string;

  @IsNotEmpty({
    message: 'Please provide a valid email',
    context: {
      errorCode: 'email',
      example: 'contact@johndoe.com',
      field: 'email',
      value: 'contact@johndoe.com',
    },
  })
  @IsEmail(
    {
      allow_display_name: true,
      allow_utf8_local_part: true,
      require_tld: true,
    },
    {
      message: 'Please provide a valid email',
      context: {
        errorCode: 'email',
        example: 'contact@johndoe.com',
        field: 'email',
        value: 'contact@johndoe.com',
      },
    },
  )
  email: string;
  // Add other fields with validation as needed
}

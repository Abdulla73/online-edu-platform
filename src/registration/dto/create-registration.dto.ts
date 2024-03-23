import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateRegistrationDto {

    @IsString()
    @IsNotEmpty({ message: 'Something went wrong. Try again leater!' })
    user_name: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty({ message: 'Email can not be empty' })
    user_email: string;

    @IsDateString()
    @IsNotEmpty({ message: 'date of birth can not be empty' })
    date_of_birth: string;

    @MaxLength(20)
    @MinLength(8)
    @IsString()
    @Matches(/^[a-zA-Z0-9!@#$%^&*()_+]*$/, { message: 'input a valid password' })

    
    @IsNotEmpty({ message: 'Password can not be empty' })
    user_password: string;

    @IsString()
    @IsNotEmpty({ message: 'Password can not be empty' })
    role: string;

    

}

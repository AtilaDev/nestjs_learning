import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);

    const ageNumber = parseInt(value.age.toString(), 10);

    if (isNaN(ageNumber)) {
      throw new Error('Age is not a number');
    }
    return {
      ...value,
      age: ageNumber,
    };
  }
}

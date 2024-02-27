import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone: string): string {
    return this.numberValueReduced(phone);
  }

  numberValueReduced = (phone: string) => {
    let phoneNumber = phone.replace(/[^\d]/g, '');
    for (let i = 0; i < phoneNumber.length; i++) {
      if (phoneNumber[0] === '3') {
        phoneNumber = phoneNumber.slice(3);
      }
      if (phoneNumber[0] === '0') {
        phoneNumber = phoneNumber.slice(1);
      }
    }

    return phoneNumber.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, '+380 ($1) $2-$3-$4');
  };

}

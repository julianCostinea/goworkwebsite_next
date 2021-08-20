import { string, number, object } from "yup";

export const mailSchema = object({
  name: string().required('Navn skal indtastes').min(2, 'Navn skal være længere end 2 bogstaver'),
  telefon: number().required().integer().test('len', 'Telefonnummer skal være mellem 8 og 11 tal', val => {
      if(val.toString().length <= 11 && val.toString().length >= 8){
          return true;
      } else{
          return false
      }
    }
      ),
  email: string().required().email(),
  description: string().required(),
});

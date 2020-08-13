import {
  EmailValidatorProtocol,
  EmailValidatorFnProtocol,
} from './validation/email-validator-protocol';
import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email é válido (CLASS)');
  } else {
    console.log('Email é inválido (CLASS)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email é válido (FN)');
  } else {
    console.log('Email é inválido (FN)');
  }
}

const email = 'luizomf@gmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);

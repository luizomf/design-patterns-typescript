export interface EmailValidatorProtocol {
  isEmail: EmailValidatorFnProtocol;
}

export interface EmailValidatorFnProtocol {
  (value: string): boolean;
}

import { useState } from "react";
import { duplicateValidator } from "../../../validator/duplicateValidator";
import { tagMaxLengthValidator } from "../../../validator/maxLengthValidator";
import { tagMinLengthValidator } from "../../../validator/minLengthValidator";

type ValidateResult = {
  code: string,
  message: string,
}

type ArkTagInputValidateEvent = {
  value: string[];
  inputValue: string;
}

type Args = {
  duplicate: boolean;
  maxLength: number;
  minLength?: number
}

export const useTagValidator = (params: Args) => {
  const [errors, setErrors] = useState<ValidateResult[]>([]);

  const onValid = (validate: ArkTagInputValidateEvent) => {
    const errors: ValidateResult[] = [];
    if(!params.duplicate) {
      const result = duplicateValidator(validate.inputValue, validate.value);
      if(result) {
        errors.push(result);
      }
    }
    const overMaxLength = tagMaxLengthValidator(validate.inputValue, params.maxLength);
    if(overMaxLength) errors.push(overMaxLength);

    if(params.minLength) {
      const belowMinLength = tagMinLengthValidator(validate.inputValue, params.minLength);
      if (belowMinLength) errors.push(belowMinLength);
    }

    setErrors(errors)
    return errors.length < 1;
  }

  const clearAllValues = () => {
    setErrors([]);
  }

  return {
    errors,
    onValid,
    clearAllValues
  }
}
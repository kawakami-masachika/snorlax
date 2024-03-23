export const tagMaxLengthValidator = (value: string, maxLength: number) => {
  if (value.length > maxLength) {
    return {
      code: 'limitOverMaxLength',
      message: `${maxLength}文字以内で入力してください`
    }
  }
  return null;
}
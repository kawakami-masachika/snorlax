export const tagMinLengthValidator = (value: string, maxLength: number) => {
  if (value.length > maxLength) {
    return {
      code: 'limitBelowMinLength',
      message: `${maxLength}文字以上で入力してください`
    }
  }
  return null;
}

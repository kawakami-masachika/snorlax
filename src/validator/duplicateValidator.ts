export const duplicateValidator = (input: string, values: string[]) => {
  if(values.includes(input)) {
    return {
      code: 'duplicateValue',
      message: '入力した値は既に存在しています。'
    }
  }
  return null;
}
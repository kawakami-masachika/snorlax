export const maxSizeValiDator = (total: number, maxSize: number) => {
  if (total > maxSize) {
    return {
      code: 'limitOverRegisterSize',
      message: '登録可能な件数を超えています'
    }
  }
  return null;
}
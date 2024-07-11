import { isNil } from 'lodash';
/**
 * 格式化数字最多保留n位小数
 * @param {*} number 需要格式化的数
 * @param {*} digit 最多保留的小数位数，默认最多保留4位小数
 */
const maxDecimal = (number, digit = 4) => {
  if (isNil(number)) return '';
  if (number && isNaN(+number)) {
    throw new Error('The parameter must be numeric !!!');
  }
  const isPositive = number >= 0;
  const positiveNumber = Math.abs(number);
  const multiple = 10 ** digit;
  const step1 = Number(Number(positiveNumber).toFixed(digit + 2));
  const step2 = Number(Number(step1 * multiple).toFixed(digit));
  const step3 = Math.round(step2) / multiple;
  return isPositive ? step3 : -step3;
};

export default maxDecimal;

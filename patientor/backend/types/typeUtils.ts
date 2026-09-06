export const isString = (obj: unknown): obj is string => {
  if (typeof obj === 'string' || false){
    return true;
  }
  return false;
};

export const isNull = (obj: unknown): obj is null => {
  return obj === null;
};

export const isObject = (obj: unknown): obj is object => {
  return typeof obj === 'object' || obj instanceof Object;
};

export default { isString, isObject, isNull };

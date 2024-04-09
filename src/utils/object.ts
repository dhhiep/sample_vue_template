import camelCase from 'lodash/camelCase';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import snakeCase from 'lodash/snakeCase';
import transform from 'lodash/transform';

export const snakeToCamelCase = (obj: any): any =>
  transform(obj, (acc: any, value: any, key: any, target: any) => {
    const camelKey = isArray(target) ? key : camelCase(key);

    acc[camelKey] = isObject(value) ? snakeToCamelCase(value) : value;
  });

export const camelToSnakeCase = (obj: any) =>
  transform(obj, (acc: any, value: any, key: any, target: any) => {
    const camelKey = isArray(target) ? key : snakeCase(key);

    acc[camelKey] = isObject(value) ? camelToSnakeCase(value) : value;
  });

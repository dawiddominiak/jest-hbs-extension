import predicate from './predicate';
import { resolve } from 'path';

function stringifyData(data) {
  let stringifiedData = data;

  if (typeof data === 'object') {
    stringifiedData = JSON.stringify(data, undefined, '\t');
  }

  return stringifiedData;
}

export default (viewsPath) => {
  return (html, templateName, data) => {
    const templatePath = resolve(viewsPath, templateName);
    if (predicate(html, { templatePath, data })) {
      return {
        message: () =>
          `expected ${html} to not be compiled from ${templateName} for data ${stringifyData(data)}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${html} to be compiled from ${templateName} for data ${stringifyData(data)}`,
        pass: false,
      };
    }
  };
}

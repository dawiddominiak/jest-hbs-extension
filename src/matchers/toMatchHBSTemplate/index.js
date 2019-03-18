import predicate from './predicate';
import { resolve } from 'path';

export default (viewsPath) => {
  return (html, templateName, data) => {
    const templatePath = resolve(viewsPath, templateName);
    if (predicate(html, { templatePath, data })) {
      return {
        message: () =>
          `expected ${html} to not be compiled from ${templateName} for data ${data}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${html} to be compiled from ${templateName} for data ${data}`,
        pass: false,
      };
    }
  };
}

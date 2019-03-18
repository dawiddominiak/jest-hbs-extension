import { compile } from 'handlebars';
import { readFileSync } from 'fs';

export default (html, { templatePath, data }) => {
  const template = readFileSync(templatePath).toString();
  const compileHtml = compile(template);
  const compiledHtml = compileHtml(data);

  return html === compiledHtml;
};

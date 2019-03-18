import matchers from './matchers';
import { EOL } from 'os';

export default (viewsPath) => {
  const jestExpect = global.expect;

  if (jestExpect !== undefined) {
    jestExpect.extend(matchers(viewsPath));
  } else {
    console.error(
      ```
      Unable to find Jest's global expect.${EOL}
      Please check you have added jest-hbs-extension correctly to your jest configuration.
      ```
    );
  }
}

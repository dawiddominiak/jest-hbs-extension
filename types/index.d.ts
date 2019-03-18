/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    /**
     * Check if matches HBS template
     *
     * @param {String} templateName
     * @param {Object} data
     */
    toMatchCompiledHandlebarsTemplate(templateName: string, data: Object): R;
  }
}

declare module 'jest-hbs-extension' {
  export default function addJestHbsExtension(viewsPath: string): void;
}

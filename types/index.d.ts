/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    /**
     * Check if matches HBS template
     *
     * @param {String} templateName
     * @param {Object} data
     */
    toMatchHBSTemplate(templateName: string, data: Object): R;
  }
}

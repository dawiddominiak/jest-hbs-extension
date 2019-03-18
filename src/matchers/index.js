import toMatchCompiledHandlebarsTemplate from './toMatchCompiledHandlebarsTemplate';

export default (viewsPath) => {
  return {
    toMatchCompiledHandlebarsTemplate: toMatchCompiledHandlebarsTemplate(viewsPath),
  };
};

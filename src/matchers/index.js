import toMatchHBSTemplate from './toMatchHBSTemplate';

export default (viewsPath) => {
  return {
    toMatchHBSTemplate: toMatchHBSTemplate(viewsPath),
  };
};

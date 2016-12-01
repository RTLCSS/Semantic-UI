/*******************************
             Docs
*******************************/

/* Paths used for "serve-docs" and "build-docs" tasks */
module.exports = {
  base: '',
  globs: {
    eco: '**/*.html.eco'
  },
  paths: {
    clean: '../Semantic-UI-Docs/out/dist/',
    source: {
      config      : 'src/theme.config',
      definitions : 'src/definitions/',
      site        : 'src/site/',
      themes      : 'src/themes/'
    },
    output: {
      examples     : '../Semantic-UI-Docs/out/examples/',
      less         : '../Semantic-UI-Docs/out/src/',
      metadata     : '../Semantic-UI-Docs/out/',
      packaged     : '../Semantic-UI-Docs/out/dist/',
      uncompressed : '../Semantic-UI-Docs/out/dist/components/',
      compressed   : '../Semantic-UI-Docs/out/dist/components/',
      themes       : '../Semantic-UI-Docs/out/dist/themes/'
    },
    template: {
      eco: '../Semantic-UI-Docs/server/documents/'
    },
  }
};

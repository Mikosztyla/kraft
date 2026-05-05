// Optional SSR smoke test. Safe to delete; not used by the app or build.
// Run with: node _smoke.js  (renders <App /> to HTML and prints sanity checks)
const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');
const Module = require('module');

Module._extensions['.css'] = (m) => { m.exports = {}; };
Module._extensions['.png'] = (m, f) => { m.exports = '/' + path.basename(f); };
Module._extensions['.jpg'] = (m, f) => { m.exports = '/' + path.basename(f); };
Module._extensions['.svg'] = (m, f) => { m.exports = '/' + path.basename(f); };

const origJS = Module._extensions['.js'];
Module._extensions['.js'] = function (module, filename) {
  if (filename.includes(path.sep + 'src' + path.sep)) {
    const src = fs.readFileSync(filename, 'utf8');
    const out = babel.transformSync(src, {
      configFile: false,
      babelrc: false,
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
      filename,
    });
    return module._compile(out.code, filename);
  }
  return origJS(module, filename);
};

global.window = { addEventListener: () => {}, removeEventListener: () => {}, scrollY: 0, innerHeight: 800 };
global.document = { getElementById: () => null };

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;
const html = ReactDOMServer.renderToStaticMarkup(React.createElement(App));
console.log('Rendered OK, html length:', html.length);
console.log('  Kraft:', html.includes('Kraft'));
console.log('  Negroni:', html.includes('Negroni'));
console.log('  Jagiellońska:', html.includes('Jagiellońska'));
console.log('  PLN:', html.includes('PLN'));

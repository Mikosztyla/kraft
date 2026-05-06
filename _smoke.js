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

global.window = {
  addEventListener: () => {}, removeEventListener: () => {},
  scrollY: 0, innerHeight: 800,
  localStorage: { getItem: () => null, setItem: () => {} },
};
global.document = { getElementById: () => null, documentElement: {} };
global.localStorage = global.window.localStorage;

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./src/App').default;
const html = ReactDOMServer.renderToStaticMarkup(React.createElement(App));

console.log('Rendered OK, html length:', html.length);
const checks = [
  ['Kraft brand', html.includes('Kraft')],
  ['Cocktail item Negroni', html.includes('Negroni')],
  ['Jagiellonska in address', html.includes('Jagiellońska')],
  ['PLN currency', html.includes('PLN')],
  ['Polish hero tagline', html.includes('Bar Koktajlowy')],
  ['Polish about heading', html.includes('Rzemieślniczy')],
  ['New hours 12:00 to 01:00', html.includes('12:00')],
  ['No "Reservations"', !html.includes('Reservations') && !html.includes('Rezerwacje')],
  ['No "patio"', !html.toLowerCase().includes('patio')],
  ['IG kraft.krk link', html.includes('instagram.com/kraft.krk')],
  ['Email kraft.krakow@gmail.com', html.includes('kraft.krakow@gmail.com')],
  ['Maps short link', html.includes('maps.app.goo.gl/Gjk2V4Vo333yu2Z56')],
  ['Lang switcher rendered', html.includes('lang-switcher')],
  ['Polski label', html.includes('Polski')],
  ['English label', html.includes('English')],
];
for (const [label, ok] of checks) {
  console.log((ok ? '  OK   ' : '  FAIL ') + label);
}

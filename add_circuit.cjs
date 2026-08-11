const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /<div className="absolute inset-0 bg-brand-bg\/90 pointer-events-none -z-10" \/>/,
  '<div className="absolute inset-0 bg-brand-bg/80 pointer-events-none -z-10" />\n          <div className="finance-circuit-bg text-brand-text" />'
);

fs.writeFileSync('src/App.tsx', code);

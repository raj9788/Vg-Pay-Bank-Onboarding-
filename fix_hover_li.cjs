const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

code = code.replace(
  /<li className="bg-brand-panel p-4 rounded-xl border border-brand-border">/g,
  '<li className="bg-brand-panel p-4 rounded-xl border border-brand-border hover:border-brand-border-strong hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-300 hover:-translate-y-1">'
);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

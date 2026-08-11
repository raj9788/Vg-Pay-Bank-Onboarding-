const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

code = code.replace(
  /className="bg-brand-panel border border-brand-border hover:border-brand-border-strong transition-colors duration-300/g,
  'className="bg-brand-panel border border-brand-border hover:border-brand-border-strong hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-300 hover:-translate-y-0.5'
);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

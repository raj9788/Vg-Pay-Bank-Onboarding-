const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// replace some standard static elements with hover effects
code = code.replace(/className="bg-brand-panel border border-brand-border/g, 'className="bg-brand-panel border border-brand-border hover:border-brand-border-strong transition-colors duration-300');
code = code.replace(/<li className="flex items-start/g, '<li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200');
code = code.replace(/<tr className="hover:bg-brand-sidebar\/50">/g, '<tr className="hover:bg-brand-text/5 transition-colors duration-200">');

fs.writeFileSync('src/components/HandbookContent.tsx', code);

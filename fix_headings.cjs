const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

code = code.replace(/className="text-4xl sm:text-5xl font-serif italic/g, 'className="text-5xl sm:text-6xl md:text-7xl font-serif italic');
code = code.replace(/className="text-3xl font-serif italic/g, 'className="text-4xl sm:text-5xl font-serif italic');
code = code.replace(/className="text-lg font-serif italic/g, 'className="text-2xl sm:text-3xl font-serif italic');

fs.writeFileSync('src/components/HandbookContent.tsx', code);

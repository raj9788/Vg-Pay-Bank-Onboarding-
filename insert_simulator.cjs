const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

if (!code.includes('import { DeviceSimulator }')) {
  code = code.replace(
    "import { motion } from 'motion/react';",
    "import { motion } from 'motion/react';\nimport { DeviceSimulator } from './DeviceSimulator';"
  );
}

// Find section 4 and inject before the 4.1 hardware anatomy h3
code = code.replace(
  /<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4\.1 Hardware Anatomy &amp; Setup<\/h3>/,
  '<DeviceSimulator />\n\n          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.1 Hardware Anatomy &amp; Setup</h3>'
);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

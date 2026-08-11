const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

code = code.replace(
  "import { ShieldAlert, Info, AlertTriangle, FileText } from 'lucide-react';",
  "import { ShieldAlert, Info, AlertTriangle, FileText } from 'lucide-react';\nimport { motion } from 'motion/react';"
);

code = code.replace(
  'export function HandbookContent() {\n  return (\n    <div className="max-w-4xl mx-auto px-6 py-12 lg:px-8 text-brand-text space-y-16">',
  'export function HandbookContent() {\n  return (\n    <motion.div \n      initial={{ opacity: 0, x: -20 }}\n      animate={{ opacity: 1, x: 0 }}\n      transition={{ duration: 0.6, ease: "easeOut" }}\n      className="max-w-6xl mx-auto px-6 py-12 lg:px-12 text-brand-text space-y-16"\n    >'
);

// We need to change the closing div of the return to </motion.div>
// There is one main wrapping div. Let's find it at the end of the file.
const lastDivIndex = code.lastIndexOf('</div>');
if (lastDivIndex !== -1) {
  code = code.substring(0, lastDivIndex) + '</motion.div>' + code.substring(lastDivIndex + 6);
}

fs.writeFileSync('src/components/HandbookContent.tsx', code);

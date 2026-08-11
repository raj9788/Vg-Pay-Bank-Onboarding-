const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// Replace all <section ...> with <motion.section ... initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
code = code.replace(/<section\b([^>]*)>/g, '<motion.section$1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>');

code = code.replace(/<\/section>/g, '</motion.section>');

fs.writeFileSync('src/components/HandbookContent.tsx', code);

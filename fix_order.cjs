const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// I will find `{/* Section 4 */}` down to `</section>` just before `        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">          5. Technical Integration`. No wait, the `h2` for section 5 is right below `new_section4.tsx`.

let toReplace = `      {/* Section 5 */}
      <section id="section-5" className="scroll-mt-24 space-y-6">`;
      
let section4Content = fs.readFileSync('new_section4.tsx', 'utf8');

// We inserted section4Content right after `<section id="section-5" className="scroll-mt-24 space-y-6">\n`.
// Let's remove it and insert it properly before `{/* Section 5 */}`.

code = code.replace(section4Content, '');
code = code.replace(toReplace, section4Content + '\n' + toReplace);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

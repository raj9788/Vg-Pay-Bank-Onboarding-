const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// I will extract the current section 5 and replace it with new_section5.tsx.
// It starts at `{/* Section 5 */}` and ends before `{/* Section 6 */}`.

const s5start = code.indexOf('{/* Section 5 */}');
const s6start = code.indexOf('{/* Section 6 */}');

if (s5start !== -1 && s6start !== -1) {
  const newS5 = fs.readFileSync('new_section5.tsx', 'utf8');
  code = code.substring(0, s5start) + newS5 + '\n      ' + code.substring(s6start);
  fs.writeFileSync('src/components/HandbookContent.tsx', code);
}

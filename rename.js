const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// Replace section-9 with section-10, etc down to section-4 with section-5
for (let i = 9; i >= 4; i--) {
  let oldId = `section-${i}`;
  let newId = `section-${i+1}`;
  code = code.replace(new RegExp(`id="${oldId}"`, 'g'), `id="${newId}"`);
  
  // Also replace the headings e.g. "9. " to "10. "
  // 9. Pre-Go-Live Checklists -> 9. Bank Information Collection Template -> 10. Bank Information Collection Template
  let oldHeading = `${i}. `;
  let newHeading = `${i+1}. `;
  // Only replace headings that start with the number and a dot, in the specific lines
}
fs.writeFileSync('src/components/HandbookContent.tsx.new', code);

const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// Replace section IDs and Headings
code = code.replace(/id="section-9"/g, 'id="section-10"');
code = code.replace(/9\. Bank Information Collection Template/g, '10. Bank Information Collection Template');
code = code.replace(/Section 9/g, 'Section 10');

code = code.replace(/id="section-8"/g, 'id="section-9"');
code = code.replace(/8\. Pre-Go-Live Checklists/g, '9. Pre-Go-Live Checklists');
code = code.replace(/Section 8/g, 'Section 9');

code = code.replace(/id="section-7"/g, 'id="section-8"');
code = code.replace(/7\. Ticketing & Support Flow/g, '8. Ticketing & Support Flow');
code = code.replace(/Section 7/g, 'Section 8');

code = code.replace(/id="section-6"/g, 'id="section-7"');
code = code.replace(/6\. Merchant & Agent Onboarding Workflows/g, '7. Merchant & Agent Onboarding Workflows');
code = code.replace(/Section 6/g, 'Section 7');

code = code.replace(/id="section-5"/g, 'id="section-6"');
code = code.replace(/5\. Security & Infrastructure Checklist/g, '6. Security & Infrastructure Checklist');
code = code.replace(/Section 5/g, 'Section 6');

code = code.replace(/id="section-4"/g, 'id="section-5"');
code = code.replace(/4\. Technical Integration/g, '5. Technical Integration');
code = code.replace(/Section 4/g, 'Section 5');

fs.writeFileSync('src/components/HandbookContent.tsx', code);

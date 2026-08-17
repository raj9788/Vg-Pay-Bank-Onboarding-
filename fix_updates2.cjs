const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// 6. Pre-Go-Live Checklists
const preGoLiveOld = /Initial <code className="bg-white\/10 px-1 rounded text-brand-accent font-mono text-xs">BANK_ADMIN<\/code> user generated and credentials securely handed over\./;
const preGoLiveNew = `Initial <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">PSP_ADMIN (Bank Admin)</code> user generated and credentials securely handed over.`;
code = code.replace(preGoLiveOld, preGoLiveNew);

// 7. Bank Information Collection Template
const infoOld = /<li><strong className="text-brand-text">Egress IPs for inbound API calls to VG Pay:<\/strong><\/li>\s*<li><strong className="text-brand-text">Technical Lead \(Name\/Email\/Phone\):<\/strong><\/li>/;
const infoNew = `<li><strong className="text-brand-text">Egress IPs for inbound API calls to VG Pay:</strong></li>
            <li><strong className="text-brand-text">Bank's Target Webhook URL (If applicable):</strong></li>
            <li><strong className="text-brand-text">Public Key / Certificate Contacts (For mTLS):</strong></li>
            <li><strong className="text-brand-text">Technical Lead (Name/Email/Phone):</strong></li>`;
code = code.replace(infoOld, infoNew);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

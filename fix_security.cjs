const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const regex = /<li className="flex items-start hover:bg-brand-text\/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">\s*<div className="bg-white\/10 p-2 rounded-full mt-0\.5">\s*<div className="w-2 h-2 bg-amber-500 rounded-full"><\/div>\s*<\/div>\s*<div>\s*<strong className="text-brand-text block">Network Whitelisting<\/strong>\s*<span className="text-brand-text-muted text-sm">The Bank must whitelist VG Pay's Egress IPs to receive callbacks \(if applicable\) and VG Pay will whitelist the Bank's IPs for inbound API calls\.<\/span>\s*<\/div>\s*<\/li>\s*<\/ul>/;

const newSecurity = `<li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Network Whitelisting</strong>
              <span className="text-brand-text-muted text-sm">The Bank must whitelist VG Pay's Egress IPs to receive callbacks (if applicable) and VG Pay will whitelist the Bank's IPs for inbound API calls.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Data Retention & PII Lifecycle</strong>
              <span className="text-brand-text-muted text-sm">VG Pay acts strictly as a pass-through notification layer. Transaction logs containing PII (like Payer VPA) are retained in secure storage for 5 years for dispute resolution, after which they are archived and subsequently purged, in strict adherence to banking data lifecycle regulations (e.g., RBI KYC Master Direction and PMLA Rules).</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">High Availability & Disaster Recovery</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay backend leverages a Multi-AZ (Availability Zone) architecture on AWS to ensure high availability. Specifics regarding Disaster Recovery (DR), including the exact Recovery Time Objective (RTO) and Recovery Point Objective (RPO), are currently being finalized and will be detailed in the formal SLA agreement.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Immutable Audit Trails</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay backend maintains strict, immutable audit logs for all administrative actions. If a Bank Admin (<code className="bg-white/10 px-1 font-mono rounded">PSP_ADMIN</code>) deletes a merchant, changes a billing plan, or unassigns a device, the system permanently logs the exact timestamp, IP address, and user ID of who performed the action to fully satisfy internal bank audits.</span>
            </div>
          </li>
        </ul>`;

if (regex.test(code)) {
    code = code.replace(regex, newSecurity);
    console.log("Replaced Security");
} else {
    console.log("Failed Security regex");
}
fs.writeFileSync('src/components/HandbookContent.tsx', code);

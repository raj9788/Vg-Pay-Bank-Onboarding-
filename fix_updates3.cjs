const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const technicalDetailsOld = `<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Egress IPs for inbound API calls to VG Pay</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={2} placeholder="Comma separated IPs"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">`;

const technicalDetailsNew = `<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Egress IPs for inbound API calls to VG Pay</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={2} placeholder="Comma separated IPs"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Bank's Target Webhook URL (If applicable)</span>
              <input type="url" className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="https://" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Public Key / Certificate Contacts (For mTLS)</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={2} placeholder="Contact info or details"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">`;

code = code.replace(technicalDetailsOld, technicalDetailsNew);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

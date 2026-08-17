const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// 1. Title Page / Metadata
const titleOld = `<p className="text-xl text-brand-text-muted max-w-2xl mx-auto mt-6">
          The Complete Master Document for Bank Integrations
        </p>
      </div>`;
const titleNew = `<p className="text-xl text-brand-text-muted max-w-2xl mx-auto mt-6">
          The Complete Master Document for Bank Integrations
        </p>
        <div className="flex flex-col items-center justify-center gap-1 mt-8 text-sm font-medium text-brand-text-dim text-center">
            <span className="font-bold text-brand-text">Initial Draft</span>
            <span>Version: 1.0</span>
            <span>Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>`;
code = code.replace(titleOld, titleNew);

// 2. Phase 3: Technical Integration
const phase3Old = `<h4 className="text-lg font-bold text-brand-text">Phase 3: Technical Integration (Week 3 - 4)</h4>`;
const phase3New = `<h4 className="text-lg font-bold text-brand-text">Phase 3: Technical Integration (Week 3 - 4)</h4>
              <p className="text-sm text-brand-text-muted italic mt-1">
                (Note: This timeline is highly dependent on the readiness and release cycle of the Bank's Core Banking System or Switch vendor).
              </p>`;
code = code.replace(phase3Old, phase3New);

// 3. User Hierarchy (MERCHANT to PSP_MERCHANT)
const userHierarchyOld = `<h4 className="font-bold text-brand-text text-lg flex items-center gap-2 mb-2"><Smartphone className="w-5 h-5 text-amber-500" /> MERCHANT</h4>`;
const userHierarchyNew = `<h4 className="font-bold text-brand-text text-lg flex items-center gap-2 mb-2"><Smartphone className="w-5 h-5 text-amber-500" /> PSP_MERCHANT (Merchant)</h4>`;
code = code.replace(userHierarchyOld, userHierarchyNew);

// 4. DMS Web Portal
const dmsOld = /<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3\.4 Device Management System \(DMS\) Web Portal<\/h3>\s*<p className="text-brand-text-muted leading-relaxed text-justify">\s*While field agents use mobile applications, Bank Operations teams \(<code className="bg-white\/10 px-1 font-mono rounded text-sm">PSP_ADMIN<\/code>\) are provided access to a dedicated <strong>Device Management System \(DMS\) Web Portal<\/strong> hosted by the hardware partner\. This desktop dashboard allows Bank administrators to monitor fleet health in real-time \(e\.g\., devices with low battery or offline status\), download comprehensive MIS reports, and manage their agents at scale\.\s*<\/p>/;
const dmsNew = `<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.4 Device Management System (DMS) Web Portal [Future Scope / Under Discussion]</h3>
          <p className="text-brand-text-muted leading-relaxed text-justify mb-4">
            <strong className="text-brand-text italic">Note:</strong> <em className="text-brand-text-dim">The DMS Web Portal is a future feature managed by our hardware partner. Its availability is currently under discussion.</em>
          </p>
          <p className="text-brand-text-muted leading-relaxed text-justify">
            While field agents use mobile applications, Bank Operations teams (<code className="bg-white/10 px-1 font-mono rounded text-sm">PSP_ADMIN</code>) may in the future be provided access to a dedicated <strong>Device Management System (DMS) Web Portal</strong> hosted by the hardware partner. This desktop dashboard would allow Bank administrators to monitor fleet health in real-time (e.g., devices with low battery or offline status), download comprehensive MIS reports, and manage their agents at scale.
          </p>`;
code = code.replace(dmsOld, dmsNew);

// 5. DR
const drOld = `Recovery Point Objective (RPO), are currently being finalized and will be detailed in the formal SLA agreement.</span>`;
const drNew = `Recovery Point Objective (RPO), are currently being finalized and will be detailed in the formal SLA agreement. <strong className="text-brand-text">[Placeholder: RTO/RPO values to be defined in SLA]</strong></span>`;
code = code.replace(drOld, drNew);

// 6. Pre-Go-Live Checklists
const preGoLiveOld = `<li>Initial <code className="bg-white/10 px-1 font-mono rounded">BANK_ADMIN</code> user generated and credentials securely handed over.</li>`;
const preGoLiveNew = `<li>Initial <code className="bg-white/10 px-1 font-mono rounded">PSP_ADMIN (Bank Admin)</code> user generated and credentials securely handed over.</li>`;
code = code.replace(preGoLiveOld, preGoLiveNew);

// 7. Bank Information Collection Template
const infoOld = `<li>Egress IPs for inbound API calls to VG Pay:</li>
            <li>Technical Lead (Name/Email/Phone):</li>`;
const infoNew = `<li>Egress IPs for inbound API calls to VG Pay:</li>
            <li>Bank's Target Webhook URL (If applicable):</li>
            <li>Public Key / Certificate Contacts (For mTLS):</li>
            <li>Technical Lead (Name/Email/Phone):</li>`;
code = code.replace(infoOld, infoNew);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const s7start = code.indexOf('{/* Section 7 */}');
const s8start = code.indexOf('{/* Section 8 */}');

if (s7start !== -1 && s8start !== -1) {
  const newS7 = `      {/* Section 7 */}
      <section id="section-7" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          7. Merchant & Agent Onboarding Workflows
        </h2>
        <p className="leading-relaxed">
          The onboarding process encompasses creating administrative roles and field agents, leading up to merchant registration via the <strong>VG Pay Agent App</strong>.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">7.1 Agent Provisioning Workflow</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brand-text marker:text-brand-accent marker:font-bold">
            <li className="pl-2">
              <strong className="text-brand-text block">Super Admin Creation:</strong>
              The VG Pay Super Admin creates a Bank Admin user within the Agent App.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Bank Admin Delegation:</strong>
              The newly created Bank Admin can then onboard other bank personnel, 3rd party vendors, or direct field agents.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Merchant Onboarding Power:</strong>
              Both the Bank Admins and the field Agents have the authority to onboard merchants directly.
            </li>
          </ol>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">7.2 Merchant Onboarding Steps</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brand-text marker:text-brand-accent marker:font-bold">
            <li className="pl-2">
              <strong className="text-brand-text block">Merchant Registration (e-KYC):</strong>
              The Merchant is assumed to already have a KYC-verified bank account. The Agent visits the shop, enters basic details (Business Name, Phone, Address) into the Agent App, and securely captures the merchant's <strong>Digital Signature</strong> on-screen to legally authorize the onboarding onto VG Pay.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Approval:</strong>
              The VG Pay backend registers the merchant. The Merchant's status is set to <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">APPROVED</code>.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Device Mapping:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li>Agent scans the QR code on the physical Soundbox.</li>
                <li>The app calls <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">/api/devices/assign</code> with <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">merchantId</code> and <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">deviceSerialNumber</code>.</li>
                <li>The backend maps the device in the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">DeviceView</code> table.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Activation:</strong>
              The Soundbox connects to the MQTT broker, downloads initial config, and is ready for the first transaction.
            </li>
          </ol>
        </div>
      </section>\n`;
  code = code.substring(0, s7start) + newS7 + code.substring(s8start);
  fs.writeFileSync('src/components/HandbookContent.tsx', code);
}

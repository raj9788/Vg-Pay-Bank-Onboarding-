const fs = require('fs');
let code = fs.readFileSync('src/components/ComplianceContent.tsx', 'utf8');

// Add Lucide imports
code = code.replace(
    "import { ShieldCheck, Server, Lock, CheckCircle2 } from 'lucide-react';",
    "import { ShieldCheck, Server, Lock, CheckCircle2, ListTodo, CheckSquare } from 'lucide-react';"
);

const newSection = `        </section>

        {/* Section 4: Actionable Checklist for IT & Ops */}
        <section className="space-y-6 pt-8 border-t border-brand-border/50">
          <div className="flex items-center gap-3 border-b border-brand-border pb-2">
            <ListTodo className="w-6 h-6 text-brand-accent" />
            <h2 className="text-2xl font-serif text-brand-text">4. Compliance Implementation Checklist</h2>
          </div>
          
          <div className="bg-brand-panel p-6 rounded-xl border border-brand-border">
            <p className="text-brand-text-muted mb-6">
              Actionable items for the IT & Operations teams to achieve and maintain these regulatory standards:
            </p>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-brand-text flex items-center gap-2">
                  <span className="text-brand-accent">A.</span> Data Encryption & Privacy
                </h3>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Encrypt PII at Rest:</strong> Use AES-256 encryption in the database for Merchant VPAs, Phone Numbers, and Account Details.</span>
                  </li>
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Mask PII in UI:</strong> Enforce frontend masking on the Agent App and DMS Portal (e.g., displaying <code className="bg-white/10 px-1 rounded text-sm font-mono">******1234@upi</code> instead of the full VPA).</span>
                  </li>
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Automated Log Purging:</strong> Deploy scheduled chron jobs to permanently delete raw transaction logs older than 5 years to satisfy DPDP Act regulations.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-brand-text flex items-center gap-2">
                  <span className="text-brand-accent">B.</span> API & Network Security
                </h3>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>HMAC Key Rotation:</strong> Establish an automated pipeline or runbook to rotate the pre-shared secret keys for Bank Webhooks every 90 days.</span>
                  </li>
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>VAPT Remediation:</strong> Engage a CERT-In empaneled auditor. All vulnerabilities marked as 'Critical' or 'High' must be patched prior to production Go-Live.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-brand-text flex items-center gap-2">
                  <span className="text-brand-accent">C.</span> Mobile & Hardware Integrity
                </h3>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Enforce Biometrics:</strong> Ensure FaceID/Fingerprint login is mandatory on the Agent application to prevent unauthorized merchant onboarding.</span>
                  </li>
                  <li className="flex items-start gap-2 text-brand-text-muted">
                    <CheckSquare className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                    <span><strong>Secure FOTA:</strong> Verify that Firmware Over-The-Air updates downloaded by the Soundbox are TLS-encrypted and cryptographically signed by the OEM.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
`;

code = code.replace(
    /        <\/section>\s*<\/motion\.div>\s*<\/div>\s*\);\s*}/,
    newSection
);

fs.writeFileSync('src/components/ComplianceContent.tsx', code);

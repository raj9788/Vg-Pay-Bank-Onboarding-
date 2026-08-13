const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const regex = /<p className="text-sm text-brand-text-muted">The end-user receiving payments\. Currently, the Merchant App is strictly for <strong>viewing transaction history<\/strong>\. Since funds settle directly into the merchant's bank account, the app is read-only regarding financial operations\.<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/motion\.section>/;

const newDms = `<p className="text-sm text-brand-text-muted">The end-user receiving payments. Currently, the Merchant App is strictly for <strong>viewing transaction history</strong>. Since funds settle directly into the merchant's bank account, the app is read-only regarding financial operations.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.4 Device Management System (DMS) Web Portal</h3>
          <p className="text-brand-text-muted leading-relaxed text-justify">
            While field agents use mobile applications, Bank Operations teams (<code className="bg-white/10 px-1 font-mono rounded text-sm">PSP_ADMIN</code>) are provided access to a dedicated <strong>Device Management System (DMS) Web Portal</strong> hosted by the hardware partner. This desktop dashboard allows Bank administrators to monitor fleet health in real-time (e.g., devices with low battery or offline status), download comprehensive MIS reports, and manage their agents at scale.
          </p>
        </div>
      </motion.section>`;

if (regex.test(code)) {
    code = code.replace(regex, newDms);
    console.log("Replaced DMS");
} else {
    console.log("Failed DMS regex");
}
fs.writeFileSync('src/components/HandbookContent.tsx', code);

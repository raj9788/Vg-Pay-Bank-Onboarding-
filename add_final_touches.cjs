const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// 1. DMS Web Portal
const hierarchyEndRegex = /<li className="pl-2">\s*<strong className="text-brand-text block">MERCHANT:<\/strong>[\s\S]*?<\/li>\s*<\/ul>\s*<\/div>\s*<\/motion\.section>/;
const dmsSection = `<li className="pl-2">
              <strong className="text-brand-text block">MERCHANT:</strong>
              The end-user receiving payments. Currently, the Merchant App is strictly for <strong>viewing transaction history</strong>. Since funds settle directly into the merchant's bank account, the app is read-only regarding financial operations.
            </li>
          </ul>
        </div>
        
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.4 Device Management System (DMS) Web Portal</h3>
          <p className="text-brand-text-muted leading-relaxed text-justify">
            While field agents use mobile applications, Bank Operations teams (<code className="bg-white/10 px-1 font-mono rounded text-sm">PSP_ADMIN</code>) are provided access to a dedicated <strong>Device Management System (DMS) Web Portal</strong> hosted by the hardware partner. This desktop dashboard allows Bank administrators to monitor fleet health in real-time (e.g., devices with low battery or offline status), download comprehensive MIS reports, and manage their agents at scale.
          </p>
        </div>
      </motion.section>`;
if (hierarchyEndRegex.test(code)) {
    code = code.replace(hierarchyEndRegex, dmsSection);
    console.log("Added DMS Portal");
} else {
    console.log("Failed to match DMS Portal");
}

// 2. Tech Specs (FOTA & Language)
const techSpecsRegex = /<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4\.3 Technical Specifications<\/h3>\s*<ul className="list-disc pl-5 space-y-2 text-brand-text-muted">[\s\S]*?<\/ul>/;
const newTechSpecs = `<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.3 Technical Specifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>Hardware:</strong> Quectel EC200U Module, 4G LTE Cat-1 (2G fallback), 2000mAh Li-ion battery (3V cutoff).</li>
            <li><strong>Firmware & FOTA:</strong> 30-min Heartbeat interval, OTA security & firmware integrity. To prevent business disruption, Firmware Over-The-Air (FOTA) updates are strictly pushed during a maintenance window (1:00 AM – 4:00 AM IST). The device must have at least 30% battery to initiate the update.</li>
            <li><strong>Compliance:</strong> BIS CRS, IEC 62133 / IS 16046 (Battery safety), IS 13252.</li>
            <li><strong>Multi-Language Support:</strong> The device supports multiple regional languages (e.g., Hindi, Marathi, English). The default language is configured by the Agent during the initial onboarding via the Agent App. If a merchant wishes to change the language later, they can raise a support ticket, and an Agent can update it remotely via the provisioning app.</li>
          </ul>`;
if (techSpecsRegex.test(code)) {
    code = code.replace(techSpecsRegex, newTechSpecs);
    console.log("Added Tech Specs");
} else {
    console.log("Failed to match Tech Specs");
}

// 3. CBS Reversals
const webhookStartRegex = /<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5\.2 Payment Success Webhook \(Bank &rarr; VG Pay\)<\/h3>\s*<p className="leading-relaxed text-brand-text-muted text-justify">\s*When a UPI payment successfully credits the merchant's account, the Bank must immediately call VG Pay's Payment Service to trigger the Soundbox alert\. The VG Pay system exposes two distinct integration pathways depending on the bank's capabilities\.\s*<\/p>/;
const newWebhookStart = `<h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.2 Payment Success Webhook (Bank &rarr; VG Pay)</h3>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            When a UPI payment successfully credits the merchant's account, the Bank must immediately call VG Pay's Payment Service to trigger the Soundbox alert. The VG Pay system exposes two distinct integration pathways depending on the bank's capabilities.
          </p>

          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
            <h5 className="font-bold text-red-400 mb-2">Disclaimer: CBS Reversals & Dispute Resolution</h5>
            <p className="text-brand-text-muted text-sm text-justify">The VG Pay platform is strictly a one-way, success-only notification layer. If the Bank's Core Banking System (CBS) registers a success, triggers the VG Pay webhook, and the Soundbox announces the payment, but the banking network subsequently reverses the transaction (a false positive), VG Pay <strong>does not</strong> support a "Reversal" audio cue. All dispute resolution, reversals, and refund management remain entirely within the Bank's domain.</p>
          </div>`;
if (webhookStartRegex.test(code)) {
    code = code.replace(webhookStartRegex, newWebhookStart);
    console.log("Added CBS Reversals");
} else {
    console.log("Failed to match CBS Reversals");
}

fs.writeFileSync('src/components/HandbookContent.tsx', code);

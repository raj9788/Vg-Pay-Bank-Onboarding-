const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// 1. Add 4.5 SIM, RMA & Inventory Logistics
const simLogisticsStr = `
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.5 SIM, RMA & Inventory Logistics</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>SIM Provisioning & Data Plans:</strong> VG Pay provides the S1 Soundbox pre-fitted with an M2M 4G SIM card. VG Pay bears all costs for the monthly data recharges. The Bank is not responsible for telecom logistics.</li>
            <li><strong>Device Replacements (RMA):</strong> If a device is found defective (e.g., hardware failure, speaker issues), VG Pay will bear the courier and replacement costs. The field agent must raise a replacement ticket, and a new device will be dispatched.</li>
            <li><strong>Merchant Offboarding:</strong> If a merchant closes their account or violates the Terms of Service, the device must be returned to VG Pay. Upon receipt, VG Pay operations will factory reset the device, change its status to <code className="bg-white/10 px-1 font-mono rounded">NEW</code>, and it will be available for re-mapping to a different merchant.</li>
            <li><strong>Inactive Merchants:</strong> If a merchant's account is marked as <code className="bg-white/10 px-1 font-mono rounded">INACTIVE</code> but the device is not physically returned, the system will flag the device as <code className="bg-white/10 px-1 font-mono rounded">INACTIVE</code>. The Soundbox will immediately cease receiving audio confirmations, and its network access will be suspended.</li>
          </ul>
        </div>
      </motion.section>`;
code = code.replace("</ul>\n        </div>\n      </motion.section>", "</ul>\n        </div>" + simLogisticsStr);

// 2. Add Webhook Retry & EOD
const pathway2EndRegex = /<\/div>\n          <\/div>\n        <\/div>\n\n        <div className="space-y-4 pt-8">\n          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5\.3 Merchant Management/;

const newPathway2End = `</div>
          </div>
          
          <div className="space-y-4 pt-6">
            <h4 className="text-xl font-bold text-brand-text">Webhook Retry Policy</h4>
            <p className="text-brand-text-muted leading-relaxed">In the event that the VG Pay backend is temporarily unreachable or returns an HTTP <code className="bg-white/10 px-1 font-mono rounded">5xx</code> response, the Bank's switch must implement an <strong>Exponential Backoff Retry Mechanism</strong>. Industry standard recommends retrying the webhook delivery up to 3 times (e.g., at 5 seconds, 15 seconds, and 45 seconds).</p>
          </div>

          <div className="space-y-4 pt-4">
            <h4 className="text-xl font-bold text-brand-text">End-of-Day (EOD) Reconciliation</h4>
            <p className="text-brand-text-muted leading-relaxed">To guarantee 100% reporting accuracy and account for any webhooks dropped due to prolonged network outages, the Bank must integrate with VG Pay's EOD Reconciliation process. At midnight (T+1), the Bank will upload a CSV file containing all successful transactions for that day (or trigger an automated Sync API). VG Pay processes this file to reconcile and flag any missing audio alerts.</p>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.3 Authentication & Login Flow (REST API)</h3>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            All REST APIs (excluding webhooks) require a valid JWT Bearer Token. Bank agents and merchants obtain this token via a secure OTP-based login flow:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-brand-text-muted marker:font-bold">
            <li className="pl-2"><strong>Initiate Login:</strong> The client application sends the user's phone number and a Google reCAPTCHA token to the <code className="bg-white/10 px-1 font-mono rounded text-sm">POST /api/auth/login</code> endpoint. The backend verifies the reCAPTCHA token to prevent bot attacks.</li>
            <li className="pl-2"><strong>OTP Verification:</strong> Upon successful reCAPTCHA validation, the backend generates and sends a One-Time Password (OTP) to the user's registered mobile number via SMS.</li>
            <li className="pl-2"><strong>MPIN Setup/Login:</strong> The user enters the OTP. For first-time logins, the user is prompted to set a secure MPIN. For subsequent logins, the user can quickly authenticate using just their phone number and MPIN.</li>
            <li className="pl-2"><strong>Token Generation:</strong> Upon successful verification, the backend issues a JWT (JSON Web Token) with an expiration time (e.g., 24 hours) and specific authorities. This token must be included in the <code className="bg-white/10 px-1 font-mono rounded text-sm">Authorization: Bearer &lt;token&gt;</code> header for all subsequent API requests.</li>
          </ol>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.4 Merchant Management`;

code = code.replace(pathway2EndRegex, newPathway2End);

// Renumber remaining 5.x sections
code = code.replace("5.4 Device Mapping", "5.5 Device Mapping");
code = code.replace("5.5 Standard HTTP Responses", "5.6 Standard HTTP Responses");

// 3. Add Secret Key Rotation to Security list
const networkWhitelistRegex = /<li className="flex items-start hover:bg-brand-text\/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">\s*<div className="bg-white\/10 p-2 rounded-full mt-0.5">\s*<div className="w-2 h-2 bg-amber-500 rounded-full"><\/div>\s*<\/div>\s*<div>\s*<strong className="text-brand-text block">Network Whitelisting<\/strong>/;

const secretKeyStr = `<li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Secret Key Rotation</strong>
              <span className="text-brand-text-muted text-sm">To maintain compliance with industry standards, the HMAC pre-shared secret must be rotated every 90 days. During rotation, there is a 24-hour overlap grace period where both the old and new keys are valid to prevent any webhook drop-offs or downtime.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Network Whitelisting</strong>`;

code = code.replace(networkWhitelistRegex, secretKeyStr);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

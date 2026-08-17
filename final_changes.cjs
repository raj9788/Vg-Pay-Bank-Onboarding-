const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const oldBilling = `<li><strong>Billing & Monetization:</strong> Upon mapping, a billing model is assigned to the merchant. VG Pay offers multiple flexible models, such as a flat upfront fee (e.g., INR 1650) with a low monthly rental (e.g., INR 49), or a lower upfront fee (e.g., INR 999) with a higher monthly rental (e.g., INR 99). The Bank's Core Banking System is responsible for auto-debiting this fee based on the agreed terms.</li>
                <li><em className="text-brand-text-dim text-sm">Note: During this first assignment, the backend automatically provisions a <code className="bg-white/10 px-1 font-mono rounded">PSP_MERCHANT</code> user login for the merchant to access the Merchant App.</em></li>`;
const newBilling = `<li><strong>Billing & Monetization (Draft - To be Reviewed & Finalized):</strong> <em className="text-brand-text-dim">Please note: The pricing models presented here are currently a draft and are subject to review and finalization.</em> Upon mapping, a billing model is assigned to the merchant. VG Pay offers multiple flexible models, such as a flat upfront fee (e.g., INR 1650) with a low monthly rental (e.g., INR 49), or a lower upfront fee (e.g., INR 999) with a higher monthly rental (e.g., INR 99). The Bank's Core Banking System is responsible for auto-debiting this fee based on the agreed terms.</li>
                <li><em className="text-brand-text-dim text-sm">Note: During this first assignment, the backend automatically provisions a user login with the <code className="bg-white/10 px-1 font-mono rounded">PSP_MERCHANT</code> role for the merchant to access the Merchant App.</em></li>`;
code = code.replace(oldBilling, newBilling);

const oldSLA = `<h4 className="text-lg font-bold text-brand-text">Service Level Agreements (SLAs)</h4>
             <p className="text-brand-text-muted text-sm mb-2">VG Pay adheres to strict SLAs based on the priority and business impact of the reported issue. The SLA timer begins immediately upon ticket creation.</p>`;
const newSLA = `<h4 className="text-lg font-bold text-brand-text">Service Level Agreements (SLAs) [Draft - Under Review]</h4>
             <p className="text-brand-text-muted text-sm italic mb-2">Please note: The SLA timelines presented below are currently a draft and are subject to finalization with the Bank's operational team.</p>
             <p className="text-brand-text-muted text-sm mb-2">VG Pay adheres to strict SLAs based on the priority and business impact of the reported issue. The SLA timer begins immediately upon ticket creation.</p>`;
code = code.replace(oldSLA, newSLA);

const oldEscalation = `<ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-sm">
                <li><strong>L1 (Frontline Support):</strong> Initial troubleshooting. Escalates to L2 if SLA is at risk.</li>
                <li><strong>L2 (Technical Support):</strong> Advanced diagnostics and RMA approvals. Escalates to L3 for product defects.</li>
                <li><strong>L3 (Engineering / OEM):</strong> Firmware patches and product fixes. Escalates to Management for repeated failures.</li>
                <li><strong>Management:</strong> Handles critical escalations and Bank-level communication for P1/Major incidents.</li>
             </ul>`;
const newEscalation = `<ul className="list-disc pl-5 space-y-4 text-brand-text-muted text-sm">
                <li className="space-y-1">
                  <strong>L1 (Frontline Support):</strong> Initial troubleshooting and basic queries. Resolves common issues and escalates to L2 if the issue remains unresolved or SLA is at risk.
                  <ul className="list-[circle] pl-5 text-brand-text-dim mt-1">
                    <li><em className="text-brand-text-dim">Examples:</em> Guiding a merchant on how to restart the soundbox, answering queries about settlement timelines, or assisting with basic app login issues.</li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>L2 (Technical Support):</strong> Advanced diagnostics and hardware troubleshooting. Handles issues requiring log analysis, network debugging, and processes RMA (Return Merchandise Authorization) approvals. Escalates to L3 for product defects.
                  <ul className="list-[circle] pl-5 text-brand-text-dim mt-1">
                    <li><em className="text-brand-text-dim">Examples:</em> Analyzing SIM connectivity dropouts, investigating missing transaction notifications, or approving a physical replacement for a soundbox with a damaged speaker.</li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>L3 (Engineering / OEM):</strong> Deep technical investigation, firmware patches, and systemic product fixes. Addresses core platform outages or backend service failures. Escalates to Management for repeated widespread failures.
                  <ul className="list-[circle] pl-5 text-brand-text-dim mt-1">
                    <li><em className="text-brand-text-dim">Examples:</em> Pushing an OTA (Over-The-Air) firmware update to fix a bug causing dropped MQTT connections, or resolving an API integration failure with the Bank's Core Banking System.</li>
                  </ul>
                </li>
                <li className="space-y-1">
                  <strong>Management:</strong> Handles critical escalations, business impact analysis, and Bank-level communication for P1/Major incidents. Manages partner relationships and ensures SLA adherence across all tiers.
                  <ul className="list-[circle] pl-5 text-brand-text-dim mt-1">
                    <li><em className="text-brand-text-dim">Examples:</em> Coordinating with the Bank IT team during a massive gateway downtime, managing communications, and issuing official RCA (Root Cause Analysis) reports post-incident.</li>
                  </ul>
                </li>
             </ul>`;
code = code.replace(oldEscalation, newEscalation);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

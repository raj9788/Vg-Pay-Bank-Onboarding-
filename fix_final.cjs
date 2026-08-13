const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// 1. API Rate Limiting
const rateLimitSection = `
        <div className="space-y-4 pt-8">
          <h4 className="text-xl font-bold text-brand-text">API Rate Limiting & Scalability</h4>
          <p className="text-brand-text-muted leading-relaxed text-justify">
            By default, there are no strict rate limits enforced on the REST API Gateway. The underlying webhook infrastructure (hosted on AWS) is highly scalable and currently supports up to <strong>1,000,000 Transactions Per Second (TPS)</strong>. If the Bank requires specific throttling limits to protect its own downstream services, this can be configured at the VG Pay API Gateway layer upon request.
          </p>
        </div>
`;

code = code.replace(
  '<p className="italic text-sm text-brand-text-dim">Note: The exact UAT and PROD URLs for each specific microservice required for your integration will be provided directly by the VG Pay team during Phase 2.</p>\n        </div>',
  '<p className="italic text-sm text-brand-text-dim">Note: The exact UAT and PROD URLs for each specific microservice required for your integration will be provided directly by the VG Pay team during Phase 2.</p>\n        </div>' + rateLimitSection
);

// 2. Merchant Onboarding Steps
const oldOnboardingRegex = /<li className="pl-2">\s*<strong className="text-brand-text block">Merchant Registration \(e-KYC\):<\/strong>[\s\S]*?<\/li>\s*<li className="pl-2">\s*<strong className="text-brand-text block">Approval:<\/strong>[\s\S]*?<\/li>\s*<li className="pl-2">\s*<strong className="text-brand-text block">Device Mapping:<\/strong>\s*<ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">\s*<li>Agent scans the QR code on the physical Soundbox.<\/li>\s*<li>The app calls <code className="bg-white\/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST \/api\/merchant-devices<\/code> passing the <code className="bg-white\/10 px-1.5 py-0.5 rounded text-sm font-mono">merchantId<\/code> and the <code className="bg-white\/10 px-1.5 py-0.5 rounded text-sm font-mono">deviceId<\/code>.<\/li>\s*<li>The backend validates the mapping and creates a record in the <code className="bg-white\/10 px-1.5 py-0.5 rounded text-sm font-mono">MerchantDevice<\/code> table, marking the device as <code className="bg-white\/10 px-1.5 py-0.5 rounded text-sm font-mono">ASSIGNED<\/code>.<\/li>\s*<li><em className="text-brand-text-dim text-sm">Note: During this first assignment, the backend automatically provisions a <code className="bg-white\/10 px-1 font-mono rounded">PSP_MERCHANT<\/code> user login for the merchant to access the Merchant App.<\/em><\/li>\s*<\/ul>\s*<\/li>/;

const newOnboarding = `<li className="pl-2">
              <strong className="text-brand-text block">Merchant Registration (Pre-Verified KYC):</strong>
              Because the Merchant must already hold a verified bank account with the Bank itself, strict KYC and settlement account verifications (like Penny Drop) are natively handled by the Core Banking System prior to this process. Therefore, a Maker-Checker flow is not required in VG Pay. The Agent enters basic details (Business Name, Phone, Address), securely captures the merchant's <strong>Digital Signature</strong> on-screen, and the backend registers the merchant, automatically setting the status to <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">ACTIVE</code>.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Device Mapping:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li>Agent scans the QR code on the physical Soundbox.</li>
                <li>The app calls <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/merchant-devices</code> with the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">merchantId</code> and <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">deviceId</code>.</li>
                <li>The backend validates the mapping and creates a record in the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MerchantDevice</code> table, marking the device as <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">ASSIGNED</code>.</li>
                <li><strong>Billing & Monetization:</strong> Upon mapping, a billing model is assigned to the merchant. VG Pay offers multiple flexible models, such as a flat upfront fee (e.g., INR 1650) with a low monthly rental (e.g., INR 49), or a lower upfront fee (e.g., INR 999) with a higher monthly rental (e.g., INR 99). The Bank's Core Banking System is responsible for auto-debiting this fee based on the agreed terms.</li>
                <li><em className="text-brand-text-dim text-sm">Note: During this first assignment, the backend automatically provisions a <code className="bg-white/10 px-1 font-mono rounded">PSP_MERCHANT</code> user login for the merchant to access the Merchant App.</em></li>
              </ul>
            </li>`;

if (oldOnboardingRegex.test(code)) {
    code = code.replace(oldOnboardingRegex, newOnboarding);
    console.log("Replaced Onboarding.");
} else {
    console.log("Failed to match oldOnboardingRegex.");
}

fs.writeFileSync('src/components/HandbookContent.tsx', code);

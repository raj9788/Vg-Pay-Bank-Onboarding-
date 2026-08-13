const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// Update Phase 3
code = code.replace(
  /<li><strong>Webhook Integration \(Bank as PSP\):<\/strong> Bank develops the outbound event push to VG Pay's <code className="[^"]+">\/api\/transactions<\/code> endpoint for payment successes\.<\/li>/,
  `<li><strong>Webhook Integration (Bank as PSP):</strong> Bank develops the outbound event push to VG Pay's <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">/api/transactions</code> (or the Razorpay-compatible webhook) for payment successes.</li>\n                <li><strong>Zero Ticketing Integration:</strong> No development is required for the ticketing system, as it is handled natively by VG Pay.</li>`
);

// Update Phase 4
code = code.replace(
  /<li><strong>Functional Testing:<\/strong> Simulating Agent onboarding a merchant and mapping a Soundbox\.<\/li>/,
  `<li><strong>Functional Testing:</strong> Simulating Agent onboarding a merchant, mapping a Soundbox, and validating Merchant Bulk Upload CSVs (if applicable).</li>`
);

fs.writeFileSync('src/components/HandbookContent.tsx', code);

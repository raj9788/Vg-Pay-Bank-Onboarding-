      {/* Section 5 */}
      <section id="section-5" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          5. Technical Integration
        </h2>
        <p className="leading-relaxed">
          The core integration requirement is for the Bank (acting as the PSP switch) to push real-time transaction events to VG Pay.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">5.1 Environment URLs</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Main API Gateway:</strong> <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">https://api.vgpayglobal.com/</code></li>
            <li><strong className="text-brand-text">Payment / Transaction Services:</strong> <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">https://payment.vgpayglobal.com/</code></li>
            <li><strong className="text-brand-text">Merchant Services:</strong> <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">https://merchant.vgpayglobal.com/</code></li>
          </ul>
          <p className="text-sm italic text-brand-text-dim mt-2">
            Note: The exact UAT and PROD URLs for each specific microservice required for your integration will be provided directly by the VG Pay team during Phase 2.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">5.2 Payment Success Webhook (Bank &rarr; VG Pay)</h3>
          <p className="leading-relaxed">
            When a UPI payment successfully credits the merchant's account, the Bank must immediately call VG Pay's Payment Service.
          </p>
          
          <div className="bg-brand-accent-bg border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
            <h4 className="text-brand-accent font-bold mb-2">How does the Bank get <code className="font-mono text-sm">deviceId</code> and <code className="font-mono text-sm">merchantId</code>?</h4>
            <p className="text-brand-text-muted text-sm">
              To fulfill the webhook payload requirements, the Bank embeds the VG Pay <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">deviceId</code> and <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">merchantId</code> directly into the static/dynamic UPI QR code parameters (e.g., in the remarks or reference ID fields) generated for the merchant. When a customer scans and pays, these IDs flow through the UPI network to the Bank's switch, which extracts them and forwards them in this webhook.
            </p>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Endpoint:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/transactions</code> (or <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">/api/razorpay/webhook</code> depending on configuration)</li>
            <li><strong className="text-brand-text">Idempotency:</strong> Driven by <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">transactionId</code> or <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">utr</code>. If a duplicate transaction is received, the system will return an HTTP <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-brand-accent">409 Conflict</code> response.</li>
            <li><strong className="text-brand-text">Authentication:</strong> Webhooks are authenticated via HMAC SHA-256 signatures passed in the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">X-Signature</code> (or <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">X-Razorpay-Signature</code>) header.</li>
          </ul>

          <div className="mt-4">
            <p className="font-semibold text-brand-text mb-2">Sample JSON Payload (<code className="text-brand-accent font-mono text-sm">TransactionDTO</code>):</p>
            <pre className="bg-black/30 border border-brand-border p-4 rounded overflow-x-auto text-xs text-brand-text font-mono">
              <code>{`{
  "transactionId": "pay_9Xb8Y7Z6a5B4c",
  "orderId": "order_xyz123",
  "amount": 500.00,
  "currency": "INR",
  "deviceId": 1042,
  "merchantId": 883,
  "payerVpa": "customer@upi",
  "payerName": "John Doe",
  "status": "SUCCESS",
  "utr": "312456789012"
}`}</code>
            </pre>
            <p className="text-sm italic text-brand-text-dim mt-2">
              Note: Upon receiving this payload, VG Pay encrypts the data and publishes it to the specific Soundbox via MQTT to trigger the audio alert.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">5.3 Merchant Management (REST API)</h3>
          <p className="leading-relaxed">
            Agents typically create merchants via the Mobile App, hitting the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/merchants</code> endpoint.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-brand-text mb-2">Sample JSON Payload (<code className="text-brand-accent font-mono text-sm">MerchantDTO</code>):</p>
            <pre className="bg-black/30 border border-brand-border p-4 rounded overflow-x-auto text-xs text-brand-text font-mono">
              <code>{`{
  "businessName": "Sharma Supermarket",
  "contactName": "Rahul Sharma",
  "phoneNumber": "9876543210",
  "email": "rahul@sharma.com",
  "address": "123 Main St, Hinjawadi, Pune",
  "bankPartnerId": 1
}`}</code>
            </pre>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">5.4 Standard Error Codes</h3>
          <p className="leading-relaxed text-brand-text-muted">
            The VG Pay APIs utilize standard HTTP status codes. Expected responses include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">200 OK:</strong> Success / Acknowledged.</li>
            <li><strong className="text-brand-text">400 Bad Request:</strong> Invalid input, missing fields, or validation failures.</li>
            <li><strong className="text-brand-text">401/403 Forbidden:</strong> Access denied or invalid HMAC signature.</li>
            <li><strong className="text-brand-text">404 Not Found:</strong> Requested resource (e.g., Device or Merchant) not found.</li>
            <li><strong className="text-brand-text">409 Conflict:</strong> Duplicate resource (e.g., duplicate <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">transactionId</code> received).</li>
            <li><strong className="text-brand-text">423 Locked:</strong> Account locked due to too many attempts.</li>
            <li><strong className="text-brand-text">500 Internal Server Error:</strong> Unexpected server-side failure.</li>
          </ul>
        </div>
      </section>

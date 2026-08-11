const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const targetStr = `              <div className="flex-1 space-y-2">
                <input type="text" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Name" />
                <input type="email" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Email" />
                <input type="tel" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Phone" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>`;

const newCode = `              <div className="flex-1 space-y-2">
                <input type="text" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Name" />
                <input type="email" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Email" />
                <input type="tel" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Phone" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4 border-t border-brand-border">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Escalation Contacts for Support (L1/L2/L3)</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={3} placeholder="Provide details for L1, L2, and L3 escalation contacts..."></textarea>
            </div>
          </div>
        </div>

        <div className="bg-brand-accent-bg border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
          <h4 className="text-brand-accent font-bold mb-2">NOTE: Future Scope Considerations</h4>
          <p className="text-brand-text-muted text-sm mb-3">
            To support aggressive scaling, VG Pay's roadmap includes expanding the <code className="bg-white/10 px-1 rounded text-brand-accent font-mono">BankPartner</code> configurations. In future releases, this onboarding document will require Banks to provide:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-brand-text-muted marker:text-brand-accent marker:font-bold">
            <li className="pl-2">
              <strong className="text-brand-text">Custom UI Themes & Branding:</strong> Bank logos and HEX colors for white-labeling the Merchant App.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text">Custom SMS/Email Gateways:</strong> Providing your own Twilio/AWS SNS credentials for merchant communications.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text">Bi-directional Webhooks:</strong> Where VG Pay pushes real-time device status (<code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">device.offline</code>, <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">merchant.onboarded</code>) directly to the Bank's systems via HMAC-secured webhooks.
            </li>
          </ol>
        </div>
      </section>
    </div>`;

code = code.replace(targetStr, newCode);
fs.writeFileSync('src/components/HandbookContent.tsx', code);

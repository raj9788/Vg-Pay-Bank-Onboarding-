import React from 'react';
import Mermaid from './Mermaid';
import { ShieldAlert, Info, AlertTriangle, FileText } from 'lucide-react';
import { motion } from 'motion/react';

const swimlaneChart = `
sequenceDiagram
    participant Bank as Bank CBS / IT
    participant VGOps as VG Pay Operations
    participant Dev as VG Pay Backend
    participant Agent as Agent Mobile App
    participant MQTT as Soundbox (MQTT)
    
    Note over Bank, MQTT: Phase 1 & 2: Setup
    Bank->>VGOps: Provide Bank Details for Setup
    VGOps->>Dev: Create BankPartner & BANK_ADMIN
    Dev->>VGOps: Credentials Ready
    VGOps->>Bank: Handover Credentials
    
    Note over Bank, MQTT: Phase 3: Integration
    Bank->>Bank: Develop Webhook Push to VG Pay
    Bank->>Dev: Whitelist PROD IPs
    
    Note over Bank, MQTT: Phase 4: Operations
    Agent->>Dev: Onboard Merchant & Map Device
    Dev-->>Agent: Success
    
    Note over Bank, MQTT: Phase 5: Live Transaction
    Bank->>Dev: POST /api/transactions (payment.success)
    Dev->>Dev: Validate & Extract Device
    Dev->>MQTT: Publish Audio Alert (Encrypted)
`;

const architectureChart = `
graph TD
    subgraph Bank Infrastructure
        CBS[Core Banking System]
        BankSwitch[UPI / Payment Switch]
    end

    subgraph VG Pay Ecosystem
        Gateway[API Gateway]
        PaymentSvc[Payment Service]
        MerchantSvc[Merchant Core Backend]
        NotifSvc[Notification & Firebase]
        MqttBroker[MQTT Broker / Soundbox]
        DB[(Primary Database)]
    end

    subgraph Client Applications
        AgentApp[VG Pay Agent App]
        MerchantApp[VG Pay Merchant App]
    end

    AgentApp -->|REST| Gateway
    MerchantApp -->|REST| Gateway
    Gateway --> MerchantSvc
    MerchantSvc --> DB
    MerchantSvc --> NotifSvc
    
    BankSwitch -->|Webhook Event Push| Gateway
    Gateway --> PaymentSvc
    PaymentSvc --> DB
    PaymentSvc --> MqttBroker
`;

export function HandbookContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[1400px] mx-auto px-6 py-12 lg:px-16 text-brand-text space-y-16 transition-all duration-500 ease-in-out"
    >
      {/* Document Header */}
      <header className="space-y-4 border-b border-brand-border pb-10">
        <h1 className="text-4xl sm:text-5xl font-serif italic font-light tracking-tight text-brand-text">
          VG Pay Bank Onboarding Handbook
        </h1>
        <p className="text-xl text-brand-text-muted font-light">
          The Complete Master Document for Bank Integrations
        </p>
      </header>

      {/* Section 1 */}
      <section id="section-1" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          1. Company Overview
        </h2>
        
        <div className="space-y-4">
          <h3 className="text-lg font-serif italic text-brand-accent">Who We Are</h3>
          <p className="leading-relaxed">
            <strong>Vishwaguru Infotech</strong> is a startup IT Solutioning and consultancy services company with extensive experience in the design, development, implementation, and maintenance of enterprise web and mobile applications. Our primary focus is on eGovernance and Digital Payments. Our founders possess profound experience with global world-class banking and financial institutions.
          </p>
          <p className="leading-relaxed">
            We provide world-class technology solutions to our customers, empowering them to convert business challenges into opportunities. Accepting limitations and going beyond them is our mantra.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">Vision & Mission</h3>
          <ul className="list-disc pl-6 space-y-2 leading-relaxed">
            <li><strong>Motto:</strong> To serve people in eGovernance and digital payments areas.</li>
            <li><strong>Focus:</strong> Design and development of user-friendly and secure web and mobile eGovernance and payment applications.</li>
          </ul>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">The Team</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li className="bg-brand-panel p-4 rounded-xl border border-brand-border">
              <strong className="block text-brand-text text-lg mb-1">Mr. Rajendra Gangarde</strong>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider block mb-2">Founder & CEO</span>
              <span className="text-brand-text-muted text-sm">Technically sophisticated professional with 27+ years of demonstrated experience.</span>
            </li>
            <li className="bg-brand-panel p-4 rounded-xl border border-brand-border">
              <strong className="block text-brand-text text-lg mb-1">Mr. Vikas Modha</strong>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider block mb-2">CTO</span>
              <span className="text-brand-text-muted text-sm">Astute professional with 23+ years of hands-on experience in the Banking industry.</span>
            </li>
            <li className="bg-brand-panel p-4 rounded-xl border border-brand-border">
              <strong className="block text-brand-text text-lg mb-1">Mr. Ravindra Kulkarni</strong>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider block mb-2">GM HR</span>
              <span className="text-brand-text-muted text-sm">23+ years in leading teams and managing testing efforts for efficient project execution.</span>
            </li>
            <li className="bg-brand-panel p-4 rounded-xl border border-brand-border">
              <strong className="block text-brand-text text-lg mb-1">Mr. Deepak Desai</strong>
              <span className="text-brand-accent text-sm font-semibold uppercase tracking-wider block mb-2">Delivery Director</span>
              <span className="text-brand-text-muted text-sm">Results-driven Senior Project Manager with a proven record of delivering projects on time and budget.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          2. High-Level Onboarding Process
        </h2>
        
        <p className="leading-relaxed">
          Welcome to the <strong>VG Pay Bank Onboarding Process</strong>. This handbook maps out every step required to integrate a Tier-2, Cooperative, or Regional Bank into the VG Pay ecosystem as a <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">BankPartner</code>.
        </p>

        <div className="space-y-6 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">Onboarding Journey (Post-Agreement)</h3>
          
          <div className="border-l-2 border-amber-500/30 pl-6 space-y-8 relative">
            
            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-brand-panel"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 1: Initiation & Discovery (Week 1)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Kick-off Meeting:</strong> Alignment on business goals and architecture.</li>
                <li><strong>Information Gathering:</strong> Bank IT completes the Information Collection Template (see Section 9).</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-brand-panel"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 2: Configuration & Tenant Setup (Week 2)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Tenant Creation:</strong> VG Pay Ops creates the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">BankPartner</code> entity.</li>
                <li><strong>Role Provisioning:</strong> VG Pay provides the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">BANK_ADMIN</code> credentials.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-brand-panel"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 3: Technical Integration (Week 3 - 4)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Webhook Integration (Bank as PSP):</strong> Bank develops the outbound event push to VG Pay's <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">/api/transactions</code> endpoint for payment successes.</li>
                <li><strong>Network Whitelisting:</strong> Bank whitelists VG Pay API Gateways.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-brand-panel"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 4: Testing & UAT (Week 5)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Functional Testing:</strong> Simulating Agent onboarding a merchant and mapping a Soundbox.</li>
                <li><strong>Transaction Testing:</strong> Simulating a live UPI transaction from the Core Banking System to VG Pay.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-amber-500"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 5: Production Go-Live (Week 6)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Production Deployment:</strong> Configurations promoted to PROD.</li>
                <li><strong>Penny Drop:</strong> Real ₹1 transaction on a live Soundbox.</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">Swimlane Diagram</h3>
          <div className="bg-brand-panel border border-brand-border rounded-xl p-4 shadow-sm">
            <Mermaid chart={swimlaneChart} />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          3. Architecture & User Hierarchy
        </h2>
        <p className="leading-relaxed">
          VG Pay operates a multi-tenant, event-driven architecture designed to manage Merchants and their IoT Devices (Soundboxes).
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">3.1 System Architecture</h3>
          <div className="bg-brand-panel border border-brand-border rounded-xl p-4 shadow-sm">
            <Mermaid chart={architectureChart} />
          </div>
          <p className="leading-relaxed mt-4">
            The architecture flows as follows: The Core Banking System/Switch pushes webhook events to the VG Pay API Gateway. The Gateway routes it to the Payment Service, which accesses the Primary Database and publishes events to the MQTT Broker (Soundbox). Simultaneously, the Agent and Merchant mobile apps interact with the Gateway, which routes to the Merchant Core Backend.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">3.2 System Architecture Details</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Direct Bank Transfers:</strong> VG Pay does not hold, route, or settle funds. All UPI and digital transfers are processed directly between the payer's bank and the merchant's bank account. VG Pay acts strictly as a real-time notification and IoT management layer.</li>
            <li><strong className="text-brand-text">Success-Only Triggers:</strong> The VG Pay system is designed exclusively to trigger the Soundbox audio. Therefore, it only expects to receive webhooks for <strong className="text-brand-text">SUCCESSFUL</strong> transactions. Failed or pending transactions should not be pushed to VG Pay.</li>
          </ul>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">3.3 User Hierarchy (Roles & Permissions)</h3>
          <p className="leading-relaxed text-brand-text-muted">Every user in the system is assigned specific roles that govern their access:</p>
          
          <div className="grid gap-4 mt-4">
            <div className="bg-brand-panel border border-brand-border rounded-lg p-4 flex items-start space-x-3">
              <div className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-xs font-bold font-mono mt-0.5 whitespace-nowrap">SUPER_ADMIN</div>
              <p className="text-sm text-brand-text">Supreme access to VG Pay. Manages all banks, devices, and global configurations.</p>
            </div>
            <div className="bg-brand-panel border border-brand-border rounded-lg p-4 flex items-start space-x-3">
              <div className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-xs font-bold font-mono mt-0.5 whitespace-nowrap">PSP_ADMIN</div>
              <p className="text-sm text-brand-text">Top-level administrator for a specific <code className="text-brand-accent">BankPartner</code>. Manages regional operations, field agents, and can view aggregate reports for their bank.</p>
            </div>
            <div className="bg-brand-panel border border-brand-border rounded-lg p-4 flex items-start space-x-3">
              <div className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-xs font-bold font-mono mt-0.5 whitespace-nowrap">PSP_AGENT</div>
              <p className="text-sm text-brand-text">Field agent using the Agent Mobile App to onboard pre-verified merchants and map Soundboxes.</p>
            </div>
            <div className="bg-brand-panel border border-brand-border rounded-lg p-4 flex items-start space-x-3">
              <div className="bg-white/20 text-brand-text px-2 py-1 rounded text-xs font-bold font-mono mt-0.5 whitespace-nowrap">MERCHANT</div>
              <p className="text-sm text-brand-text">The end-user receiving payments. Currently, the Merchant App is strictly for viewing transaction history. Since funds settle directly into the merchant's bank account, the app is read-only regarding financial operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          4. Payment Soundbox (S1) - Device Overview &amp; Manual
        </h2>
        <p className="leading-relaxed">
          To ensure Bank IT and operational teams understand the edge-device capabilities, this section details the hardware and software specifications of the S1 Payment Soundbox.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">4.1 Hardware Anatomy &amp; Setup</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Box Contents:</strong> 1 Unit of Sound Box S1.</li>
            <li><strong className="text-brand-text">Front View:</strong> Large QR code for payments (BHIM UPI). Top LEDs: Status RGB (Left), Network Green (Center), Power Red (Right).</li>
            <li><strong className="text-brand-text">Side View:</strong> Micro SIM Slot (for cellular), USB Type-C slot (5V-2A charging), Power Key, Reset pinhole.</li>
            <li><strong className="text-brand-text">Top View:</strong> Volume UP / DOWN buttons, Replay Button (repeats last payment announcement).</li>
          </ul>
          
          <div className="mt-4">
            <h4 className="font-medium text-brand-text mb-2">Operating Instructions:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-brand-text-muted">
              <li><strong className="text-brand-text">Device Setup:</strong> Insert a Nano SIM with an active data plan. Charge for 2.5 hours using a 5V-2A adapter via Type-C.</li>
              <li><strong className="text-brand-text">Power On:</strong> Long press POWER for 3 seconds. The RGB LED flashes Roseate White once to start the boot sequence.</li>
              <li><strong className="text-brand-text">Changing SIM:</strong> Turn off device &rarr; Change SIM &rarr; Turn on. (If changed while on, hit Reset).</li>
            </ol>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">4.2 Power Up Sequence &amp; LED Indicators</h3>
          
          <h4 className="font-medium text-brand-text mb-2">Boot Phases</h4>
          <ol className="list-decimal pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Phase 1 (Hardware/Network Init):</strong> Red LED (SIM check), Middle Green blink (Network search), Purple LED (DMS Registration), Cyan (FOTA check), Orange (Installing firmware).</li>
            <li><strong className="text-brand-text">Phase 2 (Connectivity):</strong> Audio announces &quot;Sim Inserted&quot; (Orange LED) and &quot;Network Connected&quot; (Cyan LED).</li>
            <li><strong className="text-brand-text">Phase 3 (DMS &amp; MQTT):</strong> Cyan (Connecting to DMS). Once connected, LED turns <strong className="text-brand-text">Roseate White</strong> (Firmware OK, SIM OK, Network OK). Audio: &quot;Device Online&quot;.</li>
            <li><strong className="text-brand-text">Phase 4 (VG Pay Integration):</strong> Roseate White indicates hitting Registration and Config APIs. If successful, device connects to VG MQTT &rarr; <strong className="text-brand-text">Blue LED</strong>. Audio: &quot;Device is ready for Payments&quot;.</li>
          </ol>
          <p className="text-sm italic text-brand-text-dim mt-2">
            Note: Green LED flashes during payment announcements. Purple indicates onboarding stuck. Cyan indicates MQTT unreachable.
          </p>

          <h4 className="font-medium text-brand-text mt-6 mb-2">LED Status Reference</h4>
          <div className="overflow-x-auto border border-brand-border rounded-xl">
            <table className="w-full text-left text-sm text-brand-text-muted">
              <thead className="bg-brand-sidebar text-brand-text text-xs uppercase font-medium border-b border-brand-border">
                <tr>
                  <th scope="col" className="px-6 py-3">LED Type</th>
                  <th scope="col" className="px-6 py-3">Behavior</th>
                  <th scope="col" className="px-6 py-3">Meaning &amp; Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border bg-brand-panel">
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">Green (Network)</td>
                  <td className="px-6 py-3">Slow blink</td>
                  <td className="px-6 py-3">Searching for network.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">Green (Network)</td>
                  <td className="px-6 py-3">Fast blink (3-4/sec)</td>
                  <td className="px-6 py-3">Registered on 4G/LTE. Ready.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">Red (Power)</td>
                  <td className="px-6 py-3">Solid / Blinking</td>
                  <td className="px-6 py-3">Charging / Battery &lt; 20%.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">RGB (Status)</td>
                  <td className="px-6 py-3 text-red-400">Red</td>
                  <td className="px-6 py-3">No SIM detected.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">RGB (Status)</td>
                  <td className="px-6 py-3 text-purple-400">Purple</td>
                  <td className="px-6 py-3">Onboarding incomplete/stuck.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">RGB (Status)</td>
                  <td className="px-6 py-3 text-orange-400">Orange</td>
                  <td className="px-6 py-3">Firmware update (FOTA) failed/incomplete.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">RGB (Status)</td>
                  <td className="px-6 py-3 text-pink-100">Roseate White</td>
                  <td className="px-6 py-3">Normal operation (System OK).</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">RGB (Status)</td>
                  <td className="px-6 py-3 text-cyan-400">Cyan</td>
                  <td className="px-6 py-3">Network connected, but MQTT unreachable.</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-brand-text">RGB (Status)</td>
                  <td className="px-6 py-3 text-blue-400">Blue</td>
                  <td className="px-6 py-3">Server connected, ready for payments.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">4.3 Technical Specifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Hardware:</strong> Quectel EC200U Module, 4G LTE Cat-1 (2G fallback), 2000mAh Li-ion battery (3V cutoff).</li>
            <li><strong className="text-brand-text">Firmware:</strong> 30-min Heartbeat interval, OTA security &amp; firmware integrity.</li>
            <li><strong className="text-brand-text">Compliance:</strong> BIS CRS, IEC 62133 / IS 16046 (Battery safety), IS 13252.</li>
          </ul>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">4.4 Troubleshooting Guide</h3>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">Not turning on:</strong> Charge for 30 mins using 5V-2A. If charging LED is off, try a different socket.</li>
            <li><strong className="text-brand-text">Not sending data to server:</strong> Check Green LED (Fast blink = OK). If Cyan, MQTT disconnected. Press RESET to restart network stack.</li>
            <li><strong className="text-brand-text">No Sound / Low Volume:</strong> Check if battery is low (amplifier disabled). Reset device to restore default volume. Check for physical blockage over speaker mesh.</li>
            <li><strong className="text-brand-text">Repeated Restarts:</strong> Charge device. Check for loose SIM. Press RESET to clear corrupt configuration.</li>
          </ul>
        </div>
      </section>


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

      {/* Section 6 */}
      <section id="section-6" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          6. Security & Infrastructure Checklist
        </h2>
        
        <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start space-x-3 my-6">
          <ShieldAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-red-400 font-bold">IMPORTANT</h4>
            <p className="text-red-200 text-sm mt-1">Security is paramount. The following must be adhered to before UAT sign-off.</p>
          </div>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Data Residency & Cloud Infrastructure</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay backend is currently hosted on AWS Mumbai, ensuring all merchant and transaction data is stored strictly within India to comply with data localization regulations. Additionally, the microservices architecture allows the VG Pay backend to be deployed On-Premise directly on the Bank's own servers if strict internal policies require it.</span>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Mobile App Security (Zero-Trust)</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay Agent and Merchant mobile applications natively enforce Root & Jailbreak Detection blocking execution on compromised devices. Access is further gated by mandatory Biometric Authentication (Fingerprint/FaceID).</span>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">SSL/TLS</strong>
              <span className="text-brand-text-muted text-sm">All VG Pay endpoints enforce HTTPS (TLS 1.2+). HTTP traffic is instantly dropped.</span>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Payload Encryption</strong>
              <span className="text-brand-text-muted text-sm">Ensure personally identifiable information (PII) like <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">payerVpa</code> is masked or handled per compliance guidelines. Internally, the VG Pay backend encrypts sensitive data (like VPA and Payer Name) before storing it in the database.</span>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Webhook Authentication</strong>
              <span className="text-brand-text-muted text-sm">Bank Webhooks to VG Pay must be authenticated using HMAC SHA-256 signatures. The bank computes a hash of the payload using a pre-shared secret and passes it in the header (e.g., <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">X-Signature</code>). The VG Pay backend actively validates this signature before processing the event.</span>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Network Whitelisting</strong>
              <span className="text-brand-text-muted text-sm">The Bank must whitelist VG Pay's Egress IPs to receive callbacks (if applicable) and VG Pay will whitelist the Bank's IPs for inbound API calls.</span>
            </div>
          </li>
        </ul>
      </section>

            {/* Section 7 */}
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
      </section>
{/* Section 8 */}
      <section id="section-8" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          8. Ticketing & Support Flow
        </h2>
        <p className="leading-relaxed">
          VG Pay natively integrates with the VG Ticketing System to provide a seamless, closed-loop support flow for both merchants and field agents.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-serif italic text-brand-accent">7.1 End-to-End Ticketing Architecture</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brand-text marker:text-brand-accent marker:font-bold">
            <li className="pl-2">
              <strong className="text-brand-text block">Ticket Creation (Mobile App → VG Pay)</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>Merchants or Agents can raise complaints (e.g., Soundbox hardware faults, transaction disputes) directly from their mobile application.</li>
                <li>The app makes a <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">POST /api/complaints</code> call to the VG Pay backend with a <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">ComplaintsDTO</code> payload containing the issue details and merchant ID.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">System Forwarding (VG Pay → VG Ticketing System)</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>Upon receiving the complaint, the VG Pay backend validates the payload, generates a unique internal <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">referenceNumber</code>, and triggers an asynchronous notification (<code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">notify-merchant-complaint</code>).</li>
                <li>The issue is securely forwarded to the VG Ticketing System via an outbound API call, converting it into an actionable support ticket for the operations team.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Ticket Tracking (Mobile App → VG Pay)</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>Merchants can track the status of their open tickets via the <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">GET /api/complaints/all</code> endpoint, which supports pagination, filtering by status/type, and sorting.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Resolution & Webhook (VG Ticketing System → VG Pay)</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>When the support agent marks the ticket as "Closed" or "Resolved" in the VG Ticketing System, it fires a webhook back to VG Pay's <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">TicketWebhookController</code>.</li>
                <li>Specifically, it hits <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">POST /api/ticketing/ticket-closed</code> with a <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">TicketClosedWebhookDTO</code>.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Final Notification (VG Pay → Merchant)</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>The VG Pay backend processes this closure event and immediately triggers a push notification to the merchant's device (via Firebase Cloud Messaging) to inform them that their issue is resolved.</li>
              </ul>
            </li>
          </ol>
        </div>
      
        <div className="space-y-4 pt-8">
          <h3 className="text-lg font-serif italic text-brand-accent">8.2 SLAs and Escalation Matrix</h3>
          
          <h4 className="font-medium text-brand-text mb-2">8.2.1 Service Level Agreements (SLAs)</h4>
          <p className="leading-relaxed text-brand-text-muted mb-4">
            VG Pay adheres to strict SLAs based on the priority and business impact of the reported issue. The SLA timer begins immediately upon ticket creation.
          </p>
          <div className="overflow-x-auto border border-brand-border rounded-xl">
            <table className="w-full text-left text-sm text-brand-text-muted">
              <thead className="bg-brand-sidebar text-brand-text text-xs uppercase font-medium border-b border-brand-border">
                <tr>
                  <th scope="col" className="px-6 py-3">Priority</th>
                  <th scope="col" className="px-6 py-3">Business Impact</th>
                  <th scope="col" className="px-6 py-3">Ack. SLA</th>
                  <th scope="col" className="px-6 py-3">Resolution SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border bg-brand-panel">
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-red-400">P1</td>
                  <td className="px-6 py-3">Device not functional (Business stopped)</td>
                  <td className="px-6 py-3">30 mins</td>
                  <td className="px-6 py-3">4 hours</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-amber-400">P2</td>
                  <td className="px-6 py-3">Partial impact (e.g., low volume)</td>
                  <td className="px-6 py-3">2 hours</td>
                  <td className="px-6 py-3">24 hours</td>
                </tr>
                <tr className="hover:bg-brand-sidebar/50">
                  <td className="px-6 py-3 font-medium text-blue-400">P3</td>
                  <td className="px-6 py-3">Usage queries or informational</td>
                  <td className="px-6 py-3">4 hours</td>
                  <td className="px-6 py-3">72 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-medium text-brand-text mt-6 mb-2">Device Replacement (RMA) SLA:</h4>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">P1:</strong> Same day / Next business day</li>
            <li><strong className="text-brand-text">P2:</strong> Within 2 business days</li>
            <li><strong className="text-brand-text">P3:</strong> As scheduled</li>
          </ul>

          <h4 className="font-medium text-brand-text mt-6 mb-2">8.2.2 Support Levels and Escalation Matrix</h4>
          <p className="leading-relaxed text-brand-text-muted mb-4">
            If an issue is at risk of breaching its SLA, or if it involves complex defects, it will be escalated through the following tiers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-brand-text-muted">
            <li><strong className="text-brand-text">L1 (Frontline Support):</strong> Initial troubleshooting. Escalates to L2 if SLA is at risk.</li>
            <li><strong className="text-brand-text">L2 (Technical Support):</strong> Advanced diagnostics and RMA approvals. Escalates to L3 for product defects.</li>
            <li><strong className="text-brand-text">L3 (Engineering / OEM):</strong> Firmware patches and product fixes. Escalates to Management for repeated failures.</li>
            <li><strong className="text-brand-text">Management:</strong> Handles critical escalations and Bank-level communication for P1/Major incidents.</li>
          </ul>
        </div>
      </section>


      {/* Section 9 */}
      <section id="section-9" className="scroll-mt-24 space-y-6">
        <h2 className="text-3xl font-serif italic text-brand-text border-b border-brand-border pb-2">
          9. Pre-Go-Live Checklists
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-brand-panel border border-brand-border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-accent mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              Bank IT / Network Team
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">IP Whitelisting completed for UAT and PROD.</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Bank switch updated to push <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">/api/transactions</code> to VG Pay on successful UPI credits.</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Webhook timeouts configured appropriately (recommend 3-5 seconds).</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Error handling built for 4xx and 5xx responses from VG Pay (refer to Section 5.4 Standard Error Codes).</span>
              </li>
            </ul>
          </div>

          <div className="bg-brand-panel border border-brand-border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-accent mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              VG Pay Operations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight"><code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">BankPartner</code> created in PROD Database.</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Initial <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">BANK_ADMIN</code> user generated and credentials securely handed over.</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Inventory (Soundboxes) allocated to the Bank in the backend system.</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Bank Admin trained and verified for Agent provisioning.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 10 */}
      <section id="section-10" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <FileText className="w-8 h-8 text-brand-accent" />
          <h2 className="text-3xl font-serif italic text-brand-text">
            10. Bank Information Collection Template
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-dim italic">
          Please fill out this template during Phase 1.
        </p>

        <div className="bg-brand-panel border border-brand-border rounded-xl overflow-hidden shadow-sm">
          <div className="bg-brand-panel px-6 py-4 border-b border-brand-border">
            <h3 className="text-lg font-bold text-brand-text">1. General Details</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim">Bank Name</span>
              <input type="text" className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Enter bank name" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim">Bank PSP Code</span>
              <input type="text" className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Enter PSP code" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Registered Address</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={3} placeholder="Enter registered address"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Primary Business Contact</span>
              <div className="flex-1 space-y-2">
                <input type="text" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Name" />
                <input type="email" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Email" />
                <input type="tel" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Phone" />
              </div>
            </div>
          </div>
          
          <div className="bg-brand-panel px-6 py-4 border-y border-brand-border">
            <h3 className="text-lg font-bold text-brand-text">2. Technical Details</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Egress IPs for inbound API calls to VG Pay</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={2} placeholder="Comma separated IPs"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Technical Lead</span>
              <div className="flex-1 space-y-2">
                <input type="text" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Name" />
                <input type="email" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Email" />
                <input type="tel" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Phone" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-accent-bg border border-amber-500/20 rounded-xl p-6 mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-5 h-5 text-brand-accent" />
            <h4 className="text-brand-accent font-bold">Future Scope Considerations</h4>
          </div>
          <p className="text-brand-text text-sm mb-4">To support aggressive scaling, VG Pay's roadmap includes expanding the <code className="bg-brand-accent-bg px-1 font-mono rounded">BankPartner</code> configurations. In future releases, this onboarding document will require Banks to provide:</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-brand-text marker:font-bold">
            <li><strong>Custom UI Themes & Branding:</strong> Bank logos and HEX colors for white-labeling the Merchant App.</li>
            <li><strong>Custom SMS/Email Gateways:</strong> Providing your own Twilio/AWS SNS credentials for merchant communications.</li>
            <li><strong>Bi-directional Webhooks:</strong> Where VG Pay pushes real-time device status (<code className="bg-brand-accent-bg px-1 font-mono rounded">device.offline</code>, <code className="bg-brand-accent-bg px-1 font-mono rounded">merchant.onboarded</code>) directly to the Bank's systems via HMAC-secured webhooks.</li>
          </ol>
        </div>
      </section>

      {/* Footer padding */}
      <div className="h-24"></div>
    </motion.div>
  );
}

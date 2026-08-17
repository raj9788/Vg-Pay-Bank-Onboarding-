import React from 'react';
import { motion } from 'motion/react';
import { DeviceSimulator } from './DeviceSimulator';
import Mermaid from './Mermaid';
import { 
  Building2, Users, Goal, Route, Layers, ShieldCheck, 
  Settings, UserPlus, FileText, CheckCircle2, AlertTriangle,
  Smartphone, Activity, Info
} from 'lucide-react';

export function HandbookContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-10 lg:p-16 max-w-5xl mx-auto space-y-24"
    >
      <div className="space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif italic font-light tracking-tight text-brand-text">
          VG Pay Bank Onboarding
        </h1>
        <p className="text-xl sm:text-2xl text-brand-text-dim border-l-4 border-brand-accent pl-4">
          The Complete Master Document for Bank Integrations
        </p>
      </div>

      {/* Section 1 */}
      <motion.section id="section-1" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <Building2 className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            1. Company Overview
          </h2>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">1.1 Who We Are</h3>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            <strong className="text-brand-text font-semibold">Vishwaguru Infotech</strong> is a startup IT Solutioning and consultancy services company with extensive experience in the design, development, implementation, and maintenance of enterprise web and mobile applications. Our primary focus is on eGovernance and Digital Payments. Our founders possess profound experience with global world-class banking and financial institutions.
          </p>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            We provide world-class technology solutions to our customers, empowering them to convert business challenges into opportunities. Accepting limitations and going beyond them is our mantra.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">1.2 Vision & Mission</h3>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <Goal className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-brand-text">Motto:</strong> <span className="text-brand-text-muted">To serve people in eGovernance and digital payments areas.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Activity className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-brand-text">Focus:</strong> <span className="text-brand-text-muted">Design and development of user-friendly and secure web and mobile eGovernance and payment applications.</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">1.3 The Team</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-brand-panel p-4 rounded-xl border border-brand-border hover:border-amber-500/50 transition-colors">
              <Users className="w-6 h-6 text-brand-accent mb-2" />
              <h4 className="font-bold text-brand-text text-lg">Mr. Rajendra Gangarde</h4>
              <p className="text-sm font-medium text-brand-accent mb-2">Founder & CEO</p>
              <p className="text-sm text-brand-text-muted">Technically sophisticated professional with 27+ years of demonstrated experience.</p>
            </div>
            <div className="bg-brand-panel p-4 rounded-xl border border-brand-border hover:border-amber-500/50 transition-colors">
              <Users className="w-6 h-6 text-brand-accent mb-2" />
              <h4 className="font-bold text-brand-text text-lg">Mr. Vikas Modha</h4>
              <p className="text-sm font-medium text-brand-accent mb-2">CTO</p>
              <p className="text-sm text-brand-text-muted">Astute professional with 23+ years of hands-on experience in the Banking industry.</p>
            </div>
            <div className="bg-brand-panel p-4 rounded-xl border border-brand-border hover:border-amber-500/50 transition-colors">
              <Users className="w-6 h-6 text-brand-accent mb-2" />
              <h4 className="font-bold text-brand-text text-lg">Mr. Ravindra Kulkarni</h4>
              <p className="text-sm font-medium text-brand-accent mb-2">GM HR</p>
              <p className="text-sm text-brand-text-muted">23+ years in leading teams and managing testing efforts for efficient project execution.</p>
            </div>
            <div className="bg-brand-panel p-4 rounded-xl border border-brand-border hover:border-amber-500/50 transition-colors">
              <Users className="w-6 h-6 text-brand-accent mb-2" />
              <h4 className="font-bold text-brand-text text-lg">Mr. Deepak Desai</h4>
              <p className="text-sm font-medium text-brand-accent mb-2">Delivery Director</p>
              <p className="text-sm text-brand-text-muted">Results-driven Senior Project Manager with a proven record of delivering projects on time and budget.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section id="section-2" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <Route className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            2. High-Level Onboarding Process
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-muted text-justify">
          Welcome to the <strong className="text-brand-text">VG Pay Bank Onboarding Process</strong>. This handbook maps out every step required to integrate a Tier-2, Cooperative, or Regional Bank into the VG Pay ecosystem as a <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">BankPartner</code>.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">2.1 Onboarding Journey (Post-Agreement)</h3>
          
          <div className="border-l-2 border-amber-500/30 pl-6 space-y-8 relative mt-6">
            
            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-brand-panel"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 1: Initiation & Discovery (Week 1)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Kick-off Meeting:</strong> Alignment on business goals and architecture.</li>
                <li><strong>Information Gathering:</strong> Bank IT completes the Information Collection Template (see Section 10).</li>
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
              <p className="text-sm text-brand-text-muted italic mt-1">
                (Note: This timeline is highly dependent on the readiness and release cycle of the Bank's Core Banking System or Switch vendor).
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Webhook Integration (Bank as PSP):</strong> Bank develops the outbound event push to VG Pay's <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">/api/transactions</code> (or the Razorpay-compatible webhook) for payment successes.</li>
                <li><strong>Zero Ticketing Integration:</strong> No development is required for the ticketing system, as it is handled natively by VG Pay.</li>
                <li><strong>Network Whitelisting:</strong> Bank whitelists VG Pay API Gateways.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-brand-panel"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 4: Testing & UAT (Week 5)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>UAT Environment:</strong> Testing will be conducted in the actual live/UAT environment using 1-2 physical Soundbox devices provided to the Bank.</li>
                <li><strong>Functional Testing:</strong> Simulating Agent onboarding a merchant, mapping a Soundbox, and validating Merchant Bulk Upload CSVs (if applicable).</li>
                <li><strong>Transaction Testing:</strong> Simulating a live UPI transaction from the Core Banking System to VG Pay and verifying the audio alert on the physical device.</li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-amber-500 bg-amber-500"></div>
              <h4 className="text-lg font-bold text-brand-text">Phase 5: Production Go-Live (Week 6)</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li><strong>Production Deployment:</strong> Configurations promoted to PROD.</li>
                <li><strong>Penny Drop:</strong> Real INR 1 transaction on a live Soundbox.</li>
              </ul>
            </div>

          </div>
        </div>
        
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">2.2 Swimlane Diagram</h3>
          <div className="w-full bg-brand-panel border border-brand-border rounded-xl p-4 sm:p-6 overflow-hidden shadow-inner">
             <Mermaid chart={`sequenceDiagram
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
    Bank->>Bank: Develop Webhook Push (Direct API or Razorpay)
    Bank->>Dev: Whitelist PROD IPs

    Note over Bank, MQTT: Phase 4: Operations
    opt High Volume
        Bank->>Dev: POST /api/merchants/bulk-upload (CSV)
    end
    Agent->>Dev: Onboard Merchant & Map Device
    Dev-->>Agent: Success

    Note over Bank, MQTT: Phase 5: Live Transaction
    Bank->>Dev: POST /api/transactions (or webhook)
    Dev->>Dev: Validate & Extract Device
    Dev->>MQTT: Publish Audio Alert (Encrypted)`} />
          </div>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section id="section-3" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <Layers className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            3. Architecture & User Hierarchy
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-muted text-justify">
          VG Pay operates a multi-tenant, event-driven architecture designed to manage Merchants and their IoT Devices (Soundboxes).
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.1 System Architecture</h3>
          <div className="w-full bg-brand-panel border border-brand-border rounded-xl p-4 sm:p-6 overflow-hidden shadow-inner">
             <Mermaid chart={`graph TD
    subgraph Bank Infrastructure
        CBS[Core Banking System]
        BankSwitch[UPI / Payment Switch]
        BankIT[Bank IT Operations]
    end

    subgraph VG Pay Ecosystem
        Gateway[API Gateway]
        PaymentSvc[Payment Service]
        MerchantSvc[Merchant Core Backend]
        TicketingSvc[VG Ticketing System]
        NotifSvc[Notification Service / FCM]
        MqttBroker[MQTT Broker / Soundbox]
        DB[(Primary Database)]
    end

    subgraph Client Applications
        AgentApp[VG Pay Agent App]
        MerchantApp[VG Pay Merchant App]
    end

    AgentApp -->|REST APIs| Gateway
    MerchantApp -->|REST APIs| Gateway

    Gateway --> MerchantSvc
    MerchantSvc --> DB
    MerchantSvc --> NotifSvc

    Gateway -.->|Forward Complaints| TicketingSvc
    TicketingSvc -.->|Resolution Webhook| Gateway

    BankIT -->|Merchant Sync & Bulk Upload| Gateway
    BankSwitch -->|Payment Webhook Event| Gateway
    Gateway --> PaymentSvc
    PaymentSvc --> DB
    PaymentSvc --> MqttBroker`} />
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.2 System Architecture Details</h3>
          <ul className="list-disc pl-5 space-y-3 text-brand-text-muted text-justify">
            <li>
              <strong className="text-brand-text">Direct Bank Transfers:</strong> VG Pay does not hold, route, or settle funds. All UPI and digital transfers are processed directly between the payer's bank and the merchant's bank account. VG Pay acts strictly as a real-time notification and IoT management layer.
            </li>
            <li>
              <strong className="text-brand-text">Success-Only Triggers:</strong> The VG Pay system is designed exclusively to trigger the Soundbox audio. Therefore, it only expects to receive webhooks for <strong className="text-brand-text uppercase tracking-wide">SUCCESSFUL</strong> transactions. Failed or pending transactions should not be pushed to VG Pay.
            </li>
          </ul>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.3 User Hierarchy (Roles & Permissions)</h3>
          <p className="leading-relaxed text-brand-text-muted">Every user in the system is assigned specific roles that govern their access:</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-brand-panel p-5 rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-text text-lg flex items-center gap-2 mb-2"><ShieldCheck className="w-5 h-5 text-amber-500" /> SUPER_ADMIN</h4>
              <p className="text-sm text-brand-text-muted">Supreme access to VG Pay. Manages all banks, devices, and global configurations.</p>
            </div>
            <div className="bg-brand-panel p-5 rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-text text-lg flex items-center gap-2 mb-2"><Building2 className="w-5 h-5 text-amber-500" /> PSP_ADMIN (Bank Admin)</h4>
              <p className="text-sm text-brand-text-muted">Top-level administrator for a specific <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">BankPartner</code>. Manages regional operations, field agents, and can view aggregate reports for their bank.</p>
            </div>
            <div className="bg-brand-panel p-5 rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-text text-lg flex items-center gap-2 mb-2"><UserPlus className="w-5 h-5 text-amber-500" /> PSP_AGENT</h4>
              <p className="text-sm text-brand-text-muted">Field agent using the Agent Mobile App to onboard pre-verified merchants and map Soundboxes.</p>
            </div>
            <div className="bg-brand-panel p-5 rounded-xl border border-brand-border">
              <h4 className="font-bold text-brand-text text-lg flex items-center gap-2 mb-2"><Smartphone className="w-5 h-5 text-amber-500" /> PSP_MERCHANT (Merchant)</h4>
              <p className="text-sm text-brand-text-muted">The end-user receiving payments. Currently, the Merchant App is strictly for <strong>viewing transaction history</strong>. Since funds settle directly into the merchant's bank account, the app is read-only regarding financial operations.</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">3.4 Device Management System (DMS) Web Portal [Future Scope / Under Discussion]</h3>
          <p className="text-brand-text-muted leading-relaxed text-justify mb-4">
            <strong className="text-brand-text italic">Note:</strong> <em className="text-brand-text-dim">The DMS Web Portal is a future feature managed by our hardware partner. Its availability is currently under discussion.</em>
          </p>
          <p className="text-brand-text-muted leading-relaxed text-justify">
            While field agents use mobile applications, Bank Operations teams (<code className="bg-white/10 px-1 font-mono rounded text-sm">PSP_ADMIN</code>) may in the future be provided access to a dedicated <strong>Device Management System (DMS) Web Portal</strong> hosted by the hardware partner. This desktop dashboard would allow Bank administrators to monitor fleet health in real-time (e.g., devices with low battery or offline status), download comprehensive MIS reports, and manage their agents at scale.
          </p>
        </div>
      </motion.section>

      {/* Section 4 */}
      <motion.section id="section-4" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <Smartphone className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            4. Payment Soundbox (S1) - Device Overview & Manual
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-muted text-justify">
          To ensure Bank IT and operational teams understand the edge-device capabilities, this section details the hardware and software specifications of the S1 Payment Soundbox.
        </p>

        <DeviceSimulator />

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.1 Hardware Anatomy & Setup</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>Box Contents:</strong> 1 Unit of Sound Box S1.</li>
            <li><strong>Front View:</strong> Large QR code for payments (BHIM UPI). Top LEDs: Status RGB (Left), Network Green (Center), Power Red (Right).</li>
            <li><strong>Side View:</strong> Micro SIM Slot (for cellular), USB Type-C slot (5V-2A charging), Power Key, Reset pinhole.</li>
            <li><strong>Top View:</strong> Volume UP / DOWN buttons, Replay Button (repeats last payment announcement).</li>
          </ul>
          <div className="bg-brand-panel p-5 mt-4 rounded-xl border border-brand-border">
            <h4 className="font-bold text-brand-text mb-2">Operating Instructions:</h4>
            <ol className="list-decimal pl-5 space-y-2 text-brand-text-muted">
              <li><strong>Device Setup:</strong> Insert a Nano SIM with an active data plan. Charge for 2.5 hours using a 5V-2A adapter via Type-C.</li>
              <li><strong>Power On:</strong> Long press POWER for 3 seconds. The RGB LED flashes Roseate White once to start the boot sequence.</li>
              <li><strong>Changing SIM:</strong> Turn off device &rarr; Change SIM &rarr; Turn on. (If changed while on, hit Reset).</li>
            </ol>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.2 Power Up Sequence & LED Indicators</h3>
          
          <div className="space-y-4 mt-4">
             <h4 className="text-lg font-bold text-brand-text">Boot Phases</h4>
             <ol className="list-decimal pl-5 space-y-3 text-brand-text-muted">
                <li><strong>Phase 1 (Hardware/Network Init):</strong> Red LED (SIM check), Middle Green blink (Network search), Purple LED (DMS Registration), Cyan (FOTA check), Orange (Installing firmware).</li>
                <li><strong>Phase 2 (Connectivity):</strong> Audio announces "Sim Inserted" (Orange LED) and "Network Connected" (Cyan LED).</li>
                <li><strong>Phase 3 (DMS & MQTT):</strong> Cyan (Connecting to DMS). Once connected, LED turns <strong>Roseate White</strong> (Firmware OK, SIM OK, Network OK). Audio: "Device Online".</li>
                <li><strong>Phase 4 (VG Pay Integration):</strong> Roseate White indicates hitting Registration and Config APIs. If successful, device connects to VG MQTT &rarr; <strong>Blue LED</strong>. Audio: "Device is ready for Payments".</li>
             </ol>
             <p className="italic text-sm text-brand-text-dim">Note: Green LED flashes during payment announcements. Purple indicates onboarding stuck. Cyan indicates MQTT unreachable.</p>
          </div>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.3 Technical Specifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>Hardware:</strong> Quectel EC200U Module, 4G LTE Cat-1 (2G fallback), 2000mAh Li-ion battery (3V cutoff).</li>
            <li><strong>Firmware & FOTA:</strong> 30-min Heartbeat interval, OTA security & firmware integrity. To prevent business disruption, Firmware Over-The-Air (FOTA) updates are strictly pushed during a maintenance window (1:00 AM – 4:00 AM IST). The device must have at least 30% battery to initiate the update.</li>
            <li><strong>Compliance:</strong> BIS CRS, IEC 62133 / IS 16046 (Battery safety), IS 13252.</li>
            <li><strong>Multi-Language Support:</strong> The device supports multiple regional languages (e.g., Hindi, Marathi, English). The default language is configured by the Agent during the initial onboarding via the Agent App. If a merchant wishes to change the language later, they can raise a support ticket, and an Agent can update it remotely via the provisioning app.</li>
          </ul>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.4 Troubleshooting Guide</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>Not turning on:</strong> Charge for 30 mins using 5V-2A. If charging LED is off, try a different socket.</li>
            <li><strong>Not sending data to server:</strong> Check Green LED (Fast blink = OK). If Cyan, MQTT disconnected. Press RESET to restart network stack.</li>
            <li><strong>No Sound / Low Volume:</strong> Check if battery is low (amplifier disabled). Reset device to restore default volume. Check for physical blockage over speaker mesh.</li>
            <li><strong>Repeated Restarts:</strong> Charge device. Check for loose SIM. Press RESET to clear corrupt configuration.</li>
          </ul>
        </div>
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">4.5 SIM, RMA & Inventory Logistics</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>SIM Provisioning & Data Plans:</strong> VG Pay provides the S1 Soundbox pre-fitted with an M2M 4G SIM card. VG Pay bears all costs for the monthly data recharges. The Bank is not responsible for telecom logistics.</li>
            <li><strong>Device Replacements (RMA):</strong> If a device is found defective (e.g., hardware failure, speaker issues), VG Pay will bear the courier and replacement costs. The field agent must raise a replacement ticket, and a new device will be dispatched.</li>
            <li><strong>Merchant Offboarding:</strong> If a merchant closes their account or violates the Terms of Service, the device must be returned to VG Pay. Upon receipt, VG Pay operations will factory reset the device, change its status to <code className="bg-white/10 px-1 font-mono rounded">NEW</code>, and it will be available for re-mapping to a different merchant.</li>
            <li><strong>Inactive Merchants:</strong> If a merchant's account is marked as <code className="bg-white/10 px-1 font-mono rounded">INACTIVE</code> but the device is not physically returned, the system will flag the device as <code className="bg-white/10 px-1 font-mono rounded">INACTIVE</code>. The Soundbox will immediately cease receiving audio confirmations, and its network access will be suspended.</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 5 */}
      <motion.section id="section-5" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <Settings className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            5. Technical Integration
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-muted text-justify">
          The core integration requirement is for the Bank (acting as the PSP switch) to push real-time transaction events to VG Pay.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.1 Environment URLs</h3>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted">
            <li><strong>Main API Gateway:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">https://api.vgpayglobal.com/</code></li>
            <li><strong>Payment / Transaction Services:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">https://payment.vgpayglobal.com/</code></li>
            <li><strong>Merchant Services:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">https://merchant.vgpayglobal.com/</code></li>
          </ul>
          <p className="italic text-sm text-brand-text-dim">Note: The exact UAT and PROD URLs for each specific microservice required for your integration will be provided directly by the VG Pay team during Phase 2.</p>
        </div>
        <div className="space-y-4 pt-8">
          <h4 className="text-xl font-bold text-brand-text">API Rate Limiting & Scalability</h4>
          <p className="text-brand-text-muted leading-relaxed text-justify">
            By default, there are no strict rate limits enforced on the REST API Gateway. The underlying webhook infrastructure (hosted on AWS) is highly scalable and currently supports up to <strong>10,000 Transactions Per Second (TPS)</strong>. If the Bank requires specific throttling limits to protect its own downstream services, this can be configured at the VG Pay API Gateway layer upon request.
          </p>
        </div>


        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.2 Payment Success Webhook (Bank &rarr; VG Pay)</h3>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            When a UPI payment successfully credits the merchant's account, the Bank must immediately call VG Pay's Payment Service to trigger the Soundbox alert. The VG Pay system exposes two distinct integration pathways depending on the bank's capabilities.
          </p>

          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
            <h5 className="font-bold text-red-400 mb-2">Disclaimer: CBS Reversals & Dispute Resolution</h5>
            <p className="text-brand-text-muted text-sm text-justify">The VG Pay platform is strictly a one-way, success-only notification layer. If the Bank's Core Banking System (CBS) registers a success, triggers the VG Pay webhook, and the Soundbox announces the payment, but the banking network subsequently reverses the transaction (a false positive), VG Pay <strong>does not</strong> support a "Reversal" audio cue. All dispute resolution, reversals, and refund management remain entirely within the Bank's domain.</p>
          </div>

          <div className="bg-brand-panel p-5 mt-4 rounded-xl border border-brand-border">
            <h4 className="font-bold text-brand-text mb-3 text-lg">Pathway 1: Direct Transaction API (<code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono text-base">POST /api/transactions</code>)</h4>
            <p className="text-brand-text-muted mb-3">This is the standard API intended for direct bank integrations.</p>
            <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
              <li><strong>Endpoint:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/transactions</code></li>
              <li><strong>Idempotency:</strong> Driven by <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">transactionId</code> and <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">utr</code>. If a transaction with the same ID or UTR already exists, the system returns an HTTP <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">409 Conflict</code>.</li>
              <li><strong>Validation:</strong> The <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">amount</code> must be greater than zero. The system also rejects payloads if an internal <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">id</code> is present in the request body.</li>
              <li><strong>Authentication:</strong> Configured via API Gateway (e.g., standard API Key or mutual TLS) depending on the environment.</li>
              <li><strong>Success Response:</strong> HTTP <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">200 OK</code> with the plain text body <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">"ACK"</code>.</li>
            </ul>
          </div>
          
          <div className="bg-brand-panel p-5 mt-4 rounded-xl border border-brand-border">
            <h4 className="font-bold text-brand-text mb-3 text-lg">Pathway 2: Payment Gateway Compatible Webhook</h4>
            <p className="text-brand-text-muted mb-3">This pathway is designed for banks utilizing a Razorpay-compatible webhook structure for <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">payment.captured</code> events.</p>
            <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
              <li><strong>Endpoint:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/razorpay/webhook</code> (or <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">/api/razorpay/webhook/payment</code>)</li>
              <li><strong>Authentication (HMAC SHA-256):</strong> The webhook must include the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">X-Razorpay-Signature</code> header. This is an HMAC SHA-256 hex-encoded hash of the raw payload string using a pre-shared secret provided by VG Pay.</li>
              <li><strong>Event Matching:</strong> The payload must specify <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">"event": "payment.captured"</code>.</li>
              <li><strong>Parameter Extraction:</strong> To route the transaction to the correct device, the Bank must pass the mapping in the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">payload.payment.entity.notes</code> object. The system automatically searches for keys such as <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">merchantId</code> or <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">serialNumber</code>.</li>
              <li><strong>Success Response:</strong> HTTP <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">200 OK</code> with the plain text body <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">"ACK"</code>.</li>
            </ul>
            
            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 mt-4 rounded-r-lg">
               <h5 className="font-bold text-blue-400 mb-2">How does the Bank get the Device or Merchant ID?</h5>
               <p className="text-brand-text-muted text-sm">For Pathway 2, the Bank embeds the VG Pay <code className="bg-white/10 px-1 font-mono rounded">serialNumber</code> or <code className="bg-white/10 px-1 font-mono rounded">merchantId</code> directly into the static/dynamic UPI QR code parameters generated for the merchant. When a customer scans and pays, these flow through the network to the Bank's switch, which extracts them and forwards them in the <code className="bg-white/10 px-1 font-mono rounded">notes</code> object of the webhook.</p>
            </div>
          </div>
          
          <div className="space-y-4 pt-6">
            <h4 className="text-xl font-bold text-brand-text">Webhook Retry Policy</h4>
            <p className="text-brand-text-muted leading-relaxed">In the event that the VG Pay backend is temporarily unreachable or returns an HTTP <code className="bg-white/10 px-1 font-mono rounded">5xx</code> response, the Bank's switch must implement an <strong>Exponential Backoff Retry Mechanism</strong>. Industry standard recommends retrying the webhook delivery up to 3 times (e.g., at 5 seconds, 15 seconds, and 45 seconds).</p>
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
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.4 Merchant Management (REST API)</h3>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            Agents typically create merchants via the Mobile App, hitting the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/merchants</code> endpoint. Additionally, Bank IT teams can utilize the full suite of CRUD endpoints (<code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">GET</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">PUT</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">DELETE</code>) to sync merchant data programmatically.
          </p>
          
          <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
             <h5 className="font-bold text-red-400 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> Strict Business Rules</h5>
             <ul className="list-disc pl-5 text-brand-text-muted text-sm space-y-2">
                <li><strong>Auto-Generated Code:</strong> The Merchant <code className="bg-white/10 px-1 font-mono rounded">code</code> (e.g., <code className="bg-white/10 px-1 font-mono rounded">VGPAYMERCHANT00000001</code>) is auto-generated by the backend. Do not pass <code className="bg-white/10 px-1 font-mono rounded">id</code> or <code className="bg-white/10 px-1 font-mono rounded">code</code> in the <code className="bg-white/10 px-1 font-mono rounded">POST</code> payload, or the request will be rejected.</li>
                <li><strong>Deletion & Inactivation:</strong> A merchant cannot be marked as <code className="bg-white/10 px-1 font-mono rounded">INACTIVE</code> or deleted if they still have devices assigned to them. You must first unassign all devices via the Device Mapping API, otherwise the system will return a <code className="bg-white/10 px-1 font-mono rounded">409 Conflict</code>.</li>
             </ul>
          </div>
          
          <p className="leading-relaxed text-brand-text-muted text-justify">
             For high-volume onboarding, Bank operations can utilize the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/merchants/bulk-upload</code> endpoint. This accepts a CSV <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">multipart/form-data</code> file containing merchant details, allowing thousands of merchants to be provisioned in a single request.
          </p>
          <p className="leading-relaxed text-brand-text-muted">
             <strong>Authentication:</strong> Bearer Token with <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MERCHANT_CREATE</code> / <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MERCHANT_VIEW</code> / <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MERCHANT_UPDATE</code> / <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MRCHANT_BULK_UPLOAD</code> authorities.
          </p>
        </div>
        
        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.5 Device Mapping (REST API)</h3>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            To map a physical Soundbox to a Merchant, the Agent App calls the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/merchant-devices</code> endpoint. This maps the device and merchant IDs and marks the physical device as <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">ASSIGNED</code> in the system.
          </p>
          <p className="leading-relaxed text-brand-text-muted text-justify">
            <strong>Business Rule:</strong> Devices can only be assigned to a merchant if the merchant's status is <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">ACTIVE</code>. If the device is already assigned elsewhere, the API returns a <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">409 Conflict</code>.
          </p>
          <p className="leading-relaxed text-brand-text-muted">
            <strong>Authentication:</strong> Bearer Token with <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MERCHANT_DEVICE_MANAGE</code> authority.
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">5.6 Standard HTTP Responses</h3>
          <p className="text-brand-text-muted mb-2">All REST endpoints (except raw webhooks returning "ACK") follow a standardized JSON envelope (<code className="bg-white/10 px-1 font-mono rounded text-sm text-brand-accent">ResponseDTO</code>).</p>
          <ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>200 OK:</strong> Success / Acknowledged. Returns <code className="bg-white/10 px-1 font-mono rounded">"ACK"</code> for transaction webhooks.</li>
            <li><strong>400 Bad Request:</strong> Invalid input or missing fields (e.g., missing or zero <code className="bg-white/10 px-1 font-mono rounded">amount</code>, passing an internal <code className="bg-white/10 px-1 font-mono rounded">id</code> on a POST request).</li>
            <li><strong>401/403 Forbidden:</strong> Invalid HMAC signature (<code className="bg-white/10 px-1 font-mono rounded">X-Razorpay-Signature</code>) or unauthorized access.</li>
            <li><strong>404 Not Found:</strong> Requested resource (e.g., Device or Transaction) not found.</li>
            <li><strong>409 Conflict:</strong> Duplicate resource detected (e.g., a transaction with the same <code className="bg-white/10 px-1 font-mono rounded">transactionId</code> or <code className="bg-white/10 px-1 font-mono rounded">utr</code> already exists).</li>
            <li><strong>500 Internal Server Error:</strong> Unexpected server-side failure or parsing error.</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 6 */}
      <motion.section id="section-6" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <ShieldCheck className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            6. Security & Infrastructure Checklist
          </h2>
        </div>
        
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
          <p className="text-brand-text text-sm leading-relaxed">
            <strong className="text-red-400 block mb-1 uppercase tracking-wider text-xs">Important</strong>
            Security is paramount. The following must be adhered to before UAT sign-off.
          </p>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Data Residency & Cloud Infrastructure</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay backend is currently hosted on <strong>AWS Mumbai</strong>, ensuring all merchant and transaction data is stored strictly within India to comply with data localization regulations. Additionally, the microservices architecture allows the VG Pay backend to be deployed <strong>On-Premise directly on the Bank's own servers</strong> if strict internal policies require it.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Mobile App Security (Zero-Trust)</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay Agent and Merchant mobile applications natively enforce <strong>Root & Jailbreak Detection</strong> blocking execution on compromised devices. Access is further gated by mandatory <strong>Biometric Authentication</strong> (Fingerprint/FaceID).</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">SSL/TLS</strong>
              <span className="text-brand-text-muted text-sm">All VG Pay endpoints enforce HTTPS (TLS 1.2+). HTTP traffic is instantly dropped.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Payload Encryption</strong>
              <span className="text-brand-text-muted text-sm">Ensure personally identifiable information (PII) like <code className="bg-white/10 px-1 font-mono rounded">payerVpa</code> is masked or handled per compliance guidelines. Internally, the VG Pay backend encrypts sensitive data (like VPA and Payer Name) before storing it in the database.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Webhook Authentication</strong>
              <span className="text-brand-text-muted text-sm">For Pathway 2 (Razorpay-compatible), Bank Webhooks to VG Pay must be authenticated using <strong>HMAC SHA-256 signatures</strong>. The bank computes a hash of the payload using a pre-shared secret and passes it in the header (e.g., <code className="bg-white/10 px-1 font-mono rounded">X-Razorpay-Signature</code>). The VG Pay backend actively validates this signature before processing the event. (Pathway 1 uses standard API keys / mTLS).</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
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
              <strong className="text-brand-text block">Network Whitelisting</strong>
              <span className="text-brand-text-muted text-sm">The Bank must whitelist VG Pay's Egress IPs to receive callbacks (if applicable) and VG Pay will whitelist the Bank's IPs for inbound API calls.</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Data Retention & PII Lifecycle</strong>
              <span className="text-brand-text-muted text-sm">VG Pay acts strictly as a pass-through notification layer. Transaction logs containing PII (like Payer VPA) are retained in secure storage for 5 years for dispute resolution, after which they are archived and subsequently purged, in strict adherence to banking data lifecycle regulations (e.g., RBI KYC Master Direction and PMLA Rules).</span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">High Availability & Disaster Recovery</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay backend leverages a Multi-AZ (Availability Zone) architecture on AWS to ensure high availability. Specifics regarding Disaster Recovery (DR), including the exact Recovery Time Objective (RTO) and Recovery Point Objective (RPO), are currently being finalized and will be detailed in the formal SLA agreement. <strong className="text-brand-text">[Placeholder: RTO/RPO values to be defined in SLA]</strong></span>
            </div>
          </li>
          <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 space-x-3">
            <div className="bg-white/10 p-2 rounded-full mt-0.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div>
              <strong className="text-brand-text block">Immutable Audit Trails</strong>
              <span className="text-brand-text-muted text-sm">The VG Pay backend maintains strict, immutable audit logs for all administrative actions. If a Bank Admin (<code className="bg-white/10 px-1 font-mono rounded">PSP_ADMIN</code>) deletes a merchant, changes a billing plan, or unassigns a device, the system permanently logs the exact timestamp, IP address, and user ID of who performed the action to fully satisfy internal bank audits.</span>
            </div>
          </li>
        </ul>
      </motion.section>

      {/* Section 7 */}
      <motion.section id="section-7" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <UserPlus className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            7. Merchant & Agent Onboarding Workflows
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-muted text-justify">
          The onboarding process encompasses creating administrative roles and field agents, leading up to merchant registration via the <strong>VG Pay Agent App</strong>.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">7.1 Agent Provisioning Workflow</h3>
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
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">7.2 Merchant Onboarding Steps</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brand-text marker:text-brand-accent marker:font-bold">
            <li className="pl-2">
              <strong className="text-brand-text block">Merchant Registration (Pre-Verified KYC):</strong>
              Because the Merchant must already hold a verified bank account with the Bank itself, strict KYC and settlement account verifications (like Penny Drop) are natively handled by the Core Banking System prior to this process. Therefore, a Maker-Checker flow is not required in VG Pay. The Agent enters basic details (Business Name, Phone, Address), securely captures the merchant's <strong>Digital Signature</strong> on-screen, and the backend registers the merchant, automatically setting the status to <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">ACTIVE</code>.
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Device Mapping:</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-brand-text-muted">
                <li>Agent scans the QR code on the physical Soundbox.</li>
                <li>The app calls <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-brand-accent font-mono">POST /api/merchant-devices</code> with the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">merchantId</code> and <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">deviceId</code>.</li>
                <li>The backend validates the mapping and creates a record in the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">MerchantDevice</code> table, marking the device as <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono">ASSIGNED</code>.</li>
                <li><strong>Billing & Monetization (Draft - To be Reviewed & Finalized):</strong> <em className="text-brand-text-dim">Please note: The pricing models presented here are currently a draft and are subject to review and finalization.</em> Upon mapping, a billing model is assigned to the merchant. VG Pay offers multiple flexible models, such as a flat upfront fee (e.g., INR 1650) with a low monthly rental (e.g., INR 49), or a lower upfront fee (e.g., INR 999) with a higher monthly rental (e.g., INR 99). The Bank's Core Banking System is responsible for auto-debiting this fee based on the agreed terms.</li>
                <li><em className="text-brand-text-dim text-sm">Note: During this first assignment, the backend automatically provisions a user login with the <code className="bg-white/10 px-1 font-mono rounded">PSP_MERCHANT</code> role for the merchant to access the Merchant App.</em></li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Activation:</strong>
              The Soundbox connects to the MQTT broker, downloads initial config, and is ready for the first transaction.
            </li>
          </ol>
        </div>
      </motion.section>

      {/* Section 8 */}
      <motion.section id="section-8" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <Activity className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            8. Ticketing & Support Flow
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-muted text-justify">
          VG Pay natively integrates with the <strong>VG Ticketing System</strong> to provide a seamless, closed-loop support flow for both merchants and field agents.
        </p>
        
        <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r-lg mb-6">
           <h5 className="font-bold text-green-400 mb-2">No Bank Integration Required</h5>
           <p className="text-brand-text-muted text-sm">The Bank IT team is <strong>not</strong> required to integrate their own ticketing system or develop any webhooks for this process. The entire support lifecycle, including ticket creation and resolution notifications, is handled completely internally within the VG Pay ecosystem.</p>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">8.1 End-to-End Ticketing Architecture</h3>
          <ol className="list-decimal pl-5 space-y-4 text-brand-text marker:text-brand-accent marker:font-bold">
            <li className="pl-2">
              <strong className="text-brand-text block">Ticket Creation (Mobile App &rarr; VG Pay):</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>Merchants or Agents can raise complaints (e.g., Soundbox hardware faults, transaction disputes) directly from their mobile application.</li>
                <li>The mobile app sends a <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">POST /api/complaints</code> request to the VG Pay backend, passing a <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">ComplaintsDTO</code> payload with the issue details and the merchant ID.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">System Forwarding (VG Pay &rarr; VG Ticketing System):</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>Upon receiving the complaint, the VG Pay backend validates the payload, generates a unique internal <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">referenceNumber</code>, and triggers an asynchronous notification (<code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">notify-merchant-complaint</code>).</li>
                <li>The issue is securely forwarded to the VG Ticketing System via an outbound API call, converting it into an actionable support ticket for the operations team.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Ticket Tracking (Mobile App &rarr; VG Pay):</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>Merchants can track their open ticket statuses by calling the <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">GET /api/complaints/all</code> endpoint. This supports pagination, filtering, and sorting.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Resolution & Webhook (VG Ticketing System &rarr; VG Pay):</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>When the support agent marks the ticket as "Closed" or "Resolved" in the VG Ticketing System, it fires a webhook back to VG Pay's <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">TicketWebhookController</code>.</li>
                <li>Specifically, the system sends a <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">TicketClosedWebhookDTO</code> payload to the <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">POST /api/ticketing/ticket-closed</code> endpoint.</li>
              </ul>
            </li>
            <li className="pl-2">
              <strong className="text-brand-text block">Final Notification (VG Pay &rarr; Merchant):</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-brand-text-muted">
                <li>The VG Pay backend processes this closure event and immediately triggers a push notification to the merchant's device (via Firebase Cloud Messaging) to inform them that their issue is resolved.</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="space-y-4 pt-8">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-brand-accent">8.2 SLAs and Escalation Matrix</h3>
          
          <div className="space-y-3">
             <h4 className="text-lg font-bold text-brand-text">Service Level Agreements (SLAs) [Draft - Under Review]</h4>
             <p className="text-brand-text-muted text-sm italic mb-2">Please note: The SLA timelines presented below are currently a draft and are subject to finalization with the Bank's operational team.</p>
             <p className="text-brand-text-muted text-sm mb-2">VG Pay adheres to strict SLAs based on the priority and business impact of the reported issue. The SLA timer begins immediately upon ticket creation.</p>
             <div className="overflow-x-auto border border-brand-border rounded-lg">
               <table className="w-full text-sm text-left">
                 <thead className="bg-brand-sidebar text-brand-text-muted uppercase text-xs border-b border-brand-border">
                   <tr>
                     <th className="px-4 py-3 font-semibold">Priority</th>
                     <th className="px-4 py-3 font-semibold">Business Impact</th>
                     <th className="px-4 py-3 font-semibold">Ack. SLA</th>
                     <th className="px-4 py-3 font-semibold">Resolution SLA</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-brand-border">
                   <tr className="hover:bg-brand-text/5 transition-colors">
                     <td className="px-4 py-3 font-bold text-brand-text">P1</td>
                     <td className="px-4 py-3 text-brand-text-muted">Device not functional (Business stopped)</td>
                     <td className="px-4 py-3 text-brand-text-muted">30 mins</td>
                     <td className="px-4 py-3 text-brand-text-muted">4 hours</td>
                   </tr>
                   <tr className="hover:bg-brand-text/5 transition-colors">
                     <td className="px-4 py-3 font-bold text-brand-text">P2</td>
                     <td className="px-4 py-3 text-brand-text-muted">Partial impact (e.g., low volume)</td>
                     <td className="px-4 py-3 text-brand-text-muted">2 hours</td>
                     <td className="px-4 py-3 text-brand-text-muted">24 hours</td>
                   </tr>
                   <tr className="hover:bg-brand-text/5 transition-colors">
                     <td className="px-4 py-3 font-bold text-brand-text">P3</td>
                     <td className="px-4 py-3 text-brand-text-muted">Usage queries or informational</td>
                     <td className="px-4 py-3 text-brand-text-muted">4 hours</td>
                     <td className="px-4 py-3 text-brand-text-muted">72 hours</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
          
          <div className="bg-brand-panel p-5 mt-4 rounded-xl border border-brand-border">
             <h4 className="font-bold text-brand-text mb-2">Device Replacement (RMA) SLA:</h4>
             <ul className="list-disc pl-5 space-y-1 text-brand-text-muted text-sm">
                <li><strong>P1:</strong> Same day / Next business day</li>
                <li><strong>P2:</strong> Within 2 business days</li>
                <li><strong>P3:</strong> As scheduled</li>
             </ul>
          </div>
          
          <div className="space-y-3 mt-6">
             <h4 className="text-lg font-bold text-brand-text">Support Levels and Escalation Matrix</h4>
             <p className="text-brand-text-muted text-sm mb-2">If an issue is at risk of breaching its SLA, or if it involves complex defects, it will be escalated through the following tiers:</p>
             <ul className="list-disc pl-5 space-y-4 text-brand-text-muted text-sm">
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
             </ul>
          </div>

        </div>
      </motion.section>

      {/* Section 9 */}
      <motion.section id="section-9" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <CheckCircle2 className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            9. Pre-Go-Live Checklists
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="bg-brand-panel p-6 rounded-xl border border-brand-border shadow-sm">
            <h3 className="text-xl font-bold text-brand-text border-b border-brand-border pb-3 mb-4">9.1 Bank IT / Network Team</h3>
            <ul className="space-y-3">
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">IP Whitelisting completed for UAT and PROD.</span>
              </li>
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Bank switch updated to push <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">/api/transactions</code> to VG Pay on successful UPI credits.</span>
              </li>
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Webhook timeouts configured appropriately (recommend 3-5 seconds).</span>
              </li>
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Error handling built for 4xx and 5xx responses from VG Pay (refer to the Standard HTTP Responses section).</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-brand-panel p-6 rounded-xl border border-brand-border shadow-sm">
            <h3 className="text-xl font-bold text-brand-text border-b border-brand-border pb-3 mb-4">9.2 VG Pay Operations</h3>
            <ul className="space-y-3">
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight"><code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">BankPartner</code> created in PROD Database.</span>
              </li>
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Initial <code className="bg-white/10 px-1 rounded text-brand-accent font-mono text-xs">PSP_ADMIN (Bank Admin)</code> user generated and credentials securely handed over.</span>
              </li>
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Inventory (Soundboxes) allocated to the Bank in the backend system.</span>
              </li>
              <li className="flex items-start hover:bg-brand-text/5 p-2 -mx-2 rounded-lg transition-colors duration-200 gap-3">
                <input type="checkbox" className="mt-1 rounded text-brand-accent focus:ring-amber-500 w-4 h-4 cursor-pointer" />
                <span className="text-brand-text text-sm leading-tight">Bank Admin trained and verified for Agent provisioning.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 10 */}
      <motion.section id="section-10" className="scroll-mt-24 space-y-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 border-b border-brand-border pb-2">
          <FileText className="w-8 h-8 text-brand-accent" />
          <h2 className="text-4xl sm:text-5xl font-serif italic text-brand-text">
            10. Bank Information Collection Template
          </h2>
        </div>
        
        <p className="leading-relaxed text-brand-text-dim italic">
          Please fill out this template during Phase 1.
        </p>

        <div className="bg-brand-panel border border-brand-border hover:border-brand-border-strong hover:shadow-lg hover:shadow-brand-accent/5 transition-all duration-300 hover:-translate-y-0.5 rounded-xl overflow-hidden shadow-sm">
          
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
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Bank's Target Webhook URL (If applicable)</span>
              <input type="url" className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="https://" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Public Key / Certificate Contacts (For mTLS)</span>
              <textarea className="flex-1 rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={2} placeholder="Contact info or details"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-b border-brand-border pb-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Technical Lead</span>
              <div className="flex-1 space-y-2">
                <input type="text" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Name" />
                <input type="email" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Email" />
                <input type="tel" className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" placeholder="Phone" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <span className="w-48 text-sm font-medium text-brand-text-dim pt-2">Escalation Contacts for Support (L1/L2/L3)</span>
              <div className="flex-1 space-y-2">
                <textarea className="w-full rounded-md border-brand-border-strong shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border bg-white/5 text-brand-text" rows={3} placeholder="Contacts"></textarea>
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
      </motion.section>

      {/* Footer padding */}
      <div className="h-24"></div>
    </motion.div>
  );
}

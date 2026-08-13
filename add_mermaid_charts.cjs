const fs = require('fs');

let content = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

// Import Mermaid
if (!content.includes("import Mermaid")) {
    content = content.replace("import { DeviceSimulator } from './DeviceSimulator';", "import { DeviceSimulator } from './DeviceSimulator';\nimport Mermaid from './Mermaid';");
}

const swimlaneChart = `
\`\`\`mermaid
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
    Dev->>MQTT: Publish Audio Alert (Encrypted)
\`\`\`
`.replace(/\`\`\`mermaid\n/g, '').replace(/\`\`\`/g, '').trim();

const archChart = `
\`\`\`mermaid
graph TD
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
    PaymentSvc --> MqttBroker
\`\`\`
`.replace(/\`\`\`mermaid\n/g, '').replace(/\`\`\`/g, '').trim();

// Replace Swimlane
const swimlaneRegex = /<div className="w-full h-\[400px\] bg-brand-panel border border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-text-muted italic shadow-inner">[\s\S]*?<\/div>\s*<\/div>/;
const swimlaneReplacement = `<div className="w-full bg-brand-panel border border-brand-border rounded-xl p-4 sm:p-6 overflow-hidden shadow-inner">
             <Mermaid chart={\`${swimlaneChart}\`} />
          </div>`;
content = content.replace(swimlaneRegex, swimlaneReplacement);

// Replace Architecture
const archRegex = /<div className="w-full h-\[450px\] bg-brand-panel border border-brand-border rounded-xl flex flex-col items-center justify-center text-brand-text-muted italic shadow-inner">[\s\S]*?<\/div>\s*<\/div>/;
const archReplacement = `<div className="w-full bg-brand-panel border border-brand-border rounded-xl p-4 sm:p-6 overflow-hidden shadow-inner">
             <Mermaid chart={\`${archChart}\`} />
          </div>`;
content = content.replace(archRegex, archReplacement);

fs.writeFileSync('src/components/HandbookContent.tsx', content);


const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const regex = /<ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">\s*<li><strong>Hardware:<\/strong> Quectel EC200U Module, 4G LTE Cat-1 \(2G fallback\), 2000mAh Li-ion battery \(3V cutoff\)\.<\/li>\s*<li><strong>Firmware:<\/strong> 30-min Heartbeat interval, OTA security & firmware integrity\.<\/li>\s*<li><strong>Compliance:<\/strong> BIS CRS, IEC 62133 \/ IS 16046 \(Battery safety\), IS 13252\.<\/li>\s*<\/ul>/;

const newTech = `<ul className="list-disc pl-5 space-y-2 text-brand-text-muted text-justify">
            <li><strong>Hardware:</strong> Quectel EC200U Module, 4G LTE Cat-1 (2G fallback), 2000mAh Li-ion battery (3V cutoff).</li>
            <li><strong>Firmware & FOTA:</strong> 30-min Heartbeat interval, OTA security & firmware integrity. To prevent business disruption, Firmware Over-The-Air (FOTA) updates are strictly pushed during a maintenance window (1:00 AM – 4:00 AM IST). The device must have at least 30% battery to initiate the update.</li>
            <li><strong>Compliance:</strong> BIS CRS, IEC 62133 / IS 16046 (Battery safety), IS 13252.</li>
            <li><strong>Multi-Language Support:</strong> The device supports multiple regional languages (e.g., Hindi, Marathi, English). The default language is configured by the Agent during the initial onboarding via the Agent App. If a merchant wishes to change the language later, they can raise a support ticket, and an Agent can update it remotely via the provisioning app.</li>
          </ul>`;

if (regex.test(code)) {
    code = code.replace(regex, newTech);
    console.log("Replaced Tech");
} else {
    console.log("Failed Tech regex");
}
fs.writeFileSync('src/components/HandbookContent.tsx', code);

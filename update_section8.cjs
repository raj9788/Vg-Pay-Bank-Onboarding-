const fs = require('fs');
let code = fs.readFileSync('src/components/HandbookContent.tsx', 'utf8');

const s8start = code.indexOf('{/* Section 8 */}');
const s9start = code.indexOf('{/* Section 9 */}');

if (s8start !== -1 && s9start !== -1) {
  let s8content = code.substring(s8start, s9start);
  
  const additionalContent = `
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
`;

  // Insert before the closing `</section>`
  s8content = s8content.replace('</section>', additionalContent);
  code = code.substring(0, s8start) + s8content + code.substring(s9start);
  fs.writeFileSync('src/components/HandbookContent.tsx', code);
}

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


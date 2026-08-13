import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Server, Lock, CheckCircle2 } from 'lucide-react';

export function ComplianceContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h1 className="text-4xl sm:text-5xl font-serif italic text-brand-text mb-4">
            Compliance & Certifications
          </h1>
          <p className="text-brand-text-muted text-lg leading-relaxed">
            VG Pay operates as a Technology Service Provider (TSP) for Indian Banks. Our infrastructure and hardware align with strict RBI, NPCI, and MeitY guidelines to ensure data privacy, localized residency, and operational resilience.
          </p>
        </div>

        {/* Section 1: Information Security & Software */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-border pb-2">
            <Lock className="w-6 h-6 text-brand-accent" />
            <h2 className="text-2xl font-serif text-brand-text">1. Information Security & Software</h2>
          </div>
          <div className="space-y-4 text-brand-text-muted">
            <p>Our software stack and cloud infrastructure adhere strictly to banking security standards.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>CERT-In Empaneled VAPT:</strong> Vulnerability Assessment and Penetration Testing of our Mobile Apps, Web Portal, and APIs. <em>(Currently undergoing certification for Q4 Production Go-Live)</em></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>ISO/IEC 27001:2022:</strong> The international standard for Information Security Management Systems (ISMS). <em>(Currently undergoing certification for Q4 Production Go-Live)</em></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Mobile App Security Testing (MAST):</strong> Ensuring no reverse-engineering capabilities, no hardcoded keys, and total resilience against rooted/jailbroken devices.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Regulatory & Data Privacy */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-border pb-2">
            <ShieldCheck className="w-6 h-6 text-brand-accent" />
            <h2 className="text-2xl font-serif text-brand-text">2. Regulatory & Data Privacy</h2>
          </div>
          <div className="space-y-4 text-brand-text-muted">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>RBI Data Localization Directive:</strong> Absolute compliance ensuring all payment-related metadata is stored in systems strictly located within India (AWS Mumbai).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>DPDP Act 2023 (Digital Personal Data Protection Act):</strong> Operating as a "Data Processor", we enforce strict data masking (VPAs, phone numbers) and 5-year log retention/purging policies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>RBI Outsourcing Guidelines:</strong> VG Pay adheres to the cyber security framework for banks, guaranteeing established RTO and RPO metrics for disaster recovery.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Hardware & IoT */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-border pb-2">
            <Server className="w-6 h-6 text-brand-accent" />
            <h2 className="text-2xl font-serif text-brand-text">3. Hardware & IoT</h2>
          </div>
          <div className="space-y-4 text-brand-text-muted">
            <p>Our physical Payment Soundbox (S1) is fully certified for distribution and electronic safety in India.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>BIS CRS (Bureau of Indian Standards):</strong> Fully certified under the Compulsory Registration Scheme (IS 13252). Internal lithium-ion batteries are certified under IS 16046 / IEC 62133 for absolute safety.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>WPC ETA (Wireless Planning & Coordination):</strong> Equipment Type Approval granted by the Department of Telecommunications (DoT) for our 4G/LTE cellular modules.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>RoHS (Restriction of Hazardous Substances):</strong> Certified hardware ensuring no dangerous levels of lead or mercury, maintaining Corporate ESG compliance.</span>
              </li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

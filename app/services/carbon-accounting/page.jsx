import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60 z-10"></div>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv-nVwFHCTdYDdTkQG-Oq8dpg38hQbESShjpEr2GI3omoJP1Rof7cl-jXCsAuAOIalPC92mvqpqCkiguANUvHkW-awCoWoOri3uQ143JwBo3OrMxqFHZv9gjaFg27JHmlXP_CGthkt5qh4Zk_2kBINv4wdm5VE4L8yQdGHKuRGQ8aFu4OvO9XZl_NADQcwNYRlmuOaIMpGI5lYtNWry-DUv1RGAdpkh1u6uHgGs4gw6I-ArWGt92JcdGCnbEPP17hC2Fc1E4MGqZE")',
              opacity: 0.3
            }}
          ></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
              <span>ISO 14064 Compliant Verification</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              End-to-End Carbon Accounting &amp; Compliance
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Scope 1-3 auditing and CBAM reporting for enterprise. We provide verified data for manufacturers, exporters, and financial institutions ensuring regulatory alignment.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-all">
                View Services
              </button>
              <button className="rounded-lg border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                Download Methodology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Core Capabilities</h2>
            <p className="mt-4 text-base text-slate-500">Rigorous analysis and reporting frameworks designed for complex supply chains.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-500/50 hover:shadow-md">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-slate-50 text-green-600 group-hover:bg-green-500/10">
                <span className="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Product Carbon Footprints (PCF)</h3>
              <p className="mt-2 flex-auto text-sm leading-relaxed text-slate-500">Detailed assessment of product-level emissions for export compliance and labeling.</p>
            </div>
            {/* Service Card 2 */}
            <div className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-500/50 hover:shadow-md">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-slate-50 text-green-600 group-hover:bg-green-500/10">
                <span className="material-symbols-outlined">recycling</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Life Cycle Assessment (LCA)</h3>
              <p className="mt-2 flex-auto text-sm leading-relaxed text-slate-500">Full cradle-to-grave analysis compliant with ISO 14040/44 standards for materials.</p>
            </div>
            {/* Service Card 3 */}
            <div className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-500/50 hover:shadow-md">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-slate-50 text-green-600 group-hover:bg-green-500/10">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">CBAM Compliance</h3>
              <p className="mt-2 flex-auto text-sm leading-relaxed text-slate-500">Specialized reporting for the Carbon Border Adjustment Mechanism requirements.</p>
            </div>
            {/* Service Card 4 */}
            <div className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-500/50 hover:shadow-md">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-slate-50 text-green-600 group-hover:bg-green-500/10">
                <span className="material-symbols-outlined">co2</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Scope 1–3 Emissions</h3>
              <p className="mt-2 flex-auto text-sm leading-relaxed text-slate-500">Comprehensive GHG inventory auditing covering direct and upstream/downstream impact.</p>
            </div>
            {/* Service Card 5 */}
            <div className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-500/50 hover:shadow-md">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-slate-50 text-green-600 group-hover:bg-green-500/10">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Energy Audits</h3>
              <p className="mt-2 flex-auto text-sm leading-relaxed text-slate-500">Industrial facility energy efficiency analysis and renewable integration planning.</p>
            </div>
            {/* Service Card 6 */}
            <div className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-green-500/50 hover:shadow-md">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-slate-50 text-green-600 group-hover:bg-green-500/10">
                <span className="material-symbols-outlined">candlestick_chart</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Market Instruments</h3>
              <p className="mt-2 flex-auto text-sm leading-relaxed text-slate-500">Advisory on carbon credits procurement, offsetting strategies and REC trading.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">Our Methodology</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The Assurance Process</h2>
          </div>
          {/* Steps Container */}
          <div className="relative">
            {/* Connecting Line */}
            <div aria-hidden="true" className="absolute top-1/2 left-0 w-full -translate-y-1/2 transform hidden lg:block"></div>
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-4">
              {/* Step 1 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg border lg:border-0 border-slate-200 shadow-sm lg:shadow-none flex flex-col items-center text-center relative z-10">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-green-500 text-white font-bold text-lg shadow-sm border-4 border-white">1</div>
                <h3 className="text-lg font-bold text-slate-900">Data Collection</h3>
                <p className="mt-2 text-sm text-slate-500">Aggregating utility bills, production logs, and supply chain data via API or secure upload.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg border lg:border-0 border-slate-200 shadow-sm lg:shadow-none flex flex-col items-center text-center relative z-10">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white text-slate-900 font-bold text-lg border-2 border-slate-200 shadow-sm lg:border-4">2</div>
                <h3 className="text-lg font-bold text-slate-900">Modeling</h3>
                <p className="mt-2 text-sm text-slate-500">Applying ISO 14064 calculation methodologies and emission factor libraries.</p>
              </div>
              {/* Step 3 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg border lg:border-0 border-slate-200 shadow-sm lg:shadow-none flex flex-col items-center text-center relative z-10">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white text-slate-900 font-bold text-lg border-2 border-slate-200 shadow-sm lg:border-4">3</div>
                <h3 className="text-lg font-bold text-slate-900">Verification</h3>
                <p className="mt-2 text-sm text-slate-500">Third-party audit simulation and data gap analysis to ensure audit-readiness.</p>
              </div>
              {/* Step 4 */}
              <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-lg border lg:border-0 border-slate-200 shadow-sm lg:shadow-none flex flex-col items-center text-center relative z-10">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white text-slate-900 font-bold text-lg border-2 border-slate-200 shadow-sm lg:border-4">4</div>
                <h3 className="text-lg font-bold text-slate-900">Reporting</h3>
                <p className="mt-2 text-sm text-slate-500">Generating disclosure-ready reports for regulators, investors, or CBAM certificates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-900 border-l-4 border-green-500 pl-4">Industries Served</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-lg bg-slate-900 group aspect-[4/3] sm:aspect-[3/4]">
              <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-slate-900"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDq8GNOOoCjvkRmhsdI2zi_WUddGPIv1dAVf1GttMjSWxpWfmKs_1dHoOdgCKD4GB1zTr-PbDuAlEJtHHT268S9iaEHeEDm0pZXUe4LmR5GYn331BcVw0thE5BAjY-ycYM8DV9m-ip3z3i1Br6GcA4dmaPE-ugqszGfngoNwjPqDLkGWVEJpfW5zZ_HM-4kJ9P9Vi00oKMXWQyJKUk2Etw8cY6TTTAqdbVBMhAIcY-haPE4VobfTS-afS8AHshAW4pcdDxtsDxSYyg")',
                  opacity: 0.4
                }}
              ></div>
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="material-symbols-outlined mb-2 text-3xl text-green-500">precision_manufacturing</span>
                <h3 className="text-xl font-bold text-white">Manufacturers</h3>
                <p className="mt-1 text-xs text-slate-300">Heavy industry &amp; assembly</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-lg bg-slate-900 group aspect-[4/3] sm:aspect-[3/4]">
              <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-slate-900"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnS4Hou1Mzn5mVw8rf0yUJ2gZJNueIVgpkc5UhutmPuR6sOHqIPUAKmlG0yVu3Rn4MI8rOY7KP9RghyCUIdll3VPR6tCafIwMWPgSCxRe2RwCcck-Ut_WkWR0x74MKONphP3kSVcEIZ2-f_yfsnxRB_snghqghXJeUkwo0uioe4cK9Bxv2PMuC6QfFPDSB1Y9gCE4YphJh_qbt8u5M4DmJX3SVE5ChmUEmELGuC1QWpdHYG2R0lRtxj1ee5IDVu5b2-wgTmujtNHk")',
                  opacity: 0.4
                }}
              ></div>
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="material-symbols-outlined mb-2 text-3xl text-green-500">local_shipping</span>
                <h3 className="text-xl font-bold text-white">Exporters</h3>
                <p className="mt-1 text-xs text-slate-300">Cross-border compliance</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-lg bg-slate-900 group aspect-[4/3] sm:aspect-[3/4]">
              <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-slate-900"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1l3QzHED5q38SKovvQbNmIgO-kvWfFjhcsxvn_2mCbdJR4pmVayjAZuEP_GkN26f3aeZN237BcAlC9tlE7H1WV-FHrqnkzb5RfeCTGHw4Y7G_6_EVZb-BbhJHm5TMtMrM0HAHH5zENByDNaub3QvmIuX5gz9GYBj8lgHVzjJBj3mWTCECbmLPoILcKwLcpPWf15fDDb1LtU5C31cUob6mRz5uLGWHenfg-jMgTrJNmyuMj0dJy-VAofoSUIUIoAY_dWKM3L_Qbr0")',
                  opacity: 0.4
                }}
              ></div>
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="material-symbols-outlined mb-2 text-3xl text-green-500">architecture</span>
                <h3 className="text-xl font-bold text-white">Engineering Firms</h3>
                <p className="mt-1 text-xs text-slate-300">Infrastructure projects</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-lg bg-slate-900 group aspect-[4/3] sm:aspect-[3/4]">
              <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-slate-900"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvymJnU3tlf2pMoz2qzR0Bt9no_kJQTaRw6Jrsyf6ctSXGkP7h4v9UIynCP4GgAV8D4Cp1ubHVWPczw674aLETaLAkudsk-BDsGr4QzBhLGgArvpfUujYgTobEP5Mjkv08UeF3hfPxNq2qhqF1uHlkZBGeLtwKsXymU2jXawaxcDbx_D1Cmy6OphHhF1nJo8tVjD8KlfYURdliANyzL-bRTDIVSKLhatAWXIlcdLch1SYL3hzrQTLKa-PnQnPlmFinhxFKsGIlikc")',
                  opacity: 0.4
                }}
              ></div>
              <div className="relative flex h-full flex-col justify-end p-6">
                <span className="material-symbols-outlined mb-2 text-3xl text-green-500">agriculture</span>
                <h3 className="text-xl font-bold text-white">Food &amp; Agri</h3>
                <p className="mt-1 text-xs text-slate-300">Supply chain emissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Compliance Outcomes</h2>
              <p className="mt-4 text-lg text-slate-500">
                Our engagement model focuses on tangible deliverables. We move beyond estimation to provide auditable, bankable climate data.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">CBAM-Ready Reporting</h4>
                    <p className="text-sm text-slate-500">Documentation formatted specifically for EU customs declarations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Reduction Strategy Roadmap</h4>
                    <p className="text-sm text-slate-500">Scenario modeling for Science-Based Targets (SBTi) alignment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-600">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Investor-Grade Compliance Docs</h4>
                    <p className="text-sm text-slate-500">Verified data suitable for annual reports and sustainability disclosures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
              <div
                className="rounded-lg bg-slate-50 overflow-hidden"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOmRaRRj4mfne4yCImdFtPOkx2ObGMlAxsNlDk0JD9057q8T8KFBXsz-0TQNjDt61DHCzWUE-pg_EpZEFW7godKohYDPCzeGv3HVW2qtXmgj2fSMd2ksiouuWPjD_YSMO6x5lcGGlwFNn3jTrWldwOn6JvLQ0T3ltm5ZhllLFC0v8hsfEOrZNL7ly7A9ByPNvV0CZ_GDAnBQRveYZbqSo7jIc2_cWGiQVb1PYbKvf9R6v5VnZw6Q15HPU8pKzMEqrRFuL0O1tO00A")',
                  backgroundSize: 'cover',
                  height: '350px'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl text-center px-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Ready to ensure compliance?</h2>
          <p className="mt-4 text-lg text-slate-500">Speak with our carbon accounting specialists about your specific reporting needs.</p>
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-slate-800 transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
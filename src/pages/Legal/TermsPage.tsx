import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-void">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-12">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-steel hover:text-white font-mono text-xs transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-steel font-mono text-sm">
            Last Updated: August 11, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-fog font-sans text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong className="text-white">ZenuxsPlatform</strong>.
          </p>
          <p>
            These Terms and Conditions ("Terms", "Terms and Conditions") govern your access to and use of the ZenuxsPlatform website, including its pages, content, product listings, open-source resources, community resources, documentation links, status information, and other features made available through the platform (collectively, the "Platform").
          </p>
          <p>
            By accessing or using ZenuxsPlatform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Platform.
          </p>

          <hr className="border-border/60" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">1. About ZenuxsPlatform</h2>
            <p>
              ZenuxsPlatform is a technology and developer ecosystem platform intended to provide information, discovery, documentation links, resources, and access points for software products, developer tools, open-source projects, infrastructure services, community resources, and related technologies associated with the Zenuxs ecosystem.
            </p>
            <p>The Platform may contain information about products and services that are:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>developed by Zenuxs;</li>
              <li>maintained as open-source projects;</li>
              <li>in development or beta;</li>
              <li>provided through separate websites or applications;</li>
              <li>operated through third-party infrastructure or services; or</li>
              <li>linked to external platforms such as GitHub, Discord, documentation websites, package registries, or other services.</li>
            </ul>
            <p>The Platform itself may not directly provide every product or service described on it.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">2. Acceptance of These Terms</h2>
            <p>By accessing ZenuxsPlatform, you confirm that:</p>
            <ol className="list-decimal list-inside space-y-1 text-ash ml-4">
              <li>you are legally capable of entering into these Terms under applicable law;</li>
              <li>you will use the Platform only for lawful purposes;</li>
              <li>you will comply with these Terms and applicable laws and regulations; and</li>
              <li>you will not use the Platform in a manner that could damage, disable, overburden, or impair the Platform or interfere with other users.</li>
            </ol>
            <p>If you are using the Platform on behalf of an organization, you represent that you have authority to bind that organization to these Terms.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">3. Use of the Platform</h2>
            <p>You may use ZenuxsPlatform for legitimate purposes including:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>discovering Zenuxs products and technologies;</li>
              <li>reading product and technical information;</li>
              <li>accessing documentation;</li>
              <li>exploring open-source repositories;</li>
              <li>learning about developer tools and infrastructure;</li>
              <li>accessing community resources;</li>
              <li>reviewing project information; and</li>
              <li>accessing external services through links provided by the Platform.</li>
            </ul>
            <p>You must not use the Platform to:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>violate any applicable law or regulation;</li>
              <li>attempt to gain unauthorized access to systems, accounts, networks, or infrastructure;</li>
              <li>interfere with the operation or security of the Platform;</li>
              <li>distribute malware, malicious code, or harmful software;</li>
              <li>conduct unauthorized security testing or attacks;</li>
              <li>abuse, scrape, overload, or disrupt Platform infrastructure;</li>
              <li>impersonate Zenuxs, ZenuxsPlatform, another user, developer, organization, or service;</li>
              <li>use the Platform for fraud, deception, harassment, or other unlawful activities;</li>
              <li>circumvent security, authentication, access-control, or rate-limiting mechanisms; or</li>
              <li>use Platform information to facilitate activities that are unlawful or unauthorized.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">4. Product and Service Information</h2>
            <p>ZenuxsPlatform may display information about multiple products and services.</p>
            <p>Product information may include:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>descriptions;</li>
              <li>features;</li>
              <li>technical specifications;</li>
              <li>development status;</li>
              <li>documentation;</li>
              <li>repository links;</li>
              <li>community links;</li>
              <li>deployment information;</li>
              <li>compatibility information; and</li>
              <li>links to separate product websites.</li>
            </ul>
            <p>
              Some products may be marked as <strong className="text-white">Live</strong>, <strong className="text-white">Beta</strong>, <strong className="text-white">Development</strong>, or another status.
            </p>
            <p>
              Product information is provided for general informational and discovery purposes. Features, availability, specifications, compatibility, pricing, APIs, documentation, and technical behavior may change without prior notice.
            </p>
            <p>
              Where a product is operated through a separate website or service, that service may have its own terms, privacy policy, license, and other legal requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">5. External Websites and Third-Party Services</h2>
            <p>The Platform may contain links to external websites and services, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>GitHub;</li>
              <li>Discord;</li>
              <li>product websites;</li>
              <li>documentation platforms;</li>
              <li>package registries;</li>
              <li>hosting providers;</li>
              <li>cloud services;</li>
              <li>APIs; and</li>
              <li>other third-party websites.</li>
            </ul>
            <p>These external services are not necessarily controlled or operated by ZenuxsPlatform.</p>
            <p>Your use of an external service is subject to that service's own terms, policies, licenses, and privacy practices.</p>
            <p>ZenuxsPlatform is not responsible for:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>the availability of external websites;</li>
              <li>their content;</li>
              <li>their security;</li>
              <li>their privacy practices;</li>
              <li>their terms and policies;</li>
              <li>their products or services; or</li>
              <li>any loss or damage resulting from your use of an external service.</li>
            </ul>
            <p>A link to an external service does not necessarily constitute an endorsement, partnership, guarantee, or recommendation.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">6. Open-Source Software</h2>
            <p>ZenuxsPlatform may provide information about open-source repositories, packages, libraries, plugins, and other open-source projects.</p>
            <p>Open-source software is governed by the applicable license associated with that particular project.</p>
            <p>Different projects may use different licenses, including permissive or copyleft licenses.</p>
            <p>You are responsible for reviewing and complying with the applicable license before using, modifying, distributing, or incorporating any open-source software into your projects.</p>
            <p>Nothing in these Terms overrides the rights granted to you under an applicable open-source license.</p>
            <p>Where applicable, the repository or project license will control the use and distribution of that particular software.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">7. Developer Tools and Technical Content</h2>
            <p>ZenuxsPlatform may provide technical examples, documentation, code snippets, configuration examples, architectural information, API references, and other developer resources.</p>
            <p>Such information is provided for educational and development purposes.</p>
            <p>You are responsible for reviewing, testing, validating, and securing any code or configuration before using it in production.</p>
            <p>You should not assume that an example, code snippet, configuration, API, library, or architectural recommendation is suitable for your particular environment.</p>
            <p>You are solely responsible for:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>your applications;</li>
              <li>your infrastructure;</li>
              <li>your deployments;</li>
              <li>your credentials and secrets;</li>
              <li>your API keys;</li>
              <li>your configuration;</li>
              <li>your security controls; and</li>
              <li>the consequences of deploying or using software.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">8. AI-Related Features</h2>
            <p>Certain Zenuxs products or resources may include artificial intelligence, machine-learning, automated coding, code generation, or AI-assisted development functionality.</p>
            <p>AI-generated output may contain:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>errors;</li>
              <li>inaccurate information;</li>
              <li>insecure code;</li>
              <li>incomplete implementations;</li>
              <li>outdated information;</li>
              <li>unintended behavior; or</li>
              <li>content that requires additional review.</li>
            </ul>
            <p>AI-generated output should not be treated as automatically correct, secure, or production-ready.</p>
            <p>You are responsible for reviewing and validating AI-generated code, configurations, commands, recommendations, and other output before using them.</p>
            <p>You should not provide confidential credentials, passwords, private keys, authentication tokens, or other sensitive information to an AI-enabled service unless you have determined that doing so is appropriate and supported by the applicable service.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">9. Accounts and Authentication</h2>
            <p>Certain Zenuxs services may provide authentication, identity, OAuth, session management, or account-related functionality.</p>
            <p>Where an account is required, you are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>providing accurate information;</li>
              <li>maintaining the confidentiality of your credentials;</li>
              <li>protecting authentication tokens and recovery mechanisms;</li>
              <li>notifying the relevant service of unauthorized access; and</li>
              <li>all activities performed through your account, to the extent permitted by applicable law.</li>
            </ul>
            <p>You must not use another person's account without authorization.</p>
            <p>Additional account-specific terms may apply to individual Zenuxs services.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">10. Infrastructure, Hosting, and Deployment</h2>
            <p>Certain Zenuxs services may provide hosting, deployment, infrastructure, edge networking, APIs, or related functionality.</p>
            <p>Infrastructure services may experience:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>maintenance;</li>
              <li>downtime;</li>
              <li>network interruptions;</li>
              <li>hardware or software failures;</li>
              <li>security incidents;</li>
              <li>deployment failures;</li>
              <li>configuration problems;</li>
              <li>third-party provider failures; or</li>
              <li>service limitations.</li>
            </ul>
            <p>Unless expressly stated otherwise in a separate service agreement, no specific uptime, availability, performance, latency, or durability guarantee is provided through these Terms.</p>
            <p>You are responsible for maintaining appropriate backups and disaster-recovery procedures for your applications and data.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">11. Community Resources</h2>
            <p>ZenuxsPlatform may provide access to community resources such as Discord servers, discussion channels, repositories, issue trackers, or other collaborative platforms.</p>
            <p>Community participation must remain lawful and respectful.</p>
            <p>You must not use community resources to:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>harass or threaten others;</li>
              <li>distribute malicious software;</li>
              <li>conduct scams or fraud;</li>
              <li>impersonate others;</li>
              <li>distribute illegal content;</li>
              <li>intentionally disrupt community services;</li>
              <li>exploit security vulnerabilities without authorization; or</li>
              <li>otherwise violate the rules of the relevant community platform.</li>
            </ul>
            <p>Third-party community platforms may enforce their own rules independently of ZenuxsPlatform.</p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">12. User Content</h2>
            <p>If the Platform or an associated Zenuxs service allows you to submit, publish, upload, or otherwise provide content ("User Content"), you remain responsible for that content.</p>
            <p>You represent that you have the necessary rights and permissions to submit such content.</p>
            <p>You must not submit content that:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>infringes intellectual-property rights;</li>
              <li>violates privacy rights;</li>
              <li>contains malicious code;</li>
              <li>is unlawful;</li>
              <li>contains unauthorized confidential information;</li>
              <li>impersonates another person or organization; or</li>
              <li>violates applicable platform rules.</li>
            </ul>
            <p>Where necessary to operate the relevant service, you grant Zenuxs the limited rights required to host, process, display, transmit, or otherwise operate on your User Content.</p>
            <p>This grant does not transfer ownership of your User Content to Zenuxs.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">13. Intellectual Property</h2>
            <p>Unless otherwise stated, the ZenuxsPlatform website, including its original design, branding, logos, visual elements, written content, interface, and platform-specific materials, is owned by or licensed to Zenuxs and is protected by applicable intellectual-property laws.</p>
            <p>You may not reproduce, modify, distribute, sell, publicly display, or create derivative works from proprietary Platform materials without appropriate authorization, except where permitted by applicable law or an applicable license.</p>
            <p>Third-party names, logos, repositories, trademarks, and software remain the property of their respective owners.</p>
            <p>Nothing in these Terms grants you ownership of Zenuxs trademarks or third-party intellectual property.</p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">14. Trademarks</h2>
            <p>"Zenuxs", "ZenuxsPlatform", product names, logos, visual identities, and related marks may constitute trademarks or brand assets of Zenuxs or their respective owners.</p>
            <p>You may not use these marks in a manner that:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>suggests an unauthorized partnership;</li>
              <li>implies endorsement;</li>
              <li>causes confusion regarding ownership; or</li>
              <li>violates applicable trademark law.</li>
            </ul>
            <p>Third-party trademarks appearing on the Platform belong to their respective owners.</p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">15. Security</h2>
            <p>We take reasonable measures intended to protect the Platform.</p>
            <p>However, no website, software system, network, or online service can be guaranteed to be completely secure.</p>
            <p>You must not attempt to exploit, bypass, or compromise Platform security without explicit authorization.</p>
            <p>If you discover a potential security vulnerability, please report it through the appropriate Zenuxs security or support channel rather than publicly exploiting or distributing details of the vulnerability.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">16. Availability and Changes</h2>
            <p>ZenuxsPlatform may be modified, updated, suspended, or discontinued at any time.</p>
            <p>We may:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>add or remove features;</li>
              <li>change product information;</li>
              <li>modify the website design;</li>
              <li>change links;</li>
              <li>update documentation;</li>
              <li>change product status;</li>
              <li>introduce new services;</li>
              <li>discontinue services; or</li>
              <li>temporarily restrict access.</li>
            </ul>
            <p>We do not guarantee that every part of the Platform will always be available.</p>
          </section>

          {/* Section 17 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">17. Disclaimer of Warranties</h2>
            <p>To the maximum extent permitted by applicable law, ZenuxsPlatform and its content are provided on an "as is" and "as available" basis.</p>
            <p>We do not warrant that:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>the Platform will always be available;</li>
              <li>the Platform will be uninterrupted or error-free;</li>
              <li>information will always be accurate or complete;</li>
              <li>products will remain available;</li>
              <li>external links will remain active;</li>
              <li>software will be secure or free from vulnerabilities;</li>
              <li>technical information will remain current; or</li>
              <li>any particular product or service will meet your requirements.</li>
            </ul>
            <p>You use the Platform and related resources at your own discretion and risk.</p>
          </section>

          {/* Section 18 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">18. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Zenuxs and its owners, contributors, maintainers, affiliates, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to your use of the Platform.</p>
            <p>This may include, where legally permitted:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>loss of data;</li>
              <li>loss of profits;</li>
              <li>business interruption;</li>
              <li>loss of revenue;</li>
              <li>security incidents;</li>
              <li>service interruption;</li>
              <li>deployment failures;</li>
              <li>software errors;</li>
              <li>third-party service failures; or</li>
              <li>loss arising from reliance on information provided through the Platform.</li>
            </ul>
            <p>Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.</p>
          </section>

          {/* Section 19 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">19. Indemnification</h2>
            <p>To the extent permitted by applicable law, you agree to indemnify and hold harmless Zenuxs and its owners, contributors, maintainers, affiliates, and service providers from claims, liabilities, damages, losses, and expenses arising from:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>your unlawful use of the Platform;</li>
              <li>your violation of these Terms;</li>
              <li>your violation of another person's rights;</li>
              <li>your misuse of Zenuxs services;</li>
              <li>your User Content; or</li>
              <li>your unauthorized access to or interference with systems or services.</li>
            </ul>
          </section>

          {/* Section 20 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">20. Suspension or Termination</h2>
            <p>We may suspend or restrict access to the Platform where reasonably necessary to:</p>
            <ul className="list-disc list-inside space-y-1 text-ash ml-4">
              <li>protect the Platform;</li>
              <li>protect users;</li>
              <li>prevent abuse;</li>
              <li>investigate security incidents;</li>
              <li>comply with legal obligations;</li>
              <li>enforce these Terms; or</li>
              <li>address misuse of the Platform.</li>
            </ul>
            <p>Where appropriate and reasonably possible, we may provide notice before taking such action.</p>
          </section>

          {/* Section 21 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">21. Privacy</h2>
            <p>Your use of ZenuxsPlatform may involve the processing of certain information.</p>
            <p>Any collection, use, storage, or processing of personal information should be described in the applicable <strong className="text-white">Privacy Policy</strong>.</p>
            <p>Where a separate Zenuxs product collects or processes personal information, that product may have its own privacy policy and data-processing practices.</p>
            <p>These Terms do not replace or override an applicable Privacy Policy.</p>
          </section>

          {/* Section 22 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">22. Children</h2>
            <p>The Platform is intended primarily for developers, technology users, organizations, and other individuals capable of legally using technology services.</p>
            <p>If applicable law requires parental or guardian consent for your use of a particular service, you must obtain that consent before using the service.</p>
          </section>

          {/* Section 23 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">23. Changes to These Terms</h2>
            <p>We may update these Terms from time to time.</p>
            <p>When material changes are made, we may update the "Last Updated" date and, where appropriate, provide additional notice.</p>
            <p>Your continued use of ZenuxsPlatform after updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law.</p>
          </section>

          {/* Section 24 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">24. Governing Law</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws applicable in <strong className="text-white">India</strong>, unless applicable law requires otherwise.</p>
            <p>Subject to applicable law, disputes arising from or relating to these Terms or the Platform shall be subject to the jurisdiction of the competent courts located in <strong className="text-white">India</strong>.</p>
          </section>

          {/* Section 25 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">25. Severability</h2>
            <p>If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, that provision shall be interpreted or modified to the minimum extent necessary to make it enforceable.</p>
            <p>The remaining provisions shall continue in full force and effect.</p>
          </section>

          {/* Section 26 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">26. Waiver</h2>
            <p>Failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce that provision in the future.</p>
          </section>

          {/* Section 27 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">27. Entire Agreement</h2>
            <p>These Terms, together with any applicable Privacy Policy, product-specific terms, licenses, policies, and agreements referenced by the Platform, constitute the applicable agreement between you and Zenuxs regarding your use of ZenuxsPlatform, except where a separate written agreement expressly applies.</p>
          </section>

          {/* Section 28 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">28. Contact</h2>
            <p>If you have questions, concerns, legal notices, or other inquiries regarding these Terms, please contact:</p>
            <p>
              <strong className="text-white">Zenuxs / ZenuxsPlatform</strong>
              <br />
              Email: <strong className="text-ember">legal@zenuxs.in</strong>
              <br />
              Website: <a href="https://zenuxs.in" target="_blank" rel="noopener noreferrer" className="text-ember hover:text-ember-hover transition-colors">https://zenuxs.in</a>
            </p>
          </section>

          {/* Section 29 */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">29. Acknowledgment</h2>
            <p>By accessing or using ZenuxsPlatform, you acknowledge that you have read these Terms and agree to comply with them.</p>
            <p className="text-steel font-mono text-xs pt-4">Last Updated: August 11, 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

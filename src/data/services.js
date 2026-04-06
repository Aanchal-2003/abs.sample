import { CheckCircle, Link2, Code, Wrench, Server, Smartphone } from "lucide-react";
import implementationImg from "../assets/illustrations/implementation.png";
import integrationImg from "../assets/illustrations/integration.png";
import customizationImg from "../assets/illustrations/customization.png";
import cloudImg from "../assets/illustrations/cloud.png";
import maintenanceImg from "../assets/illustrations/maintenance.png";
import mobileImg from "../assets/illustrations/mobile.png";
import tdlV2Img from "../assets/illustrations/tdl_v2.png";
import cloudV2Img from "../assets/illustrations/cloud_v2.png";
import mobileV2Img from "../assets/illustrations/mobile_v2.png";
import integrationV2Img from "../assets/illustrations/integration_v2.png";

export const services = [
  {
    title: "Tally Solutions",
    slug: "tally-solutions",
    category: "core",
    tagline: "Complete TallyPrime ecosystem — licensing, setup & compliance",
    desc: "Authorized TallyPrime licensing with expert setup, GST compliance, multi-location deployment, and full ERP customization for businesses of every size.",
    icon: CheckCircle,
    iconColor: "text-brand-red",
    iconBg: "bg-brand-red/5",
    image: implementationImg,
    heroImage: implementationImg,
    subServiceImage: implementationImg,
    scene: "handshake",
    badge: "Core Tally Services",
    emoji: "🏦",
    details: [
      "TallyPrime Single & Multi-User Licensing",
      "GST Setup & Compliance Filing",
      "Data Migration & Validation",
      "Invoice & Voucher Customization",
      "Tally ERP 9 to TallyPrime Upgrade",
      "Multi-Branch Configuration"
    ],
    keyFeatures: [
      "Authorized TallyPrime Licensing",
      "GST Setup & Compliance Filing",
      "Multi-user Tally Installation",
      "Data Migration & Validation",
      "Invoice & Voucher Customization",
      "Remote Access Configuration"
    ],
    highlights: [
      { stat: "500+", label: "Licenses Deployed" },
      { stat: "99%", label: "GST Compliance Rate" },
      { stat: "<4hr", label: "Avg. Setup Time" }
    ],
    process: [
      { step: 1, title: "Requirement Audit", desc: "We analyze your current accounting workflows, user count, and compliance needs to recommend the right TallyPrime edition." },
      { step: 2, title: "License & Setup", desc: "Procure authorized licenses, install TallyPrime across all locations, configure users, security roles, and company profiles." },
      { step: 3, title: "Data Migration", desc: "Migrate historical data from Tally ERP 9, spreadsheets, or other ERPs with full validation and reconciliation." },
      { step: 4, title: "Go-Live & Training", desc: "Hands-on training for your team, go-live support, and 30-day post-deployment handholding to ensure smooth adoption." }
    ],
    subServices: [
      { name: "TallyPrime", desc: "Latest-generation business management software with connected services, smart reports, and modern UX." },
      { name: "Tally Virtual User (TVU)", desc: "Remote multi-user access license enabling teams to work from anywhere on a single Tally instance." },
      { name: "Tally ERP 9 Support", desc: "Legacy support, data repair, and guided migration path from Tally ERP 9 to TallyPrime." },
      { name: "TallyPrime Server", desc: "Multi-site, multi-user server deployment for enterprises needing concurrent access across branches." },
      { name: "TallyPrime Auditors Edition", desc: "Read-only Tally access designed for CA firms and external auditors — zero risk of accidental data changes." },
      { name: "Tally Software Services (TSS)", desc: "Annual subscription for product updates, statutory compliance patches, and connected banking features." }
    ],
    faqs: [
      { q: "What is the difference between TallyPrime and Tally ERP 9?", a: "TallyPrime is the latest version with a modern interface, connected banking, multi-tasking, and SmartFind. Tally ERP 9 is the legacy version no longer receiving new features. We help you migrate seamlessly." },
      { q: "Can I use TallyPrime on multiple computers?", a: "Yes — with a Multi-User license or Tally Virtual User (TVU) setup. We configure multi-user access with proper security roles for each team member." },
      { q: "How long does a typical TallyPrime setup take?", a: "A standard single-location setup takes 2-4 hours. Multi-branch deployments with data migration typically complete within 1-3 business days." },
      { q: "Do you handle GST return filing?", a: "We configure TallyPrime for GST compliance including GSTR-1, GSTR-3B, e-Invoice, and e-Way Bill generation. Filing support is available under our AMC plans." }
    ]
  },
  {
    title: "Tally Integration",
    slug: "tally-integration",
    category: "integration",
    tagline: "Seamless API connectivity between Tally and your business tools",
    desc: "Connect TallyPrime with eCommerce platforms, CRMs, payment gateways, and custom applications through robust API integrations and real-time data sync.",
    icon: Link2,
    iconColor: "text-brand-red",
    iconBg: "bg-brand-red/5",
    image: integrationImg,
    heroImage: integrationImg,
    subServiceImage: integrationV2Img,
    scene: "api-bridge",
    badge: "API & Data Integration",
    emoji: "🔗",
    details: [
      "Bi-directional Tally API Sync",
      "Real-Time Data Extraction",
      "eCommerce Platform Integration",
      "Custom Webhook Development",
      "Payment Gateway Connectivity",
      "Legacy ERP Migration"
    ],
    keyFeatures: [
      "Bi-directional Tally API Sync",
      "eCommerce Platform Integration",
      "Real-Time Data Extraction",
      "Legacy ERP to Tally Migration",
      "Custom Webhook Development",
      "Payment Gateway Connectivity"
    ],
    highlights: [
      { stat: "200+", label: "Integrations Built" },
      { stat: "99.9%", label: "Sync Uptime" },
      { stat: "50ms", label: "Avg. Sync Latency" }
    ],
    process: [
      { step: 1, title: "Discovery", desc: "Map your existing systems, data flows, and identify integration touch-points between Tally and third-party platforms." },
      { step: 2, title: "Architecture", desc: "Design the integration architecture — API endpoints, data mapping, error handling, and retry logic." },
      { step: 3, title: "Development", desc: "Build, test, and deploy bi-directional sync connectors with real-time monitoring and logging." },
      { step: 4, title: "Go-Live & Monitor", desc: "Production deployment with 24/7 monitoring dashboards, alerting, and ongoing sync health checks." }
    ],
    subServices: [
      { name: "Tally API Integration", desc: "RESTful API connectors for reading and writing data to TallyPrime programmatically." },
      { name: "Quickbook Tally Integration", desc: "Automated two-way sync between QuickBooks and Tally for businesses transitioning or running parallel systems." },
      { name: "Excel to Tally Import", desc: "Bulk import utility for migrating Excel/CSV data into Tally vouchers, masters, and stock items." },
      { name: "eCommerce Integration", desc: "Connect Shopify, WooCommerce, or custom eCommerce platforms directly with Tally inventory and invoicing." },
      { name: "Integration with Magento", desc: "Deep Magento 2 integration for syncing orders, inventory, customer data, and financial entries with TallyPrime." },
      { name: "PHP / Java / ASP.NET Integration", desc: "Custom middleware development in your tech stack to bridge your applications with Tally's XML/ODBC interface." },
      { name: "Payment Gateway Connectivity", desc: "Integrate Razorpay, PayTM, or bank payment APIs with Tally for automated receipt and payment entry." },
      { name: "CRM Integration", desc: "Sync customer data, invoices, and outstanding between Salesforce, HubSpot, or Zoho CRM and TallyPrime." }
    ],
    faqs: [
      { q: "Can Tally integrate with my existing ERP or CRM?", a: "Yes — we build custom API connectors for virtually any platform including SAP, Zoho, Salesforce, and custom-built ERPs using Tally's XML and ODBC interfaces." },
      { q: "Is real-time sync possible or is it batch-based?", a: "We support both. Real-time sync via webhooks for critical data (orders, payments) and scheduled batch sync for bulk operations (inventory, master data)." },
      { q: "What happens if a sync fails?", a: "Our integration layer includes automatic retry logic, dead-letter queues, and alerting. Failed transactions are logged and can be manually retried from a dashboard." },
      { q: "Do you support multi-company Tally setups?", a: "Absolutely. Our integration architecture supports routing data to the correct Tally company based on configurable business rules." }
    ]
  },
  {
    title: "TDL Development",
    slug: "tdl-development",
    category: "development",
    tagline: "Custom scripts, solution boosters & add-on modules for TallyPrime",
    desc: "Tailored TDL scripts, TallyPrime Solution Boosters, and powerful add-on modules to extend Tally far beyond its default capabilities.",
    icon: Code,
    iconColor: "text-brand-red",
    iconBg: "bg-brand-red/5",
    image: customizationImg,
    heroImage: tdlV2Img,
    subServiceImage: customizationImg,
    scene: "developer",
    badge: "TDL & Add-On Development",
    emoji: "⚙️",
    details: [
      "Custom Report & Invoice Design",
      "Automated Workflow Scripts",
      "Solution Boosters (Barcode, QC, SAM)",
      "Add-On Modules (Audit Trail, Security)",
      "Plugin & Module Development",
      "E-Way Bill & Transport Modules"
    ],
    keyFeatures: [
      "Custom Report & Dashboard Design",
      "Invoice & Voucher Format Control",
      "Godown & User-Level Security",
      "Automated Workflow Scripts",
      "E-Way Bill & Transport Modules",
      "Advanced Business Logic"
    ],
    highlights: [
      { stat: "500+", label: "TDLs Delivered" },
      { stat: "25+", label: "Solution Boosters" },
      { stat: "100%", label: "Source Code Ownership" }
    ],
    process: [
      { step: 1, title: "Workflow Analysis", desc: "Study your business processes, pain points, and identify where TDL customization or add-ons can eliminate manual work." },
      { step: 2, title: "TDL Design", desc: "Design the script logic, UI changes, report layouts, and security model. You approve the spec before we write a single line." },
      { step: 3, title: "Development & Testing", desc: "Write, unit-test, and integration-test the TDL scripts against your actual Tally data in a sandbox environment." },
      { step: 4, title: "Deployment & Training", desc: "Deploy to production, train your team on the new functionality, and provide documentation for future reference." }
    ],
    subServices: [
      { name: "Custom Reports & Invoices", desc: "Tailored report formats, GST invoices, delivery challans, and management dashboards designed to your exact requirements." },
      { name: "Barcode & Label Printing", desc: "Generate and print product barcodes, bin labels, and shipping labels directly from TallyPrime with scanner integration." },
      { name: "Supply Chain Visibility", desc: "Real-time stock movement tracking, purchase order status, and vendor performance dashboards within TallyPrime." },
      { name: "Item Name Creator", desc: "Structured item naming with auto-generation based on category, brand, size, and variant attributes." },
      { name: "Serial Number Management", desc: "Track individual units by serial number through purchase, stock transfer, and sales with full audit trail." },
      { name: "Rack / Bin Stock Management", desc: "Warehouse location mapping — assign and track inventory at rack, shelf, and bin level within TallyPrime." },
      { name: "KIT Items & BOM", desc: "Kit/bundle and Bill of Materials management for manufacturing and assembly operations." },
      { name: "Quality Control (QC)", desc: "Inbound and outbound quality inspection workflows with pass/fail tracking and quarantine management." },
      { name: "Sales Activity Management (SAM)", desc: "Field sales activity logging, target tracking, and performance analytics within TallyPrime." },
      { name: "Currency Forward Booking", desc: "Manage forex forward contracts, track maturity dates, and auto-calculate exchange differences." },
      { name: "Smart Backup++", desc: "Automated scheduled backups with compression, versioning, and cloud upload support." },
      { name: "Digitally Signed Invoice (DSC)", desc: "Apply digital signatures to invoices and vouchers for legal compliance and paperless operations." },
      { name: "Multi File Attachment", desc: "Attach PDFs, images, and documents to any Tally voucher or master for paperless record-keeping." },
      { name: "SMS Module", desc: "Auto-send SMS alerts for invoice generation, payment reminders, and delivery confirmations." },
      { name: "GST Reminder", desc: "Automated GST filing deadline reminders and compliance status dashboard." },
      { name: "One Click Outstanding", desc: "Instant outstanding balance reports across all parties with aging analysis at a single click." },
      { name: "Multiple Branch Management", desc: "Centralized multi-branch accounting with inter-branch stock transfer and consolidated reporting." },
      { name: "Sheet Magic — Excel Report Writer", desc: "Export any Tally report to professionally formatted Excel sheets with charts and pivot tables." },
      { name: "Audit Trail with Voucher History", desc: "Complete edit history for every voucher — who changed what, when, and the before/after values." },
      { name: "Advance Transaction Level Security", desc: "Granular access control — restrict users by voucher type, amount threshold, date range, and field-level permissions." },
      { name: "Material Requirement Planning", desc: "Auto-generate purchase orders based on BOM, stock levels, lead times, and sales forecasts." },
      { name: "Auto Manual Voucher Numbering", desc: "Flexible voucher numbering with prefix, suffix, series, and financial year reset rules." },
      { name: "Transaction Authorisation", desc: "Multi-level approval workflows for high-value transactions with maker-checker controls." }
    ],
    faqs: [
      { q: "What is TDL and can I modify it myself?", a: "TDL (Tally Definition Language) is Tally's scripting language. While it requires specialized expertise, we provide full source code and documentation so your team can make minor tweaks." },
      { q: "Will custom TDLs break when Tally updates?", a: "We build TDLs following Tally's best practices for forward compatibility. With an active TSS subscription, we provide free compatibility updates when new Tally versions release." },
      { q: "How many of the Solution Boosters can I use together?", a: "All of them — our modules are designed to work independently or together. We test compatibility across the full suite before deployment." },
      { q: "Do you provide source code for custom TDLs?", a: "Yes — you receive complete ownership of the source code, documentation, and the right to modify or extend it." }
    ]
  },
  {
    title: "Annual Maintenance",
    slug: "annual-maintenance",
    category: "support",
    tagline: "Priority support, TSS renewals & hands-on training",
    desc: "Comprehensive AMC coverage with TSS renewals, 24/7 remote support, onsite visits, data repair, and hands-on training for your entire team.",
    icon: Wrench,
    iconColor: "text-brand-red",
    iconBg: "bg-brand-red/5",
    image: maintenanceImg,
    heroImage: maintenanceImg,
    scene: "support-desk",
    badge: "AMC & TSS Support",
    emoji: "🛠️",
    details: [
      "TSS Renewal & Management",
      "24/7 Remote Desktop Support",
      "Onsite Support Visits",
      "Data Corruption Repair",
      "Tally Version Upgrades",
      "Team Training Programs"
    ],
    keyFeatures: [
      "TSS (Tally Software Services) Renewal",
      "Data Corruption Repair & Splitting",
      "24/7 Remote Desktop Support",
      "Tally Version Upgrades",
      "Multi-user Access Audits",
      "Performance Optimization"
    ],
    highlights: [
      { stat: "98%", label: "Client Retention" },
      { stat: "<2hr", label: "Avg. Response Time" },
      { stat: "150+", label: "Active AMC Clients" }
    ],
    process: [
      { step: 1, title: "AMC Enrollment", desc: "Choose the right AMC plan for your business size and support needs — Basic, Standard, or Priority tiers." },
      { step: 2, title: "System Health Check", desc: "Our team performs a comprehensive audit of your Tally installation, data integrity, and infrastructure." },
      { step: 3, title: "Ongoing Support", desc: "Access 24/7 remote support, scheduled onsite visits, priority issue resolution, and version upgrades throughout the year." },
      { step: 4, title: "Quarterly Review", desc: "Regular performance reviews, usage analytics, and recommendations for optimization and feature adoption." }
    ],
    subServices: [
      { name: "Support — Onsite & Remote", desc: "Dedicated support engineers available via remote desktop or scheduled onsite visits for hands-on troubleshooting." },
      { name: "AMC / Annual Support Cover", desc: "All-inclusive annual contract covering software updates, bug fixes, data repair, and unlimited support tickets." },
      { name: "Data Synchronization", desc: "Multi-location data sync setup, monitoring, and conflict resolution to keep all branches in perfect sync." },
      { name: "Training Programs", desc: "Structured training for new users, advanced features, GST compliance, and admin-level Tally management." },
      { name: "Invoice Customization Support", desc: "Ongoing invoice format updates, new report requests, and compliance format changes covered under AMC." },
      { name: "Antra CX Support", desc: "Setup, configuration, and ongoing support for Tally's Antra CX connected services platform." }
    ],
    faqs: [
      { q: "What does the AMC cover?", a: "Our AMC covers unlimited remote support, scheduled onsite visits, TSS renewal management, data repair, version upgrades, and basic TDL modifications — all for one annual fee." },
      { q: "What is the difference between AMC and TSS?", a: "TSS is Tally's official software subscription for product updates and connected services. AMC is our comprehensive support contract that includes TSS management plus hands-on technical support." },
      { q: "Can I get support outside business hours?", a: "Priority AMC plans include 24/7 emergency support via remote desktop. Standard plans cover Mon-Sat 9AM-7PM IST with email support after hours." },
      { q: "Do you provide on-site support in my city?", a: "We provide onsite support across Assam and Northeast India. For other regions, we offer remote desktop support with the same SLA guarantees." }
    ]
  },
  {
    title: "Cloud Services",
    slug: "cloud-services",
    category: "cloud",
    tagline: "Secure cloud hosting for Tally with 99.9% uptime",
    desc: "Run TallyPrime on secure AWS/Azure cloud infrastructure with automated backups, cross-platform access, and 99.9% uptime SLA — access your data from anywhere.",
    icon: Server,
    iconColor: "text-brand-red",
    iconBg: "bg-brand-red/5",
    image: cloudImg,
    heroImage: cloudV2Img,
    subServiceImage: cloudImg,
    scene: "cloud-server",
    badge: "Tally on Cloud",
    emoji: "☁️",
    details: [
      "Tally Virtual User (TVU) Setup",
      "AWS / Azure Private Hosting",
      "Automated Daily Remote Backup",
      "Mac & Windows Cross Platform",
      "TallyServer 9 Deployment",
      "99.9% Uptime SLA"
    ],
    keyFeatures: [
      "Tally Virtual User (TVU) Setup",
      "AWS / Azure Private Hosting",
      "Automated Daily Remote Backup",
      "Mac & Windows Cross Platform",
      "TallyServer 9 Deployment",
      "99.9% Uptime SLA Guarantee"
    ],
    highlights: [
      { stat: "99.9%", label: "Uptime SLA" },
      { stat: "256-bit", label: "Encryption" },
      { stat: "3x", label: "Redundant Backup" }
    ],
    process: [
      { step: 1, title: "Infrastructure Assessment", desc: "Evaluate your user count, data volume, and access patterns to size the right cloud instance and backup strategy." },
      { step: 2, title: "Cloud Setup", desc: "Provision dedicated cloud servers on AWS/Azure, install TallyPrime, configure security groups, and setup VPN access." },
      { step: 3, title: "Migration", desc: "Migrate your Tally data to the cloud with zero-downtime cutover, DNS configuration, and user access provisioning." },
      { step: 4, title: "Monitor & Maintain", desc: "24/7 infrastructure monitoring, automated backups, patch management, and proactive scaling as your business grows." }
    ],
    subServices: [
      { name: "Tally on Cloud", desc: "Fully managed TallyPrime hosting on enterprise-grade cloud infrastructure with dedicated resources and guaranteed performance." },
      { name: "Data Synchronization", desc: "Real-time or scheduled data sync between on-premise and cloud Tally instances for hybrid deployment models." },
      { name: "Automated Backup & Recovery", desc: "Daily automated backups with point-in-time recovery, off-site replication, and disaster recovery testing." },
      { name: "Security & Compliance", desc: "End-to-end encryption, firewall management, access logging, and compliance with data protection regulations." },
      { name: "Cross-Platform Access", desc: "Access TallyPrime from Windows, Mac, Linux, tablets, and even mobile browsers via secure remote desktop." }
    ],
    faqs: [
      { q: "Is my data safe on the cloud?", a: "Absolutely. We use 256-bit AES encryption at rest and in transit, dedicated instances (not shared), automated backups with 3x redundancy, and strict access controls." },
      { q: "Can I access Tally from a Mac or mobile?", a: "Yes — Tally on Cloud works via remote desktop, accessible from any device with an internet connection including Mac, iPad, and Android tablets." },
      { q: "What happens if the internet goes down?", a: "Cloud access requires internet. However, we can configure a hybrid setup where critical operations can run on a local backup instance, syncing when connectivity resumes." },
      { q: "How is pricing structured?", a: "Cloud plans are billed monthly or annually per user. Pricing depends on user count, storage needs, and backup requirements. Contact us for a custom quote." }
    ]
  },
  {
    title: "Tally Mobile Solutions",
    slug: "tally-mobile",
    category: "mobile",
    tagline: "Mobile apps for field sales, approvals & real-time dashboards",
    desc: "Custom mobile applications with real-time Tally data sync for field sales automation, inventory checking, director dashboards, and on-the-go approvals.",
    icon: Smartphone,
    iconColor: "text-brand-red",
    iconBg: "bg-brand-red/5",
    image: mobileImg,
    heroImage: mobileV2Img,
    subServiceImage: mobileImg,
    scene: "mobile-charts",
    badge: "Mobile & Web Apps",
    emoji: "📱",
    details: [
      "Sales Force Automation (SFA)",
      "Business Dashboard App",
      "Sales Order Booking App",
      "Customer Profiling App",
      "Transaction Approval App",
      "Real-time Tally Sync"
    ],
    keyFeatures: [
      "Sales Force Automation (SFA)",
      "Offline + Online Tally Sync",
      "Live Stock & Outstanding Reports",
      "B2B Order Management Portal",
      "Director MIS Dashboard App",
      "Beat Routing & GPS Tracking"
    ],
    highlights: [
      { stat: "10K+", label: "Daily Active Users" },
      { stat: "5", label: "App Modules" },
      { stat: "Offline", label: "Works Without Internet" }
    ],
    process: [
      { step: 1, title: "Field Assessment", desc: "Shadow your field sales team to understand their daily workflow, pain points, and data requirements." },
      { step: 2, title: "App Configuration", desc: "Configure the mobile app modules — SFA, order booking, dashboards, approvals — to match your business logic." },
      { step: 3, title: "Tally Integration", desc: "Setup real-time bidirectional sync between the mobile app and TallyPrime for orders, stock, and financials." },
      { step: 4, title: "Rollout & Training", desc: "Deploy to your field team's devices, conduct hands-on training, and monitor adoption for the first 30 days." }
    ],
    subServices: [
      { name: "Business Dashboard App", desc: "Director-level MIS dashboard with real-time P&L, cash flow, receivables, and sales trends — accessible from your phone." },
      { name: "Customer Profiling App", desc: "Complete customer 360 — purchase history, outstanding balance, credit limit, and visit history at your fingertips." },
      { name: "Transaction Approval App", desc: "Multi-level approval workflows for high-value transactions, credit notes, and discounts — approve from anywhere." },
      { name: "Sales Order Booking App", desc: "Field sales reps can create orders with real-time stock checking, pricing rules, and customer-specific discounts." },
      { name: "Business Audit App", desc: "Mobile audit tool for stock verification, branch audits, and compliance checklists with photo evidence." },
      { name: "Beat Routing & GPS Tracking", desc: "Optimized daily beat plans for field reps with GPS tracking, check-in/check-out, and visit reporting." }
    ],
    faqs: [
      { q: "Do the apps work offline?", a: "Yes — all our mobile apps work offline with local data storage. Data syncs automatically with TallyPrime when internet connectivity is restored." },
      { q: "Which platforms are supported?", a: "Our apps run on both Android and iOS. We also offer web-based dashboards accessible from any browser for directors and managers." },
      { q: "Can the apps be customized to our workflow?", a: "Absolutely. Every module is configurable — we can add custom fields, approval rules, pricing logic, and reports specific to your business." },
      { q: "How does real-time sync with Tally work?", a: "Our middleware syncs data between the mobile app and TallyPrime using secure APIs. Stock levels, orders, and financial data stay current across both systems." }
    ]
  }
];

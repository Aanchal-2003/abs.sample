export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/\s*[\/—]\s*/g, '-')
    .replace(/[()\.&,+]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

export const subServiceDetails = {
  "tally-solutions": {
    "tallyprime": {
      features: [
        "Intuitive modern UI with SmartFind navigation",
        "Connected banking, e-payments & digital signatures built-in",
        "GST, TDS, Payroll & statutory compliance out of the box",
        "Single-user to enterprise multi-user licensing options",
        "Seamless data migration from Tally ERP 9",
        "Customizable invoices, vouchers & ledger reports"
      ],
      image: "/images/rebrand/core_prime_drawing.png",
      highlights: [
        { stat: "10M+", label: "Global Users" },
        { stat: "100%", label: "GST Compliant" },
        { stat: "2x", label: "Faster than ERP 9" }
      ]
    },
    "tally-virtual-user-tvu": {
      features: [
        "Remote access to TallyPrime over the internet or VPN",
        "Multiple concurrent users on a single Tally instance",
        "No additional hardware or software installation required",
        "Works from any Windows device, anywhere in the world",
        "Centralized data with distributed team access",
        "Flexible pay-per-user licensing model"
      ],
      image: "/images/rebrand/core_virtual_drawing.png",
      highlights: [
        { stat: "∞", label: "Remote Users" },
        { stat: "0", label: "Extra Hardware" },
        { stat: "99.9%", label: "Uptime" }
      ]
    },
    "tally-erp-9-support": {
      features: [
        "Data repair and rewriting for corrupted Tally ERP 9 files",
        "Guided step-by-step upgrade path to TallyPrime",
        "Compatibility support for legacy report formats",
        "Statutory data backup before migration",
        "Bug fixes and patch support for ERP 9",
        "Historical data validation and reconciliation"
      ],
      image: "/images/rebrand/core_erp_support_drawing.png"
    },
    "tallyprime-server": {
      features: [
        "Concurrent multi-user access across multiple sites",
        "High-performance server-grade deployment",
        "Centralized data management with automatic sync",
        "Scales to 100+ concurrent users without performance loss",
        "Built-in conflict resolution and data integrity checks",
        "Enterprise-grade security and user access controls"
      ],
      image: "/images/rebrand/core_server_drawing.png",
      highlights: [
        { stat: "100+", label: "Concurrent Users" },
        { stat: "Zero", label: "Conflicts" },
        { stat: "24/7", label: "Availability" }
      ]
    },
    "tallyprime-auditors-edition": {
      features: [
        "Read-only access — zero risk of accidental data changes",
        "Full report and ledger viewing capabilities",
        "Access multiple client companies simultaneously",
        "Designed specifically for CA firms and external auditors",
        "Secure data extraction for audit and filing purposes",
        "All statutory reports accessible in view-only mode"
      ],
      image: "/images/rebrand/core_auditors_drawing.png"
    },
    "tally-software-services-tss": {
      features: [
        "Annual product updates and statutory compliance patches",
        "GST, TDS, and regulation updates delivered automatically",
        "Connected banking and e-payment services access",
        "e-Invoice and e-Way Bill generation enabled",
        "Priority Tally helpdesk and support access",
        "License renewal management and tracking"
      ],
      image: "/images/rebrand/core_tss_drawing.png",
      highlights: [
        { stat: "12+", label: "Updates/Year" },
        { stat: "100%", label: "Compliance" },
        { stat: "Priority", label: "Support Access" }
      ]
    }
  },

  "tally-integration": {
    "tally-api-integration": {
      features: [
        "RESTful API connectors for reading and writing Tally data",
        "Supports both real-time and batch sync modes",
        "Comprehensive error handling and automatic retry logic",
        "Supports TallyPrime XML and ODBC interfaces",
        "Custom data mapping and transformation pipelines",
        "API monitoring dashboard with uptime and failure alerts"
      ],
      image: "/images/rebrand/integration_api_drawing.png",
      highlights: [
        { stat: "50ms", label: "Avg. Latency" },
        { stat: "99.9%", label: "Sync Uptime" },
        { stat: "200+", label: "APIs Built" }
      ]
    },
    "quickbook-tally-integration": {
      features: [
        "Automated two-way sync between QuickBooks and Tally",
        "Chart of accounts and ledger field mapping",
        "Invoice, payment, and expense synchronization",
        "Customer and vendor master data sync",
        "Supports QuickBooks Online and Desktop editions",
        "Conflict detection and resolution dashboard"
      ],
      image: "/images/rebrand/integration_quickbooks_drawing.png"
    },
    "excel-to-tally-import": {
      features: [
        "Bulk import Excel/CSV data into Tally vouchers and masters",
        "Supports sales, purchase, journal, and stock entry types",
        "Template-based mapping for your existing spreadsheet format",
        "Pre-import validation and error reporting",
        "Ledger, item, and group master bulk import support",
        "Scheduled auto-import for recurring data feeds"
      ],
      image: "/images/rebrand/integration_excel_drawing.png",
      highlights: [
        { stat: "10K+", label: "Rows/Min" },
        { stat: "100%", label: "Accuracy" },
        { stat: "5min", label: "Avg. Import Time" }
      ]
    },
    "ecommerce-integration": {
      features: [
        "Sync orders, inventory, and customers with TallyPrime",
        "Supports Shopify, WooCommerce, OpenCart & custom stores",
        "Real-time stock level updates from Tally to storefront",
        "Automatic invoice and payment entry in Tally",
        "Multi-warehouse and GST-compliant order processing",
        "Return and refund sync with credit note auto-creation"
      ],
      image: "/images/rebrand/integration_ecommerce_drawing.png"
    },
    "integration-with-magento": {
      features: [
        "Deep Magento 2 bi-directional integration with TallyPrime",
        "Real-time order, customer, and product catalog sync",
        "Inventory levels and pricing pushed from Tally to Magento",
        "Automated invoice creation with GST compliance",
        "Multi-store and multi-currency support",
        "Custom product attribute and field mapping"
      ],
      image: "/images/rebrand/integration_magento_drawing.png"
    },
    "php-java-aspnet-integration": {
      features: [
        "Custom middleware development in your technology stack",
        "Bridges your application with Tally's XML/ODBC interface",
        "Supports PHP, Java, ASP.NET, and Node.js backends",
        "RESTful and SOAP API development as required",
        "Secure authentication and data encryption in transit",
        "Full source code ownership with technical documentation"
      ],
      image: "/images/rebrand/integration_developer_drawing.png"
    },
    "payment-gateway-connectivity": {
      features: [
        "Integrate Razorpay, PayTM, HDFC, and bank payment APIs",
        "Automatic receipt and payment entry in TallyPrime",
        "Real-time payment status sync and bank reconciliation",
        "Supports UPI, NEFT, RTGS, and card payment modes",
        "GST-compliant payment entries with TDS deduction",
        "Failed transaction alerts and automatic retry management"
      ],
      image: "/images/rebrand/integration_payment_drawing.png"
    },
    "crm-integration": {
      features: [
        "Sync customer data between your CRM and TallyPrime",
        "Invoice, outstanding, and payment visibility in CRM",
        "Supports Salesforce, HubSpot, Zoho CRM & others",
        "Lead-to-invoice workflow automation",
        "Credit limit and overdue alerts in CRM dashboards",
        "Bi-directional contact and company master sync"
      ],
      image: "/images/rebrand/integration_crm_drawing.png"
    }
  },

  "tdl-development": {
    "custom-reports-invoices": {
      features: [
        "Tailored report formats for management, audit & compliance",
        "Custom GST invoice designs with your logo and branding",
        "Delivery challans, purchase orders, debit/credit notes",
        "Multi-column, multi-currency report layouts",
        "Drill-down reports linked to source vouchers",
        "Auto-scheduled report generation and email dispatch"
      ],
      image: "/images/rebrand/integration_api_drawing.png"
    },
    "barcode-label-printing": {
      features: [
        "Generate 1D, 2D, and QR barcodes directly from TallyPrime",
        "Print product labels with price, batch, and item details",
        "Shipping and carton label printing with courier integration",
        "Compatible with Zebra, TSC, and standard label printers",
        "Scan barcodes at POS, inward, and inventory checkpoints",
        "Batch-wise and serial-wise label generation support"
      ],
      image: "/images/rebrand/integration_api_drawing.png",
      highlights: [
        { stat: "10K+", label: "Labels/Hour" },
        { stat: "1D/2D/QR", label: "Barcode Types" },
        { stat: "Any Printer", label: "Compatible" }
      ]
    },
    "supply-chain-visibility": {
      features: [
        "Real-time stock movement tracking from PO to delivery",
        "Purchase order status and vendor performance dashboards",
        "GRN to invoice matching with discrepancy alerts",
        "Multi-godown stock transfer tracking and reporting",
        "Supplier lead time analytics and reorder triggers",
        "Complete supply chain audit trail within TallyPrime"
      ],
      image: "/images/rebrand/integration_api_drawing.png"
    },
    "item-name-creator": {
      features: [
        "Structured item naming based on category, brand, size, variant",
        "Auto-generate item codes and names from defined templates",
        "Eliminate duplicate and inconsistent stock names",
        "Attribute-based item classification and quick filtering",
        "Bulk rename and standardize existing item masters",
        "Customizable naming rules per product category"
      ],
      image: "/images/rebrand/core_prime_drawing.png"
    },
    "serial-number-management": {
      features: [
        "Track individual units by serial number end-to-end",
        "Serial entry at purchase receipt, transfer, and sale",
        "Full audit trail — who moved or sold which unit, when",
        "Warranty tracking and expiry date management",
        "Scan-to-verify serial numbers at dispatch gate",
        "Defective and returned unit tracking by serial number"
      ],
      image: "/images/rebrand/core_server_drawing.png"
    },
    "rack-bin-stock-management": {
      features: [
        "Map your warehouse into racks, shelves, and bins",
        "Assign stock locations during inward and outward operations",
        "Location-wise stock balance reports at any time",
        "Picking list generation with bin location guidance",
        "Inter-location transfer tracking within TallyPrime",
        "FIFO and LIFO picking rules configurable per location"
      ],
      image: "/images/rebrand/core_server_drawing.png"
    },
    "kit-items-bom": {
      features: [
        "Define product bundles (kits) with component mapping",
        "Bill of Materials (BOM) for manufacturing operations",
        "Auto-consume components on production voucher entry",
        "Multi-level BOM support for complex assembly processes",
        "Kit pricing with component cost roll-up calculation",
        "Stock availability check before kit assembly begins"
      ],
      image: "/images/rebrand/core_prime_drawing.png"
    },
    "quality-control-qc": {
      features: [
        "Inbound quality inspection workflows at GRN stage",
        "Outbound QC checks before goods are dispatched",
        "Pass/fail tracking with rejection reason classification",
        "Quarantine stock management for failed inspection batches",
        "QC parameter definition per item or item category",
        "Inspection reports with photo and document attachment"
      ],
      image: "/images/rebrand/core_auditors_drawing.png"
    },
    "sales-activity-management-sam": {
      features: [
        "Log field sales activities directly in TallyPrime",
        "Set and track individual and team sales targets",
        "Customer visit scheduling and outcome recording",
        "Performance analytics — achievement vs. target",
        "Territory-wise and rep-wise sales comparison reports",
        "Integration with mobile SFA for field team sync"
      ],
      image: "/images/rebrand/core_prime_drawing.png"
    },
    "currency-forward-booking": {
      features: [
        "Manage forex forward contracts within TallyPrime",
        "Track contract maturity dates and settlement schedules",
        "Auto-calculate mark-to-market exchange differences",
        "Multi-currency position and exposure reporting",
        "Hedge ratio and coverage analytics dashboard",
        "Integration with bank forex booking statements"
      ],
      image: "/images/rebrand/integration_api_drawing.png"
    },
    "smart-backup": {
      features: [
        "Automated scheduled backups — hourly, daily, or weekly",
        "Compressed and versioned backup file storage",
        "Cloud upload to Google Drive, Dropbox, or AWS S3",
        "Backup integrity verification after every scheduled run",
        "One-click restore from any saved backup point",
        "Email and SMS alerts for backup success or failure"
      ],
      image: "/images/rebrand/tally_cloud_drawing.png",
      highlights: [
        { stat: "3x", label: "Redundant Copies" },
        { stat: "Auto", label: "Scheduled" },
        { stat: "1-Click", label: "Restore" }
      ]
    },
    "digitally-signed-invoice-dsc": {
      features: [
        "Apply DSC digital signatures to invoices and vouchers",
        "PDF generation with embedded digital certificate",
        "Legal compliance for paperless invoice operations",
        "Supports Class 2 and Class 3 DSC tokens",
        "Bulk signing capability for multiple invoices at once",
        "Signature verification and tamper-proof audit log"
      ],
      image: "/images/rebrand/core_tss_drawing.png"
    },
    "multi-file-attachment": {
      features: [
        "Attach PDFs, images, and documents to any Tally voucher",
        "Link supporting documents to ledger master records",
        "Centralized document repository within TallyPrime",
        "One-click view and download of all attached files",
        "Categorize attachments by document type and date",
        "Eliminate physical filing — go fully paperless"
      ],
      image: "/images/rebrand/core_tss_drawing.png"
    },
    "sms-module": {
      features: [
        "Auto-send SMS on invoice generation to customers",
        "Payment reminder SMS for overdue outstanding amounts",
        "Delivery confirmation alerts for dispatched orders",
        "Low stock alerts to purchase managers via SMS",
        "Customizable SMS templates per transaction type",
        "Works with any SMS gateway (Textlocal, MSG91, etc.)"
      ],
      image: "/images/rebrand/integration_api_drawing.png",
      highlights: [
        { stat: "Auto", label: "Triggered" },
        { stat: "Any", label: "SMS Gateway" },
        { stat: "<1s", label: "Delivery" }
      ]
    },
    "gst-reminder": {
      features: [
        "Automated reminders for GSTR-1, GSTR-3B, and other deadlines",
        "Party-wise GST compliance status dashboard",
        "Alert escalation — 7 days, 3 days, and day-of reminders",
        "Email and SMS notification delivery",
        "Tracks filed, pending, and overdue return statuses",
        "Multi-GSTIN support for group companies"
      ],
      image: "/images/rebrand/core_prime_drawing.png"
    },
    "one-click-outstanding": {
      features: [
        "Instant outstanding balance across all parties at one click",
        "Aging analysis in 0-30, 31-60, 61-90, 90+ day buckets",
        "Filter by customer, vendor, date range, and amount",
        "Displays last payment date and party contact details",
        "Export to Excel for collection team follow-up",
        "Drill-down to individual invoice level from summary view"
      ],
      image: "/images/rebrand/integration_api_drawing.png"
    },
    "multiple-branch-management": {
      features: [
        "Centralized accounting across unlimited branches",
        "Inter-branch stock and fund transfer tracking",
        "Branch-wise P&L, balance sheet, and sales reports",
        "Consolidated group-level financial statements",
        "Branch-level user access control and restrictions",
        "Real-time sync across all branch Tally instances"
      ],
      image: "/images/rebrand/core_server_drawing.png",
      highlights: [
        { stat: "Unlimited", label: "Branches" },
        { stat: "Real-time", label: "Sync" },
        { stat: "1 View", label: "Consolidated" }
      ]
    },
    "sheet-magic-excel-report-writer": {
      features: [
        "Export any Tally report to professionally formatted Excel",
        "Charts, pivot tables, and conditional formatting auto-applied",
        "Preserve Tally data hierarchy in Excel sheet structure",
        "Schedule and auto-email reports to management team",
        "Custom Excel templates mapped to Tally data fields",
        "Fully automated — no manual copy-paste required"
      ],
      image: "/images/rebrand/integration_excel_drawing.png"
    },
    "audit-trail-with-voucher-history": {
      features: [
        "Complete edit history for every voucher in TallyPrime",
        "Records who changed what field, when, and from what value",
        "Before/after comparison view for any modification",
        "Deletion and creation audit with full user attribution",
        "Tamper-proof log that users cannot edit or delete",
        "Filter audit trail by user, date range, or voucher type"
      ],
      image: "/images/rebrand/integration_developer_drawing.png"
    },
    "advance-transaction-level-security": {
      features: [
        "Restrict users by voucher type, amount threshold, and date",
        "Field-level permissions — hide or lock specific data fields",
        "Department and role-based access control profiles",
        "Prevent backdating and post-dated entries beyond set limits",
        "Alerts on unauthorized access attempts",
        "Compatible with multi-user and multi-branch environments"
      ],
      image: "/images/rebrand/core_tss_drawing.png"
    },
    "material-requirement-planning": {
      features: [
        "Auto-generate purchase orders from BOM and stock levels",
        "Factor in supplier lead times, MOQ, and safety stock",
        "Sales forecast-driven demand planning integration",
        "Vendor-wise material requirement allocation",
        "MRP run reports with shortage and surplus analysis",
        "Integration with production schedules and dispatch"
      ],
      image: "/images/rebrand/core_prime_drawing.png"
    },
    "auto-manual-voucher-numbering": {
      features: [
        "Flexible voucher numbering with custom prefix and suffix",
        "Series-wise numbering for different company divisions",
        "Financial year-based automatic number reset",
        "Manual numbering override with full audit trail",
        "Multi-series support for sales, purchase, and journals",
        "Gap detection and duplicate number prevention"
      ],
      image: "/images/rebrand/integration_excel_drawing.png"
    },
    "transaction-authorisation": {
      features: [
        "Multi-level maker-checker approval workflows",
        "Define approval rules by amount, type, and department",
        "Email and SMS notifications sent to approvers",
        "Approve or reject transactions from any device",
        "Pending approval queue with SLA tracking",
        "Complete audit trail of all approval decisions"
      ],
      image: "/images/rebrand/integration_api_drawing.png",
      highlights: [
        { stat: "Multi", label: "Level Approval" },
        { stat: "Any Device", label: "Accessible" },
        { stat: "100%", label: "Audit Trail" }
      ]
    }
  },

  "annual-maintenance": {
    "support-onsite-remote": {
      features: [
        "Dedicated support engineers via remote desktop session",
        "Scheduled onsite visits for hands-on troubleshooting",
        "Priority response SLA for all critical issues",
        "Screen sharing and live problem resolution",
        "Covers hardware, software, and network Tally issues",
        "Onsite coverage across Assam and Northeast India"
      ],
      image: "/images/rebrand/tally_maintenance_drawing.png",
      highlights: [
        { stat: "<2hr", label: "Response Time" },
        { stat: "Mon-Sat", label: "Support Hours" },
        { stat: "NE India", label: "Onsite Coverage" }
      ]
    },
    "amc-annual-support-cover": {
      features: [
        "All-inclusive annual contract — one fee, zero surprises",
        "Unlimited remote support tickets throughout the year",
        "Software updates, bug fixes, and compliance patches covered",
        "Scheduled onsite visits included in the plan",
        "Data repair and recovery support when needed",
        "TSS renewal management handled by our team"
      ],
      image: "/images/rebrand/tally_maintenance_drawing.png",
      highlights: [
        { stat: "98%", label: "Client Retention" },
        { stat: "150+", label: "Active AMC Clients" },
        { stat: "∞", label: "Support Tickets" }
      ]
    },
    "data-synchronization": {
      features: [
        "Multi-location data sync setup and configuration",
        "Real-time or scheduled batch sync between branches",
        "Conflict detection and automated resolution",
        "Sync health monitoring with failure alerts",
        "Supports both LAN and internet-based sync modes",
        "Data integrity validation after every sync cycle"
      ],
      image: "/images/rebrand/core_server_drawing.png"
    },
    "training-programs": {
      features: [
        "Structured onboarding training for new Tally users",
        "Advanced features training — GST, payroll, inventory",
        "Admin-level training for Tally configuration and management",
        "CA and auditor-specific training sessions",
        "Hands-on training at your office or via remote session",
        "Post-training reference materials and cheat sheets provided"
      ],
      image: "/images/rebrand/core_prime_drawing.png"
    },
    "invoice-customization-support": {
      features: [
        "Ongoing invoice format updates covered under AMC",
        "New compliance formats (e-Invoice, e-Way Bill) added",
        "Brand and logo updates on all invoice templates",
        "Additional columns, terms, and signature fields on request",
        "Multi-language invoice format support available",
        "Format changes tested and deployed within 24 hours"
      ],
      image: "/images/rebrand/integration_excel_drawing.png"
    },
    "antra-cx-support": {
      features: [
        "Setup and configuration of Tally's Antra CX platform",
        "Connected services activation and integration",
        "User onboarding and access management for Antra CX",
        "Troubleshooting Antra CX connectivity and sync issues",
        "Integration with connected banking features",
        "Ongoing support and updates for the Antra CX module"
      ],
      image: "/images/rebrand/core_tss_drawing.png"
    }
  },

  "cloud-services": {
    "tally-on-cloud": {
      features: [
        "Fully managed TallyPrime on dedicated cloud servers",
        "Access from any device — Windows, Mac, tablet, or mobile",
        "99.9% uptime SLA with redundant infrastructure",
        "256-bit AES encryption for data in transit and at rest",
        "Enterprise-grade firewalls and DDoS protection",
        "Dedicated resources — no shared hosting risks"
      ],
      image: "/images/rebrand/tally_cloud_drawing.png",
      highlights: [
        { stat: "99.9%", label: "Uptime SLA" },
        { stat: "256-bit", label: "Encryption" },
        { stat: "Any Device", label: "Access" }
      ]
    },
    "data-synchronization": {
      features: [
        "Sync on-premise Tally with cloud instance in real-time",
        "Scheduled batch sync for hybrid deployment models",
        "Conflict-free merge using Tally's sync protocols",
        "Sync status dashboard with failure notifications",
        "Multi-branch to cloud consolidation support",
        "Zero-data-loss guarantee with transaction-level sync"
      ],
      image: "/images/rebrand/core_server_drawing.png"
    },
    "automated-backup-recovery": {
      features: [
        "Daily automated backups with point-in-time recovery",
        "Off-site replication to geographically separate data centers",
        "3x redundant backup copies across storage zones",
        "Disaster recovery testing with RTO/RPO documentation",
        "One-click restore from any saved backup snapshot",
        "Backup integrity verification with alert on failure"
      ],
      image: "/images/rebrand/tally_cloud_drawing.png",
      highlights: [
        { stat: "3x", label: "Redundant Backup" },
        { stat: "Daily", label: "Frequency" },
        { stat: "<1hr", label: "Recovery Time" }
      ]
    },
    "security-compliance": {
      features: [
        "End-to-end 256-bit AES data encryption",
        "Firewall management and intrusion detection systems",
        "Access logging with geo-restriction capabilities",
        "Two-factor authentication for cloud Tally access",
        "Compliance with IT Act and data protection regulations",
        "Regular vulnerability assessment and penetration testing"
      ],
      image: "/images/rebrand/core_server_drawing.png"
    },
    "cross-platform-access": {
      features: [
        "Access TallyPrime from Windows, Mac, Linux, and tablets",
        "Browser-based remote desktop — no software installation",
        "Mobile-friendly interface for on-the-go Tally access",
        "Secure VPN tunnels for private network connectivity",
        "Multi-monitor support for power users",
        "Session management with automatic timeout controls"
      ],
      image: "/images/rebrand/core_virtual_drawing.png"
    }
  },

  "tally-mobile": {
    "business-dashboard-app": {
      features: [
        "Real-time P&L, cash flow, and balance sheet on your phone",
        "Receivables and payables aging analysis at a glance",
        "Sales and purchase trend charts with drill-down",
        "Branch-wise performance comparison dashboards",
        "KPI widgets fully configurable per director preference",
        "Offline mode with last-synced data when disconnected"
      ],
      image: "/images/rebrand/core_prime_drawing.png",
      highlights: [
        { stat: "Real-time", label: "Tally Sync" },
        { stat: "Offline", label: "Mode Available" },
        { stat: "iOS + Android", label: "Platforms" }
      ]
    },
    "customer-profiling-app": {
      features: [
        "360° customer view — purchase history, outstanding, credit limit",
        "Visit history and last contact date tracking",
        "Customer-specific pricing and discount visibility",
        "Outstanding alerts and overdue balance indicators",
        "New customer registration with photo and GPS location",
        "Sync customer notes and feedback back to TallyPrime"
      ],
      image: "/images/rebrand/core_virtual_drawing.png"
    },
    "transaction-approval-app": {
      features: [
        "Approve high-value transactions from your smartphone",
        "Multi-level approval chain for sales, credit notes, discounts",
        "Push notifications for every pending approval",
        "View full transaction details before approving or rejecting",
        "Reject with reason — auto-notifies the originator",
        "Approval audit log with timestamps and device info"
      ],
      image: "/images/rebrand/core_prime_drawing.png",
      highlights: [
        { stat: "Multi", label: "Level Approval" },
        { stat: "Push", label: "Notifications" },
        { stat: "<1min", label: "Approval Time" }
      ]
    },
    "sales-order-booking-app": {
      features: [
        "Create sales orders with real-time stock availability check",
        "Customer-specific pricing, discounts, and credit limit enforcement",
        "Offline order booking — auto-syncs when internet is restored",
        "Product catalog with images and specifications",
        "Order history and delivery status tracking per customer",
        "Auto-sync approved orders to TallyPrime as sales vouchers"
      ],
      image: "/images/rebrand/core_prime_drawing.png",
      highlights: [
        { stat: "Offline", label: "Order Booking" },
        { stat: "Real-time", label: "Stock Check" },
        { stat: "Auto", label: "Tally Sync" }
      ]
    },
    "business-audit-app": {
      features: [
        "Mobile stock verification at warehouse or retail locations",
        "Branch audit checklists with photo evidence capture",
        "Compliance audit trail with digital sign-off",
        "Discrepancy reporting with root cause tagging",
        "GPS-tagged audit entries for location verification",
        "Audit reports auto-generated and emailed to management"
      ],
      image: "/images/rebrand/core_auditors_drawing.png"
    },
    "beat-routing-gps-tracking": {
      features: [
        "Optimized daily beat plans for field sales representatives",
        "GPS live tracking of field team location throughout the day",
        "Check-in/check-out at customer locations with timestamp",
        "Visit outcome recording — order, collection, or demo",
        "Route deviation alerts sent to managers in real-time",
        "Daily beat summary reports with distance and visit count"
      ],
      image: "/images/rebrand/core_prime_drawing.png",
      highlights: [
        { stat: "GPS", label: "Live Tracking" },
        { stat: "Optimized", label: "Beat Routes" },
        { stat: "Auto", label: "Visit Reports" }
      ]
    }
  }
};

import implementationImg from "../assets/illustrations/implementation.png";
import integrationImg from "../assets/illustrations/integration.png";
import customizationImg from "../assets/illustrations/customization.png";
import cloudImg from "../assets/illustrations/cloud.png";

export const serviceSections = {
    "tally-solutions": [
        {
            section: "Tally Integration",
            icon: "🔌",
            image: implementationImg,
            items: [
                "Tally API Integration",
                "Quickbook Tally Integration",
                "Excel to Tally Import Utility",
                "eCommerce Integration",
                "Integration with Magento",
                "Payment Gateway Integration",
                "CRM Integration with Tally"
            ]
        },
        {
            section: "Tally Customization (TDL)",
            icon: "⚙️",
            image: customizationImg,
            items: [
                "Invoice Customization",
                "Voucher Formats Customizations",
                "Custom Ledger Reports",
                "User-specific Dashboard Setup",
                "Automation Scripts for Repetitive Tasks"
            ]
        },
        {
            section: "Tally Add-Ons / Modules",
            icon: "📦",
            image: customizationImg,
            items: [
                "Smart Backup++",
                "Digitally Signed Invoice (DSC)",
                "Multi File Attachment",
                "GST Auto Reminder",
                "Multiple Branch Management",
                "Audit Trail with Voucher History",
                "Advance Transaction Level Security",
                "Bank Reconciliation Automation"
            ]
        }
    ],

    "tally-integration": [
        {
            section: "Bi-Directional Syncing",
            icon: "🖥️",
            image: integrationImg,
            items: [
                "End-to-End Tally API Sync",
                "Real-Time Data Extraction",
                "Custom Webhooks Development",
                "Workflow Automation connected to Tally"
            ]
        },
        {
            section: "Data Migration",
            icon: "📊",
            image: integrationImg,
            items: [
                "Legacy ERP to Tally Migration",
                "Master Data Cleansing",
                "Custom Data Field Mapping",
                "Error Handling & Reporting"
            ]
        }
    ],

    "tdl-development": [
        {
            section: "Strategic TDL Scripts",
            icon: "⚙️",
            image: customizationImg,
            items: [
                "Custom Report Filter Generation",
                "Transport & E-Way Bill Modules",
                "Automated Discount Workflows",
                "Advanced Business Logic Implementation",
                "User-level Godown Security Filters"
            ]
        }
    ],

    "annual-maintenance": [
        {
            section: "Tally Support Services",
            icon: "🛠️",
            image: implementationImg,
            items: [
                "TSS (Tally Software Services) Renewal",
                "Data Corruption Repair & Splitting",
                "Performance Optimization",
                "24/7 Remote Desktop Support",
                "Tally Updates & Upgrades",
                "Multi-user Access Audits"
            ]
        }
    ],

    "cloud-services": [
        {
            section: "Tally on Cloud",
            icon: "☁️",
            image: cloudImg,
            items: [
                "Tally Virtual User (TVU) Setup",
                "AWS/Azure Private Cloud Hosting",
                "Automated Remote Data Backup",
                "Mac & Windows Cross-platform Access",
                "Tally Server 9 Deployments"
            ]
        }
    ],

    "tally-mobile": [
        {
            section: "Mobile Field Sales (SFA)",
            icon: "📱",
            image: customizationImg,
            items: [
                "Sales Order to Tally Sync Offline/Online",
                "Live Receipt Collection & Entry",
                "Stock Availability Checking from App",
                "Outstanding Tracking on Mobile",
                "Beat Routing & GPS Tracking"
            ]
        },
        {
            section: "Reports on the Go",
            icon: "📈",
            image: customizationImg,
            items: [
                "Business Dashboard for Directors",
                "Item/Ledger View via Web Browser",
                "Instant MIS Reports on Mobile"
            ]
        }
    ]
};
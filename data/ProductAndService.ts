import WordPress from "@/data/DataImage/WordPress.png";
import Domain from "@/data/DataImage/Domain.png";
import WebsiteBackup from "@/data/DataImage/WebsiteBackup.png";
import SEO from "@/data/DataImage/SEO.png";
import PerformanceHosting from "@/data/DataImage/PerformanceHosting.png";
import ECommerce from "@/data/DataImage/E-Commerce.png";
import Analytics from "@/data/DataImage/Analytics.png";
import BusinessLogo from "@/data/DataImage/BusinessLogo.png";
import PremiumSupport from "@/data/DataImage/PremiumSupport.png";
import Email from "@/data/DataImage/Email.png";

export interface ProductOption {
  id: string;
  name: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl?: string | number;
  description: string;
  category: string;
  options?: ProductOption[];
}

export const ProductsAndServices: Product[] = [
  {
    id: "1",
    name: "Website Builder",
    price: "$995.00",
    imageUrl: WordPress,
    description:
      "Build a standout online presence with our intuitive WordPress Website Builder. Enhance your brand with a unique Custom Theme and eye-catching Custom Graphics, while 12 Months of Support ensures ongoing peace of mind. Want to perfect your skills? Add an Extra Month of 1:1 Training for hands-on guidance and success.",
    category: "Website",
    options: [
      { id: "opt1", name: "Custom Theme", price: "$500.00" },
      { id: "opt2", name: "Custom Graphics", price: "$150.00" },
      { id: "opt3", name: "12 Months Support", price: "$1000.00" },
      { id: "opt4", name: "Extra Month 1:1 Training", price: "$500.00" },
    ],
  },
  {
    id: "2",
    name: "Domain",
    price: "$19.95",
    imageUrl: Domain,
    description:
      "Give your business a digital address that’s impossible to forget. Grab a unique domain and stand out from day one. For total security, add a Premium SSL or keep threats at bay with our Enterprise Anti-Spam. Want to go big? Upgrade to Virtual Private Server or Enterprise SSD RAID 5 for unbeatable performance and reliability.",
    category: "Hosting",
    options: [
      { id: "opt1", name: "Premium SSL", price: "$25.00" },
      { id: "opt2", name: "Enterprise Anti-Spam", price: "$29.00" },
      { id: "opt3", name: "WordPress Care Plan", price: "$59.00" },
      { id: "opt4", name: "Virtual Private Server", price: "$99.00" },
      { id: "opt5", name: "Enterprise SSD RAID 5", price: "$999.00" },
    ],
  },
  {
    id: "3",
    name: "Email",
    price: "$99.00",
    imageUrl: Email,
    description:
      "Elevate your brand with professional business email that exudes trust and credibility. Whether you’re a Small Business starting out or ready to harness the power of Microsoft 365, our flexible add-ons adapt to your growth. Seamlessly integrate Microsoft Exchange to stay organized and connected across all devices.",
    category: "Email",
    options: [
      { id: "opt1", name: "Small Business", price: "$10.00" },
      { id: "opt2", name: "Microsoft 365", price: "$29.00" },
      { id: "opt3", name: "Microsoft Exchange", price: "$29.00" },
    ],
  },
  {
    id: "4",
    name: "Website Backup Plan",
    price: "$65.00",
    imageUrl: WebsiteBackup,
    description:
      "Protect your online investment with daily backups and quick 1-click restores. Worried about past versions? Secure 30-Day History for added peace of mind. Need up-to-the-minute protection? Real-Time Sync ensures your site content stays safe and current around the clock.",
    category: "Security",
    options: [
      { id: "opt1", name: "30-Day History", price: "$10.00" },
      { id: "opt2", name: "Real-Time Sync", price: "$15.00" },
    ],
  },
  {
    id: "5",
    name: "SEO Optimization Package",
    price: "$475.00",
    imageUrl: SEO,
    description:
      "Turn your website into a visibility powerhouse. Our SEO Optimization Package boosts your search rankings with proven keyword strategies. Elevate results even further by adding Advanced Keyword Research or a Technical SEO Audit to spot hidden opportunities and outrank competitors.",
    category: "Marketing",
    options: [
      { id: "opt1", name: "Advanced Keyword Research", price: "$125.00" },
      { id: "opt2", name: "Technical SEO Audit", price: "$135.00" },
    ],
  },
  {
    id: "6",
    name: "E-Commerce Integration",
    price: "$140.00",
    imageUrl: ECommerce,
    description:
      "Transform your website into a dynamic online store with seamless payment processing. Recover lost sales by adding Abandoned Cart Recovery, or expand globally with Shipping API Integration. Ready for faster checkouts? Include Stripe API Integration to keep customers coming back for more.",
    category: "E-Commerce",
    options: [
      { id: "opt1", name: "Abandoned Cart Recovery", price: "$25.00" },
      { id: "opt2", name: "Shipping API Integration", price: "$30.00" },
      { id: "opt3", name: "Strip API Integration", price: "$30.00" },
    ],
  },
  {
    id: "7",
    name: "Performance Hosting",
    price: "$120.00",
    imageUrl: PerformanceHosting,
    description:
      "Experience lightning-fast load times and rock-solid stability with our Performance Hosting. Give global visitors a smooth ride by adding CDN Integration, and rest easy with Priority Support for timely, expert assistance whenever you need it. Perfect for high-traffic sites aiming for a frictionless user experience.",
    category: "Hosting",
    options: [
      { id: "opt1", name: "CDN Integration", price: "$14.00" },
      { id: "opt2", name: "Priority Support", price: "$20.00" },
    ],
  },
  {
    id: "8",
    name: "Analytics & Insights",
    price: "$68.00",
    imageUrl: Analytics,
    description:
      "Unlock the secrets behind your site’s performance with deep analytics and user behavior tracking. Pinpoint what’s working—and what’s not—by adding Heatmaps. Then optimize your user journey with Conversion Funnels to ensure every visitor becomes a loyal customer.",
    category: "Marketing",
    options: [
      { id: "opt1", name: "Heatmaps", price: "$12.00" },
      { id: "opt2", name: "Conversion Funnels", price: "$18.00" },
    ],
  },
  {
    id: "9",
    name: "Business Logo Design",
    price: "$145.00",
    imageUrl: BusinessLogo,
    description:
      "Craft a memorable brand identity with a custom-designed logo, including up to three revisions. Want to take it further? Add our Social Media Kit for consistent branding across platforms, and bundle a Brand Style Guide to maintain a polished look in every future design.",
    category: "Branding",
    options: [
      { id: "opt1", name: "Social Media Kit", price: "$20.00" },
      { id: "opt2", name: "Brand Style Guide", price: "$35.00" },
    ],
  },
  {
    id: "10",
    name: "Premium Support Plan",
    price: "$245.00",
    imageUrl: PremiumSupport,
    description:
      "Get round-the-clock assistance from our dedicated experts, guaranteed to keep your business running smoothly. Need personalized attention? Add a Dedicated Account Manager to handle your issues directly. Want proactive solutions? A Monthly Site Review keeps you ahead of potential problems.",
    category: "Support",
    options: [
      { id: "opt1", name: "Dedicated Account Manager", price: "$100.00" },
      { id: "opt2", name: "Monthly Site Review", price: "$50.00" },
    ],
  },
];

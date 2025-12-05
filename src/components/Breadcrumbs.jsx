"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  // Split URL segments
  let segments = pathname.split("/").filter(Boolean);

  // Remove unwanted route from breadcrumb
  const hiddenSegments = ["itinerary-inner"];
  segments = segments.filter((seg) => !hiddenSegments.includes(seg));

  // Custom labels for certain routes
  const customLabels = {
    aboutus: "About Us",
    contact: "Contact Us",
    termsconditions: "Terms & Conditions",
    privacypolicy: "Privacy Policy",
  };

  const breadcrumbs = segments.map((seg, i) => ({
    href: "/" + segments.slice(0, i + 1).join("/"),
    label: customLabels[seg.toLowerCase()] || seg.replace(/-/g, " "),
  }));

  return (
    <section className="breadcrumb-hero">
      {/* Page Title (Last Segment) */}
      <h1 className="hero-title">
        {breadcrumbs[breadcrumbs.length - 1].label}
      </h1>

      {/* Breadcrumb Navigation */}
      <nav>
        <ol className="breadcrumb-nav">
          <li>
            <Link href="/" className="crumb">
              Home
            </Link>
          </li>

          {breadcrumbs.map((item, i) => (
            <li key={i} className="flex items-center">
              <span className="divider">/</span>

              {i === breadcrumbs.length - 1 ? (
                <span className="crumb active">{item.label}</span>
              ) : (
                <Link href={item.href} className="crumb">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}

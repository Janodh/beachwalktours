"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((seg, i) => ({
    href: "/" + segments.slice(0, i + 1).join("/"),
    label: seg.replace(/-/g, " "),
  }));

  return (
    <section className="breadcrumb-hero">
      {/* Page Title */}
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

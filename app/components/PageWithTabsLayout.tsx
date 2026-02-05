"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TABS, getTabPath } from "../(tab-pages)/page1/tab-config";

const PAGES = TABS.map((tab) => ({
  path: getTabPath(tab.segment),
  label: tab.label,
  headline: tab.headline,
  description: tab.description,
}));

export function PageWithTabsLayout({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) {
  const pathname = usePathname();
  const current = PAGES.find((p) => p.path === pathname) ?? PAGES[0];

  return (
    <div
      className="page-with-tabs min-h-full"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="page-with-tabs__banner">
        <h1 className="page-with-tabs__headline">{current.headline}</h1>
        <p className="page-with-tabs__description">{current.description}</p>
      </div>

      <nav className="page-with-tabs__tabs" role="tablist">
        {PAGES.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            role="tab"
            aria-selected={pathname === page.path}
            className={`page-with-tabs__tab ${pathname === page.path ? "page-with-tabs__tab--active" : ""}`}
          >
            {page.label}
          </Link>
        ))}
      </nav>

      <div className="page-with-tabs__content" role="tabpanel">
        {children}
      </div>
    </div>
  );
}

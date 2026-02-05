/**
 * Tab config aligned with Next.js routes under page1:
 * - page1/page.tsx        → /page1
 * - page1/page2/page.tsx → /page1/page2
 * - page1/page3/page.tsx → /page1/page3
 */
export const TAB_BASE_PATH = "page1";

export const TABS = [
  { segment: "", label: "blub", headline: "blub", description: "Welcome to blub." },
  { segment: "page2", label: "fuu", headline: "fuu", description: "Welcome to fuu." },
  { segment: "page3", label: "whytho", headline: "whytho", description: "Welcome to whytho." },
] as const;

export function getTabPath(segment: string): string {
  const base = `/${TAB_BASE_PATH}`;
  return segment ? `${base}/${segment}` : base;
}

"use client";

import { useEffect, useState } from "react";
import { PageWithTabsLayout } from "../../components/PageWithTabsLayout";

const BACKGROUND_IMAGE = "/page1-bg.jpg";
const DEFAULT_ENDPOINT = "/api/cards";

export default function Page1() {
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(DEFAULT_ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch cards");
        return res.json();
      })
      .then((data: { items: string[] }) => {
        setItems(data.items);
      })
      .catch((err) => setError(err instanceof Error ? err.message : "Error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWithTabsLayout backgroundImage={BACKGROUND_IMAGE}>
      <div className="tab-content space-y-4">
        {loading && (
          <p className="text-slate-500 dark:text-slate-400 py-4">Loading…</p>
        )}
        {error && (
          <p className="text-red-600 dark:text-red-400 py-4">{error}</p>
        )}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-2 gap-4">
              {items.map((str, i) => (
                <div
                  key={i}
                  className="w-full h-[250px] flex items-center justify-center rounded-lg bg-white/90 dark:bg-slate-800/90 shadow-md border border-slate-200 dark:border-slate-700"
                >
                  <span className="text-slate-700 dark:text-slate-200 font-mono text-lg select-none">
                    {str}
                  </span>
                </div>
              ))}
            </div>
            {items.length === 0 && (
              <p className="text-slate-500 dark:text-slate-400 text-center py-8">
                No cards.
              </p>
            )}
          </>
        )}
      </div>
    </PageWithTabsLayout>
  );
}

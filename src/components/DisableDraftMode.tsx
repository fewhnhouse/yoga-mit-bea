"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";
import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {pending ? (
        <span className="bg-charcoal text-white px-4 py-2 rounded-full text-sm">
          Vorschau wird beendet...
        </span>
      ) : (
        <button
          type="button"
          onClick={disable}
          className="bg-charcoal hover:bg-charcoal-light text-white px-4 py-2 rounded-full text-sm shadow-lg transition-colors"
        >
          Vorschau beenden
        </button>
      )}
    </div>
  );
}


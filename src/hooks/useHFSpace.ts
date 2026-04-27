import { useCallback, useEffect, useRef, useState } from "react";

type SpaceStatus = "checking" | "waking" | "ready" | "error";

const MAX_STATUS_POLLS = 12;
const POLL_INTERVAL_MS = 5000;

export function useHFSpace() {
  const [status, setStatus] = useState<SpaceStatus>("checking");
  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPolling = () => {
    if (pollingRef.current) {
      clearTimeout(pollingRef.current);
      pollingRef.current = null;
    }
  };

  const checkStatus = useCallback(async () => {
    try {
      const response = await fetch("/api/chat/status", {
        method: "GET",
        cache: "no-store",
      });

      if (response.ok) {
        setStatus("ready");
        return "ready" as const;
      }

      setStatus("waking");
      return "waking" as const;
    } catch {
      setStatus("error");
      return "error" as const;
    }
  }, []);

  const pollUntilReady = useCallback(
    async (attempt = 0) => {
      if (attempt >= MAX_STATUS_POLLS) {
        setStatus("error");
        return;
      }

      const nextStatus = await checkStatus();
      if (nextStatus === "ready" || nextStatus === "error") {
        return;
      }

      pollingRef.current = setTimeout(() => {
        void pollUntilReady(attempt + 1);
      }, POLL_INTERVAL_MS);
    },
    [checkStatus],
  );

  const triggerWakeUp = useCallback(() => {
    clearPolling();
    void pollUntilReady(0);
  }, [pollUntilReady]);

  useEffect(() => {
    triggerWakeUp();

    return () => {
      clearPolling();
    };
  }, [triggerWakeUp]);

  return { status, triggerWakeUp };
}

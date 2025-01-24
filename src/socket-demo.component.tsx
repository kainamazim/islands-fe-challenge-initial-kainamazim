import { useEffect, useState } from "react";
import { docsSocketClient } from "./clients";

export const SocketDemo = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    const handleServerTime = (data: { time: number }) => {
      setTime(data.time);
    };

    docsSocketClient.on("serverTime", handleServerTime);

    return () => {
      docsSocketClient.off("serverTime", handleServerTime);
    };
  }, []);

  return (
    <div>
      <strong>Server Time:</strong> {new Date(time).toUTCString()}
    </div>
  );
};

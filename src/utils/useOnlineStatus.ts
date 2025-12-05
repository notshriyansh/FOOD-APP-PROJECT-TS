import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState<boolean>(true);

  useEffect(() => {
    const goOffline = () => setOnlineStatus(false);
    const goOnline = () => setOnlineStatus(true);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.addEventListener("offline", goOffline);
      window.addEventListener("online", goOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;

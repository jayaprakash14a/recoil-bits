import { RecoilRoot, useRecoilValue } from "recoil"
import {  combinedSelector, jobsAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms"
import { useMemo } from "react";

function App() {
  return (
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const combinedNotificationCount = useRecoilValue(combinedSelector);

  // const combinedNotificationCount = useMemo(()=>{
  //   return networkNotificationCount + jobsNotificationCount + messagingNotificationCount + notificationCount;
  // }, [notificationCount,messagingNotificationCount, jobsNotificationCount, networkNotificationCount]);


  return(<>
    <button>Home</button>

    <button>My network ({networkNotificationCount>100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobsNotificationCount>100 ? "99+" : jobsNotificationCount})</button>
    <button>Messaging({messagingNotificationCount>100 ? "99+" : messagingNotificationCount})</button>
    <button>Notifications({notificationCount>100 ? "99+" : notificationCount})</button>

    <button>Me({combinedNotificationCount})</button>
  </>)
}

export default App

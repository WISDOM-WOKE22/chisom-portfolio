"use client"
  
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalComponent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"secret"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="secret"
    calLink="wisdom-woke/secret"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />;
};
  
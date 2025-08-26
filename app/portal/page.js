// app/portal/page.js
import { Redirector } from "./PortalLogic";
import { Suspense } from "react";

export default function PortalPage() {
  return (
    <Suspense>
      <Redirector />
    </Suspense>
  );
}

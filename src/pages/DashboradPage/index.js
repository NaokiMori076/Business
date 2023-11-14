import React from "react";
import FirstPart from "./FirstPart";
import "./style.css";
import TrackingPart from "./TrackingPart";

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <FirstPart />
      <TrackingPart />
    </div>
  );
}

export default DashboardPage;

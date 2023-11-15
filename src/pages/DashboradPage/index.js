import React from "react";
import FirstPart from "./FirstPart";
import "./style.css";
import TrackingPart from "./TrackingPart";
import BenefitPart from "./BenefitPart";
import RatingPart from "./RatingPart";
import DeliveryPart from "./DeliveryPart";

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <FirstPart />
      <TrackingPart />
      <BenefitPart />
      <RatingPart />
      <DeliveryPart />
    </div>
  );
}

export default DashboardPage;

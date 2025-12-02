import React from "react";
import Breadcrumb from "../Breadcrumb";
import Des_banner from "../layout/Des_banner";
import Des_activity from "../layout/Des_activity";
import Des_visiting from "../layout/Des_visiting";
import Des_recommanded from "../layout/Des_recommanded";
import Des_popular from "../layout/Destination/Des_popular";
import Des_trending from "../layout/Destination/Des_trending";
import Des_holiday from "../layout/Destination/Des_holiday";
import Des_carHire from "../layout/Destination/Des_carHire";
import Des_tips from "../layout/Destination/Des_tips";
import Des_topSights from "../layout/Destination/Des_topSights";

const Destination = () => {
  return (
    <div>
      <Breadcrumb
        pageOne={"Europe"}
        pageTwo={"United Kingdom (UK)"}
        pageThree={"London"}
      />
      <Des_banner/>
      <Des_activity/>
      <Des_visiting/>
      <Des_recommanded/>
      <Des_popular/>
      <Des_trending/>
      <Des_holiday/>
      <Des_carHire/>
      <Des_tips/>
      <Des_topSights/>
    </div>
  );
};

export default Destination;

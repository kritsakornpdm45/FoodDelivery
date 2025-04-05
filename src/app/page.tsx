import Fifthblog from "@/components/Homepage/Fifthblog";
import Firstblog from "@/components/Homepage/Firstblog";
import Fourthblog from "@/components/Homepage/Fourthblog";
import Secondblog from "@/components/Homepage/Secondblog";
import Thirdblog from "@/components/Homepage/Thirdblog";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Firstblog/>
      <Secondblog/>
      <Thirdblog/>
      <Fourthblog/>
      <Fifthblog/>
      {/* <div>Nav</div>
      <div>HeroSection</div>
      <div>PopularCities</div>
      <div>HowItWorks</div>
      <div>popular items</div>
      <div>FeaturedRestaurants</div>
      <div>BestDeals</div>
      <div>daily quick</div>
      <div>best deal</div>
      <div>pre order</div>
      <div>FooterSection</div> */}

    </>
  );
};

export default Homepage;

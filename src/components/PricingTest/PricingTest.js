import React from "react";
import { IconContext } from "react-icons";
import { FaCodepen, FaHotjar, FaMedapps } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  PricingSection,
  PricingWrapper,
  PricingHeader,
  PricingCardsContainer,
  PricingCard,
  PricingCardInfo,
  CardTitle,
  CardPrice,
  CardPeriod,
  CardServicesList,
  CardServicesItem,
  IconWrapper,
} from "./PricingTest.elements";

const PricingTest = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: "64px" }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeader>Our Services</PricingHeader>
          <PricingCardsContainer>
            <PricingCard>
              <PricingCardInfo>
                <IconWrapper>
                  <FaCodepen />
                </IconWrapper>
                <CardTitle>Starter Pack</CardTitle>
                <CardPrice>$99.99</CardPrice>
                <CardPeriod>per month</CardPeriod>
                <CardServicesList>
                  <CardServicesItem>1000 new users</CardServicesItem>
                  <CardServicesItem>$10.000 budget</CardServicesItem>
                  <CardServicesItem>Retargeting analytics</CardServicesItem>
                </CardServicesList>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <IconWrapper>
                  <FaHotjar />
                </IconWrapper>
                <CardTitle>Starter Pack</CardTitle>
                <CardPrice>$99.99</CardPrice>
                <CardPeriod>per month</CardPeriod>
                <CardServicesList>
                  <CardServicesItem>1000 new users</CardServicesItem>
                  <CardServicesItem>$10.000 budget</CardServicesItem>
                  <CardServicesItem>Retargeting analytics</CardServicesItem>
                </CardServicesList>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <IconWrapper>
                  <FaMedapps />
                </IconWrapper>
                <CardTitle>Starter Pack</CardTitle>
                <CardPrice>$99.99</CardPrice>
                <CardPeriod>per month</CardPeriod>
                <CardServicesList>
                  <CardServicesItem>1000 new users</CardServicesItem>
                  <CardServicesItem>$10.000 budget</CardServicesItem>
                  <CardServicesItem>Retargeting analytics</CardServicesItem>
                </CardServicesList>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingCardsContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default PricingTest;

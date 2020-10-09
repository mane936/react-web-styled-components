import React from "react";
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
} from "./PricingTest.elements";

const PricingTest = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeader>Our Services</PricingHeader>
        <PricingCardsContainer>
          <PricingCard>
            <PricingCardInfo>
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
  );
};

export default PricingTest;

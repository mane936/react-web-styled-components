import styled from "styled-components";

export const PricingSection = styled.div`
  background-color: #4b59f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 24px;
`;

export const PricingHeader = styled.h2`
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const PricingCard = styled.div`
  padding: 35px;
  background-color: black;
  border-radius: 5px;

  &:nth-child(2) {
    margin: 24px;
  }

  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.06);
    background-color: #101522;
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const CardTitle = styled.h3`
  font-size: 30px;
  margin: 24px auto 10px auto;
`;
export const CardPrice = styled.h4`
  font-size: 40px;
`;
export const CardPeriod = styled.small`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const CardServicesList = styled.ul`
  list-style: none;
  color: rgb(170, 170, 170);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0 32px;
`;

export const CardServicesItem = styled.li`
  font-size: 16;
  margin-bottom: 5px;
`;

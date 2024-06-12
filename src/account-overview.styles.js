import styled from "styled-components";

const AccountOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 320px;
  background-color: #ebebed;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AccountOverviewTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const ContainerHeader = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  /* margin-left: 3.5rem; */
`;

const ContainerTitle = styled.p`
  margin: ${({ $margin }) => ($margin ? $margin : "0")};
  font-family: "Roboto", sans-serif;
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "100")};
  font-style: normal;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "1.5rem")};
  color: ${({ $color }) => ($color ? $color : "red")};
`;

const SupportContact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

const SupportContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const SupportContactIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #ffd43b;
  border-radius: 8px;
`;
const AccountOverviewDataContainer = styled.div`
  margin: 1rem;
  padding: 0.5rem;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const AccountOverviewDataHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SalesOverview = styled.div`
  display: flex;
  flex-direction: row;
`;
const SalesData = styled.div`
  padding: 0%.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align-last: left;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const Percentage = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #22d802;
`;

export {
  AccountOverviewContainer,
  ContainerTitle,
  ContainerHeader,
  SupportContact,
  SupportContactDetails,
  SupportContactIcon,
  AccountOverviewDataContainer,
  AccountOverviewDataHeader,
  AccountOverviewTop,
  SalesOverview,
  SalesData,
  Percentage,
};

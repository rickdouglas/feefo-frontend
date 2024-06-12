import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faEnvelope, faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { 
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
} from './account-overview.styles';


export const AccountOverview = ({ data }) => {

  const calculatePercentage = (number, total) => {
    return Math.floor((number / total) * 100);
  }

  let uploadPercentage =  calculatePercentage(data.salesOverview.successfulUploads, data.salesOverview.uploads);
  let linesSavedPercentage = calculatePercentage(data.salesOverview.linesSaved, data.salesOverview.linesAttempted);

  
  return (
    <AccountOverviewContainer>
      <AccountOverviewTop>
        <ContainerTitle $color='#504f4e' $margin='1.5rem' $fontWeight='600'>
          Account Overview
        </ContainerTitle>
        <ContainerHeader>
          <ContainerTitle $color='#B6B4B0' $margin $fontWeight='800' $fontSize='12px'>
            YOUR FEEFO SUPPORT CONTACT
          </ContainerTitle>
          <SupportContact>
            <SupportContactIcon>
              <FontAwesomeIcon icon={faHeadset} size='lg' />
            </SupportContactIcon>
            <SupportContactDetails>
              <ContainerTitle $color='#504f4e' $fontWeight='700' $fontSize='12px'>
                {data.supportContact.name}
              </ContainerTitle>
              <ContainerTitle $color='#B6B4B0' $fontWeight='700' $fontSize='12px'>
                <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: '0.25rem' }} /> {data.supportContact.email}
              </ContainerTitle>
            </SupportContactDetails>
            <ContainerTitle $color='#B6B4B0' $fontWeight='700' $fontSize='12px'>
              0203 362 4209
            </ContainerTitle>
          </SupportContact>
        </ContainerHeader>
      </AccountOverviewTop>
      <AccountOverviewDataContainer>
        <AccountOverviewDataHeader>
          <ContainerTitle $color='#504f4e' $fontWeight='700' $fontSize='16px'>
            <FontAwesomeIcon icon={faUpload} style={{ color: "#74C0FC", paddingRight: '0.5rem' }} />
            Sales
          </ContainerTitle>
          <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#B197FC" }} />
        </AccountOverviewDataHeader>
        <ContainerTitle $color='#94928F' $fontWeight='700' $fontSize='12px' style={{ textAlignLast: 'left' }}>
          You had {data.salesOverview.successfulUploads} uploads and {data.salesOverview.linesSaved} lines added
        </ContainerTitle>
        <SalesOverview>
          <SalesData>
            <Percentage>
              {uploadPercentage}%
            </Percentage>
            <ContainerTitle $color='#94928F' $fontWeight='700' $fontSize='12px' style={{ textAlignLast: 'left' }}>
              UPLOAD SUCCESS
            </ContainerTitle>
          </SalesData>
          <SalesData>
            <Percentage>
              {linesSavedPercentage}%
            </Percentage>
            <ContainerTitle $color='#94928F' $fontWeight='700' $fontSize='12px' style={{ textAlignLast: 'left' }}>
              LINES SAVED
            </ContainerTitle>
          </SalesData>
        </SalesOverview>
      </AccountOverviewDataContainer>
    </AccountOverviewContainer>
  )
}

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number
    })
  })
}

export default AccountOverview;
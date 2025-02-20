import styled from 'styled-components';

export const FormContentDiv = styled.div`
  display: flex;
  height: calc(100vh - 120px);
`;

export const FormHeading = styled.h2`
  font-size: 28px;
  font-weight: 400;
`;

export const LineParagraph = styled.p`
  &:first-child {
    margin-top: 40px;
  }
  margin: 10px 0;
  text-align: left;
  width: 100%;
  font-size: 24px;
  color: #333;
  font-weight: 500;

  span {
    width: 110px;
    display: inline-flex;
    font-weight: 300;
  }

  strong {
    margin-left: 20px;
    font-weight: 600;
  }
`;

export const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const MessageContainer = styled.div`
  @media only screen and (min-width: 768px){
    display: flex;
    flex-direction: row;
    align-items: end;
    margin-bottom: 40px;
  }
`;

export const ThankYouMessage = styled.p`
  font-size: 24px;
  font-weight: lighter;
  color: #FFFFFF;
  padding: 10px;
  margin-bottom: 50px;
  margin-top: 16px;
  text-align: left;
  background-color: #989E8D;
  border: 2px solid;
  border-radius: 25px;
  @media only screen and (min-width: 768px){
    margin-left: 30px;
    margin-bottom: 0;
  }
`;

export const UserProfileImage = styled.img`
  width: 60px; 
  height: 60px;
  border-radius: 50%;
  // margin-bottom: 16px;
  border: none; 
`;

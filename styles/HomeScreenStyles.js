import styled from "styled-components";

export const Container = styled.View`
background-color: #f9fafd;
flex: 1;
justify-content: center;
align-items: center;
padding : 20px;
`;

export const Card = styled.View`
background-color: #f6f6f6;
width:100%;
margin-buttom : 20px;
border-radius: 10px;
`;

export const UserMainInfo = styled.View`
 flex-direction:row;
 Justify-content : flex-start;
`;

export const UserProfilePicture = styled.Image` 
width:50px;
height: 50px;
border-radius:25px;
`;

export const UserInfo = styled.View`
flex-direction:column;

`;

export const UserName = styled.Text`
font-size:14px;
font-weight:bold;
font-family : Lato-Regular;
color: black;
`;
  
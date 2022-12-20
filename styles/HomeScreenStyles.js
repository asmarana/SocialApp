import styled from "styled-components";

export const Container = styled.View`
background-color: #f9fafd;
flex: 1;
// justify-content: center;
align-items: center;
padding : 5px;
`;

export const Card = styled.View`
background-color: #f6f6f6;
width:100%;
margin-bottom : 5px;
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
justify-content : center;
margin-left:10px;
`;

export const UserName = styled.Text`
font-size:14px;
font-weight:bold;
font-family : Lato-Regular;
color: black;
`;

export const PostTiming = styled.Text`
font-size : 12px;
font-family: Lato-Regular;
color : #666;
`;

export const PostText = styled.Text`
    font-size: 14px;
    font-family: 'Lato-Regular';
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    color: black;
`; 

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    /* margin-top: 15px; */
`;

export const Divider = styled.View`
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    width: 92%;
    align-self: center;
    // margin-top: 15px;
`;

export const ConnectionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 15px;
`;

export const Connection = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
    padding: 2px 5px;
    background-color: ${props => props.active ? '#2e64e515' : 'transparent'}
`;

export const ConnectionText = styled.Text`
    font-size: 12px;
    font-family: 'Lato-Regular';
    font-weight: bold;
    color: ${props => props.active ? '#2e64e5' : '#333'};
    margin-top: 5px;
    margin-left: 5px;
`;

  
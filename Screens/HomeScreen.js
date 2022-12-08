import React from 'react';
import { Container,Card, UserMainInfo, UserName, UserProfilePicture } from '../styles/HomeScreenStyles';

const HomeScreen = () => {
  return (
    <Container>
      <Card>
        <UserMainInfo>
          <UserProfilePicture source = {require('../User/img.webp')}/>
          <UserName>Asma Iftikhar</UserName>
        </UserMainInfo>
      </Card>
    </Container>
  );
};
export default HomeScreen;

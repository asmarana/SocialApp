import React, { useContext, useEffect, useState } from 'react';
import { Card, UserMainInfo, UserName, UserProfilePicture, UserInfo, PostTiming, PostText, PostImg, ConnectionWrapper, Connection, ConnectionText, Divider } from '../styles/HomeScreenStyles';
import Icons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigation/AuthProvider';

const PostCard = ({ item ,onDelete }) => {
  const { user, logout } = useContext(AuthContext);


  let likeIcon = item.liked ? 'heart' : 'heart-outline';
  let likeIconColor = item.liked ? '#2e64e5' : '#333';

  if (item.likes == 1) {
    let likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    let commentText =  '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  return (
    <Card>
      <UserMainInfo>
        <UserProfilePicture source={{uri: item.userImg}} />
        <UserInfo>
          <UserName>{item.userName}</UserName>
          <PostTiming>{item.PostTime}</PostTiming>
        </UserInfo>
      </UserMainInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != null ? <PostImg source={{uri : item.postImg}} /> : <Divider />}
      {/* <PostImg source={require('../User/img.webp')}/> */}
      <ConnectionWrapper>
        <Connection active = {item.liked}> 
          <Icons name={likeIcon} size={25} color={likeIconColor} />
          <ConnectionText active= {item.liked}>{likeText}</ConnectionText>
        </Connection> 
        <Connection>
          <Icons name="md-chatbubble-outline" size={25} color={'#333'} />
          <ConnectionText>{commentText} </ConnectionText>
        </Connection>

        {user.uid == item.userId ?
        <Connection onPress ={ () => onDelete(item.id)}>
          <Icons name="md-trash-bin" size={25} color={'#333'} />
         </Connection>
         : null }
      </ConnectionWrapper>
    </Card >
  );
};
export default PostCard;
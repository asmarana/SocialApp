import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import PostCard from '../components/PostCards';
import { Container } from '../styles/HomeScreenStyles';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


// const Posts = [
//   {
//     id: '1',
//     userName: 'Asma Iftikhar',
//     userImg: require('../User/img.webp'),
//     postTime: '1 hours ago',
//     post:
//       'Updated new profile picture',
//     postImg: require('../User/img.webp'),
//     liked: true,
//     likes: '14',
//     comments: '5',
//   },
//   {
//     id: '2',
//     userName: 'Asma Iftikhar',
//     userImg: require('../User/img.webp'),
//     postTime: '1 hours ago',
//     post:
//       'Hello Fellows...!',
//     postImg: 'none',
//     liked: false,
//     likes: '14',
//     comments: '0',
//   },
//   {
//     id: '3',
//     userName: 'Asma Iftikhar',
//     userImg: require('../User/img.webp'),
//     postTime: '1 hours ago',
//     post:
//       'Hello Fellows...!',
//     postImg: require('../User/img.webp'),
//     liked: true,
//     likes: '14',
//     comments: '5',
//   },
//   {
//     id: '4',
//     userName: 'Asma Iftikhar',
//     userImg: require('../User/img.webp'),
//     postTime: '1 hours ago',
//     post:
//       'Hello Fellows...!',
//     postImg: require('../User/img.webp'),
//     liked: false,
//     likes: '0',
//     comments: '0',
//   },
//   {
//     id: '5',
//     userName: 'Asma Iftikhar',
//     userImg: require('../User/img.webp'),
//     postTime: '1 hours ago',
//     post:
//       'Hello Fellows...!',
//     postImg: require('../User/img.webp'),
//     liked: true,
//     likes: '14',
//     comments: '5',
//   },
// ];

const HomeScreen = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('Posts')
        .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const { userId, post, postImg, postTime, likes, comments } = doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Asma',
              userImg:
                'https://img.freepik.com/premium-vector/vector-illustration-cartoon-cute-girl-programmer-coder-developer-designer_657235-204.jpg?w=740',
              postTime: postTime,
              post,
              postImg,
              liked: true,
              likes,
              comments,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      console.log('Posts : ', posts);

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [deleted]);

  const handleDelete = (postId) => {
    Alert.alert(
      'Delete Post',
      'Are You sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(postId),
        },
      ],
      { cancelable: false }
    );
  }

  const deletePost = (postId) => {
    console.log('Current Post Id: ', postId);

    firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const { postImg } = documentSnapshot.data();

          if (postImg != null) {
            const storageRef = storage().refFromURL(postImg);
            const imageRef = storage().ref(storageRef.fullPath);

            imageRef
              .delete()
              .then(() => {
                console.log(`${postImg} has been deleted successfully.`);
                deleteFirestoreData(postId);
                setDeleted(true);
              })
              .catch((e) => {
                console.log('Error while deleting the image. ', e);
              });
            // If the post image is not available
          } else {
            deleteFirestoreData(postId);
          }
        }
      });
  };

  const deleteFirestoreData = (postId) => {
    firestore()
      .collection('posts')
      .doc(postId)
      .delete()
      .then(() => {
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted successfully!',
        );
        setDeleted(true);
      })
      .catch((e) => console.log('Error deleting posst.', e));
  };
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  return (
    <Container
      onLayout={(event) => setLayout(event.nativeEvent.layout)}>
      <FlatList
        style={{
          width: layout.width
        }}
        data={posts}
        renderItem={({ item }) => <PostCard item={item} onDelete={handleDelete} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
    // <View>
    //   <Text> Home </Text>
    // </View>
  );
};
export default HomeScreen;


import React, { Component, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Animated, ProgressBarAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {userSignout, pickImage} from '../../actions/authAction';
import { Button, Avatar, Card, } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  
    render() {
      return(
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                {
                    opacity: this.state.opacity,
                    transform: [
                    {
                        scale: this.state.opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1],
                        })
                    }
                    ]
                },
                    this.props.style,
                ]}
            />
        )
    }
}


const ProfileScreen = () => {
    const [talkToAvatarState, setTalkToAvatarState] = useState(false);
    const [trigerImg, setTrigerImg] = useState(true)
    const [trigerHltme, setTrigerHltme] = useState(true)
    const [trigerDact, setTrigerDact] = useState(true)
    const [trigerSlyf, setTrigerSlyf] = useState(true)
    const [trigerMps, setTrigerMps] = useState(true)
    const [trigerProfile, setTrigerProfile] = useState(true)
    const user = useSelector(state => state.auth.user)
    const imageSource = useSelector(state => state.auth.imageSource)
    const progressBar = useSelector(state => state.auth.progressBarStatus) 
    const dispatch = useDispatch();
    console.log("profile detils",user)
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.FirstHalf}>
                <Avatar
                    size="large"
                    rounded
                    source={{
                        uri: user.profileURL
                    }}
                    showEditButton
                />
                <Text style={{fontSize: 18,color: '#fff' }}>{user.fullname}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.SecondHalf}>
                { trigerImg && trigerHltme &&trigerDact && trigerSlyf && trigerMps && trigerProfile && (
                    <View>
                        <Card
                            containerStyle={styles.Cards}>
                            <ImageLoader
                            style={{width: width/1.1, height: height/2.6,}}
                            source={require('../../assets/healty0.png')}
                            />
                            <TouchableOpacity onPress={() => setTrigerHltme(false)}>
                                <Text style={{marginBottom: '2%', marginVertical: '3%', color: '#fff', alignSelf: 'center', fontSize: 22}}>Check your health timeline</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card
                            containerStyle={styles.Cards}>
                            <ImageLoader
                            style={{width: width/1.1, height: height/2.6,}}
                            source={require('../../assets/healty3.png')}
                            />
                            <TouchableOpacity onPress={() => setTrigerDact(false)}>
                                <Text style={{marginBottom: '2%', marginVertical: '2%', color: '#fff', alignSelf: 'center', fontSize: 22}}>Daily Activity</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card
                            containerStyle={{ 
                                backgroundColor: '#2E71DC',
                                height: height/2,
                                width: width/1.08,
                                borderRadius: 15,
                                shadowOffset: { width: 0, height: 3 },
                                shadowColor: '#000',
                                shadowOpacity: 0.4,
                                elevation: 4,}}
                            >
                            { talkToAvatarState || (
                                <View>
                                    <ImageLoader 
                                        style={{width: width/1.2, height: height/2.6, alignContent: 'center'}}
                                        source={require('../../assets/healty7.png')}
                                    />
                                    <TouchableOpacity onPress={() => setTalkToAvatarState(true)}>
                                        <Text style={{marginBottom: '2%', marginVertical: '2%', color: '#fff', alignSelf: 'center', fontSize: 22}}>Talk to Avatar</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            { talkToAvatarState && (
                                <View>
                                    <View style={{ flexDirection: 'row',}}>
                                        <TouchableOpacity onPress={() => alert("under development")}>
                                            <ImageLoader
                                                style={{width: width/2.5, height: height/5.3}}
                                                source={require('../../assets/chat.png')}
                                            />
                                            <Text style={{alignSelf: 'center', fontSize: 18, color: '#fff'}}>Message</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => alert("under development")}>
                                            <ImageLoader
                                                style={{ marginHorizontal: '5%', width: width/2.5, height: height/5.3}}
                                                source={require('../../assets/videocall3.png')}
                                            />
                                            <Text style={{alignSelf: 'center', fontSize: 18, color: '#fff'}}>video call</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row',}}>
                                        <TouchableOpacity onPress={() => alert("under development")}>
                                            <ImageLoader
                                                style={{marginVertical: '4%', width: width/2.5, height: height/5.3}}
                                                source={require('../../assets/voiceChat.png')}
                                            />
                                            <Text style={{alignSelf: 'center', fontSize: 18, color: '#fff'}}>Voice call</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setTrigerImg(false)}>
                                            <ImageLoader
                                                style={{ marginHorizontal: '5%', marginVertical: '4%', width: width/2.5, height: height/5.3}}
                                                source={require('../../assets/imageChat.png')}
                                            />
                                            <Text style={{alignSelf: 'center', fontSize: 18, color: '#fff'}}>Photo</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </Card>
                        <Card
                            containerStyle={styles.Cards}>
                            <ImageLoader
                            style={{width: width/1.1, height: height/2.5}}
                            source={require('../../assets/healty9.png')}
                            />
                            <TouchableOpacity onPress={() => setTrigerSlyf(false)}>
                                <Text style={{marginBottom: '2%', marginVertical: '2%', color: '#fff', alignSelf: 'center', fontSize: 22}}>Social life </Text>
                            </TouchableOpacity>
                        </Card>
                        <Card
                            containerStyle={styles.Cards}>
                            <ImageLoader
                            style={{width: width/1.1, height: height/2.6,}}
                            source={require('../../assets/healty8.png')}
                            />
                            <TouchableOpacity onPress={() => setTrigerMps(false)} >
                                <Text style={{marginBottom: '2%', marginVertical: '2%', color: '#fff', alignSelf: 'center', fontSize: 22}}>Medical prescription</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card
                            containerStyle={{backgroundColor: '#2E71DC', height: height/2.5, width: width/1.08, borderRadius: 15, alignItems: 'center', justifyContent: 'center',}}>
                            <ImageLoader
                            style={{width: width, height: height/3,}}
                            source={require('../../assets/healty12.png')}
                            />
                            <TouchableOpacity onPress={() => setTrigerProfile(false)}>
                                <Text style={{marginBottom: '2%', marginVertical: '2%', color: '#fff', alignSelf: 'center', fontSize: 22}}>Profile and account setting</Text>
                            </TouchableOpacity>
                        </Card>
                        <Button onPress={()=>{dispatch(userSignout())}}  title="LogOut"/>
                    </View>
                )}
                { !trigerImg && (
                    <View style={{alignItems: 'center', alignContent: 'center'}}>
                        <Text>triger form image</Text>
                        <Button onPress={()=>dispatch(pickImage(user.id, user.fullname))} title="Upload image"/>
                        <ImageLoader
                            style={{width: width/2, height: height/3}}
                            source={{ uri: imageSource.uri }}
                        />
                        { progressBar && (
                            <ProgressBarAndroid styleAttr="Horizontal" color="#2E71DC" />
                        )}
                    </View>
                )}
                { !trigerDact && (
                    <View>
                        <Text>triger form Daily Activity</Text>
                    </View>
                )}
                { !trigerHltme && (
                    <View>
                        <Text>triger form Health timeline</Text>
                    </View>
                )}
                { !trigerMps && (
                    <View>
                        <Text>triger form Medical prescription</Text>
                    </View>
                )}
                { !trigerProfile && (
                    <View>
                        <Text>triger form profile and setting</Text>
                    </View>
                )}
                { !trigerSlyf && (
                    <View>
                        <Text>triger form social life</Text>
                    </View>
                )}
            </ScrollView>
		</SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    FirstHalf: {
      height: height/8,
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: '#2E71DC',
    },
    SecondHalf: {
     
    },
    Cards: {
      backgroundColor: '#2E71DC',
      height: height/2,
      width: width/1.08,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset: { width: 0, height: 3 },
      shadowColor: '#000',
      shadowOpacity: 0.4,
      elevation: 4,
    },
});

export default ProfileScreen

//const mapState = (state) => ({
 //   imageSource: state.auth.imageSource,
 // })

//const mapDispatch = {pickImage};
//export default connect(mapState, mapDispatch)(ProfileScreen)
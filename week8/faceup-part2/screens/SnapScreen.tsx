import { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../reducers/user';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function SnapScreen() {
 const dispatch = useDispatch();
// demande de la permission à l'utilisateur
 const [hasPermission, setHasPermission] = useState(false);

 // Type de caméra à utiliser (front ou back)
 const [type, setType] = useState(CameraType.back);

 //Activation du flash
 const [flashMode, setFlashMode] = useState(FlashMode.off);

 let cameraRef: any = useRef(null);

 useEffect(() => {
   (async () => {
     const { status } = await Camera.requestCameraPermissionsAsync();
     setHasPermission(status === 'granted');
   })();
 }, []);

 const takePicture = async () => {
   const photo = await cameraRef.takePictureAsync({ quality: 0.7 });
   dispatch(addPhoto(photo.uri));
 }

 if (!hasPermission) {
   return <View />;
 }
// Utilisation de la caméra Front/back ainsi que du flash Off/on et importation des icônes dans la caméra
 return (
   <Camera type={type} flashMode={flashMode} ref={(ref) => cameraRef = ref} style={styles.camera}>
     <View style={styles.buttonsContainer}>
       <TouchableOpacity
         onPress={() => setType(type === CameraType.back ? CameraType.front : CameraType.back)}
         style={styles.button}
       >
         <FontAwesome name='rotate-right' size={25} color='#ffffff' />
       </TouchableOpacity>

       <TouchableOpacity
         onPress={() => setFlashMode(flashMode === FlashMode.off ? FlashMode.torch : FlashMode.off)}
         style={styles.button}
       >
         <FontAwesome name='flash' size={25} color={flashMode === FlashMode.off ? '#ffffff' : '#e8be4b'} />
       </TouchableOpacity>
     </View>

     <View style={styles.snapContainer}>
       <TouchableOpacity onPress={() => cameraRef && takePicture()}>
         <FontAwesome name='circle-thin' size={95} color='#ffffff' />
       </TouchableOpacity>
     </View>
   </Camera>
 );
}


const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 50,
  },
  snapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  buttonStyle: {


  },

  buttonFlash:{
    flex: 1,
    alignItems: 'center',
    paddingBottom: 5,
    justifyContent: 'space-between',
    }
 });

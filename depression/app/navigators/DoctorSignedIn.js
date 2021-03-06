import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/DoctorScreens/profile/doctor';
import Video from '../screens/video';
import Test from '../screens/test';
import UpdateDoctorProfile from '../screens/DoctorScreens/doctorUpdateProfile/ProfileUpdate';
import BookedAppointment from '../screens/DoctorScreens/bookedAppointment/BookedAppointment'
const Drawer = createDrawerNavigator();

export const DoctorSignedIn =()=> (
    <Drawer.Navigator
        initialRouteName="Profile"
        screenOptions={{
            header: () => null,
        }}>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Video" component={Video} />
        <Drawer.Screen name="VideoCall" component={Test} />
        <Drawer.Screen name="Profile_Update" component={UpdateDoctorProfile} />
        <Drawer.Screen name="BookedAppointment" component={BookedAppointment} />
    </Drawer.Navigator>
);


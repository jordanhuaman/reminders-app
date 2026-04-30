import Index from '@/app';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Menu } from './menu';


const DrawerHome = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <Menu {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen
        name="index"
        component={Index}
      />
    </Drawer.Navigator>
  )
}



export default DrawerHome
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Divider } from 'react-native-paper';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={st.textoEmail}>usuario@dominio.com</Text>
          <Divider style={st.divider} theme={{ colors: { primary: 'white' } }} />
        </View>

        <DrawerItem
          label={() => (
            <View style={st.itemDrawer}>
              <Icon name="description" size={30} color="white" style={{ marginRight: 10 }} />
              <Text style={st.labelDrawer}>Pesquisas</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('TelaHome')}
        />

        <DrawerItem
          style={{ marginTop: '63%' }}
          label={() => (
            <View style={st.footer}>
              <Icon name="logout" size={30} color="white" style={{ marginRight: 10 }} />
              <Text style={st.labelDrawer}>Sair</Text>
            </View>
          )}
          onPress={() => props.navigation.popToTop()}
        />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

const st = StyleSheet.create({
  textoEmail: {
    fontSize: 25,
    color: 'white',
    margin: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  footer: {
    position: 'absolute',
    bottom: -15,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  divider: {
    width: '82%',
    alignItems: 'center',
    height: 1,
  },
  labelDrawer: {
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    fontSize: 25,
  },
  itemDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default CustomDrawerContent;

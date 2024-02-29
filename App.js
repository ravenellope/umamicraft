 import React from 'react';
 import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
 import { AntDesign, FontAwesome, MaterialCommunityIcons, Ionicons, Entypo, Feather } from '@expo/vector-icons';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { useFonts } from 'expo-font';
 import { ArchivoBlack_400Regular } from '@expo-google-fonts/archivo-black';
 import { OrelegaOne_400Regular } from '@expo-google-fonts/orelega-one';
 import { DidactGothic_400Regular } from '@expo-google-fonts/didact-gothic';
 import { Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';
 import AppLoading from 'expo-app-loading';
 import { Dimensions } from 'react-native';
 
 function DashboardScreen() {
   return (
     <View style={Dashboardstyles.screenContainer}>
       <Text style={Dashboardstyles.screenText}>Dashboard Screen</Text>
     </View>
   );
 }
 
 function RecipesScreen() {
   return (
     <View style={Recipestyles.screenContainer}>
       <Text style={Recipsstyles.screenText}>Recipes Screen</Text>
     </View>
   );
 }
 
 const ingredients = [
  { id: '1', name: 'Egg', icon: require('./assets/Egg.png') },
  { id: '2', name: 'Garlic', icon: require('./assets/Garlic.png') },
  { id: '3', name: 'Onion', icon: require('./assets/Onion.png') },
  { id: '4', name: 'Pork', icon: require('./assets/Steak.png') },
  { id: '5', name: 'Cheese', icon: require('./assets/cheese.png') },
];

const categories = [
  { id: '1', name: 'Shoyu', icon: require('./assets/Shoyu.png') },
  { id: '2', name: 'Shio', icon: require('./assets/Salt shaker.png') },
  { id: '3', name: 'Miso', icon: require('./assets/Soybean.png') },
];

const PantryScreen = () => {
  let [fontsLoaded] = useFonts({
    ArchivoBlack_400Regular,
    'Basic-Regular': require('./assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  const renderIngredientItem = ({ item }) => (
    <TouchableOpacity style={Pantrystyles.ingredientButton}>
      <Image source={item.icon} style={Pantrystyles.ingredientIcon} />
      <Text style={Pantrystyles.ingredientLabel}>{item.name}</Text>
      </TouchableOpacity>
  );
  
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={Pantrystyles.categoryButton}>
    <View style={Pantrystyles.categoryRedPart} />
    <Image source={item.icon} style={Pantrystyles.categoryIcon} />
    <Text style={Pantrystyles.categoryLabel}>{item.name}</Text>
  </TouchableOpacity>
  );

  return (
    <ScrollView style={Pantrystyles.container}>
       <View style={Pantrystyles.header}>
        <Text style={Pantrystyles.headerTitle}>PANTRY</Text>
        <TouchableOpacity style={Pantrystyles.notificationBadge}>
      <MaterialCommunityIcons name="bookmark" size={14} color="#fff" />
      <Text style={Pantrystyles.notificationBadgeText}>2</Text>
    </TouchableOpacity>
      </View>
      <View style={Pantrystyles.searchBarContainer}>
      <Text style={Pantrystyles.searchLabel}>Search</Text>
      <View style={Pantrystyles.searchInputContainer}>
        <AntDesign name="search1" size={20} color="black" style={Pantrystyles.searchIcon} />
        <TextInput
          placeholder="Search ingredients"
          style={Pantrystyles.searchInput}
        />
      </View>
        </View>
        <View style={Pantrystyles.ingredientSection}>
        <View style={Pantrystyles.ingredientHeader}>
          <Text style={Pantrystyles.sectionTitle}>Search by Ingredients</Text>
          <TouchableOpacity style={Pantrystyles.viewAllButton}>
            <Text style={Pantrystyles.viewAllButtonText}>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={ingredients}
          renderItem={renderIngredientItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Pantrystyles.ingredientList}
        />
      </View>
      <View style={Pantrystyles.categorySection}>
        <Text style={Pantrystyles.sectionTitle}>Search by Category</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Pantrystyles.categoryList}
        />
      </View>
    </ScrollView>
  );
}};

 const fetchFonts = () => {
  return Font.loadAsync({
    'Basic-Regular': require('./assets/fonts/Basic-Regular.ttf'),
  });
};

 function MoreScreen() {
  let [fontsLoaded] = useFonts({
    ArchivoBlack_400Regular,
    Poppins_600SemiBold,
    Poppins_400Regular,
    'Basic-Regular': require('./assets/fonts/Basic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <ScrollView style={Morestyles.container}>
      <View style={Morestyles.aboutSection}>
        <Text style={Morestyles.aboutTitle}>ABOUT UMAMI CRAFT</Text>
        <Image 
          source={require('./assets/Umami.png')} 
          style={Morestyles.logoImage} 
        />
        <Text style={Morestyles.aboutDescription}>
        Umami Craft is an innovative application designed to enhance your culinary experience by curating personalized ramen recipes based on the ingredients the user input. The application aims to provide users with a customized and delightful cooking experience.        </Text>
      </View>
      <View style={Morestyles.developersSection}>
        <Text style={Morestyles.developersTitle}>DEVELOPERS</Text>
        <View style={Morestyles.developerProfiles}>
          <DeveloperProfile name="Sophia Angela G. CAMARINES" image={require('./assets/camarines.png')} />
          <DeveloperProfile name="Shen Jeuz D. HERRERA" image={require('./assets/herrera.png')} />
          <DeveloperProfile name="Raven Anne S.J. LIMOS" image={require('./assets/limos.png')} />
          <DeveloperProfile name="Lance Jarem G. SERRANO" image={require('./assets/serrano.png')} />
          <DeveloperProfile name="Kyla Rosette I. TUMPALAN" image={require('./assets/tumpalan.png')} />
        </View>
      </View>
    </ScrollView>
  );
}
 }

function DeveloperProfile({ name, image }) {
  const names = name.split(' ');
  const lastName = names.length > 1 ? names.pop() : ''; 
  const firstName = names.join(' '); 

  return (
    <View style={Morestyles.developerProfile}>
      <Image style={Morestyles.developerImage} source={image} />
      <View style={Morestyles.nameContainer}>
        <Text style={Morestyles.developerLastName}>{lastName.toUpperCase()}</Text>
        <Text style={Morestyles.developerFirstName}>{firstName}</Text>
      </View>
    </View>
  );
}

 function ProfileScreen() {
  let [fontsLoaded] = useFonts({
    ArchivoBlack_400Regular,
    OrelegaOne_400Regular,
    DidactGothic_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <ScrollView style={Profilestyles.container}>
        <View style={Profilestyles.header}>
          <Text style={Profilestyles.headerText}>My Profile</Text>
        </View>
        <View style={Profilestyles.avatarSection}>
          <View style={Profilestyles.avatarContainer}>
            <Image
              source={require('./assets/icon.png')} 
              style={Profilestyles.avatar}
            />
            <TouchableOpacity style={Profilestyles.editIcon}>
              <AntDesign name="edit" size={24} color="maroon" />
            </TouchableOpacity>
          </View>
          <Text style={Profilestyles.name}>Carlo Gonzalez</Text>
          <Text style={Profilestyles.username}>@carlo</Text>
        </View>
        <View style={Profilestyles.socialContainer}>
          <FontAwesome name="facebook-f" size={24} style={Profilestyles.socialIcon} />
          <FontAwesome name="instagram" size={24} style={Profilestyles.socialIcon} />
          <Feather name="twitter" size={24} style={Profilestyles.socialIcon} />
        </View>
        <View style={Profilestyles.menu}>
          <MenuItem title="Privacy Policy" />
          <MenuItem title="Terms of Service" showDivider />
          <MenuItem title="Umami Craft Community Guidelines" showDivider />
          <MenuItem title="Frequently Asked Questions" />
          <MenuItem title="How-to Use" showDivider />
          <MenuItem title="Log Out" />
          <MenuItem title="Delete Account" />
        </View>
        <View style={Profilestyles.footer} />
      </ScrollView>
    );
  }
}


const iconMapping = {
  "Privacy Policy": { name: "settings-sharp", library: Ionicons },
  "Terms of Service": { name: "file-text-o", library: FontAwesome },
  "Umami Craft Community Guidelines": { name: "account-group-outline", library: MaterialCommunityIcons },
  "Frequently Asked Questions": { name: "frequently-asked-questions", library: MaterialCommunityIcons },
  "How-to-Use": { name: "help-circle", library: Feather },
  "Log Out": { name: "logout", library: AntDesign },
  "Delete Account": { name: "cross", library: Entypo },
};

function MenuItem({ title, isDanger, showDivider }) {
  const iconSize = 19;
  const defaultIconDetails = { name: "right", library: AntDesign };
  const { name: iconName, library: IconLibrary } = iconMapping[title] || defaultIconDetails;
  return (
    <View>
      <TouchableOpacity style={[Profilestyles.menuItem, isDanger ? Profilestyles.menuItemDanger : null]}>
        <IconLibrary name={iconName} size={iconSize} color={isDanger ? "#ff5c5c" : "maroon"} style={Profilestyles.menuIcon} />
        <Text style={[Profilestyles.menuItemText, isDanger ? Profilestyles.menuItemTextDanger : null]}>{title}</Text>
      </TouchableOpacity>
      {showDivider && <View style={Profilestyles.divider} />}
    </View>
  );
}
 
 
 const Tab = createBottomTabNavigator();
 
 function MyTabs() {
   return (
     <Tab.Navigator
       screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
           let iconName;
           if (route.name === 'Dashboard') {
             return <MaterialCommunityIcons name="view-dashboard" size={size} color={color} />;
           } else if (route.name === 'Recipes') {
             return <MaterialCommunityIcons name="book" size={size} color={color} />;
           } else if (route.name === 'Profile') {
             return <MaterialCommunityIcons name="account" size={size} color={color} />;
           } else if (route.name === 'Pantry') {
             return <MaterialCommunityIcons name="fridge-outline" size={size} color={color} />;
           } else if (route.name === 'More') {
             return <MaterialCommunityIcons name="dots-horizontal" size={size} color={color} />;
           }
         },
         tabBarActiveTintColor: 'tomato',
         tabBarInactiveTintColor: 'gray',
       })}
     >
       <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerTitle: '', headerShown: false, }}/>
       <Tab.Screen name="Recipes" component={RecipesScreen} options={{ headerTitle: '', headerShown: false, }}/>
       <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: '', headerShown: false, }}/>
       <Tab.Screen name="Pantry" component={PantryScreen} options={{ headerTitle: '', headerShown: false, }}/>
       <Tab.Screen name="More" component={MoreScreen} options={{ headerTitle: '', headerShown: false, }}/>
     </Tab.Navigator>
   );
 }
 const screenWidth = Dimensions.get('window').width;

 const Profilestyles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  avatarContainer: {
   borderRadius: 60,
   width: 120,
   height: 120,
   marginBottom: 10,
   position: 'relative', 
   alignItems: 'center',
   justifyContent: 'center',
 },
 avatar: {
   width: '100%',
   height: '100%',
   borderRadius: 60,
 },
 editIcon: {
   position: 'absolute',
   right: 0,
   bottom: 0,
   backgroundColor: 'white',
   padding: 6,
   borderRadius: 20, 
 },
 headerText: {
   fontFamily: 'ArchivoBlack_400Regular',
   fontSize: 20,
   fontWeight: 'bold',
   color: 'maroon', 
   alignSelf: 'center',
   marginTop: 50, 
 },

 name: {
   fontFamily: 'OrelegaOne_400Regular', 
   fontSize: 22,
   fontWeight: 'bold',
   color: 'maroon', 
 },
 username: {
   fontFamily: 'OrelegaOne_400Regular', 
   fontSize: 16,
   color: 'maroon',
 },
 socialIcon: {
   fontSize: 24,
   color: 'maroon', 
   marginHorizontal: 10,
 },
 
 avatarSection: {
   alignItems: 'center',
   marginTop: 10, 
 },

 nameSection: {
   alignItems: 'center', 
   marginVertical: 8, 
 },

 socialContainer: {
   flexDirection: 'row',
   justifyContent: 'center',
   marginTop: 10,
   marginBottom: 10,
 },

  menuIcon: {
   marginRight: 16, 
   width: 20, 
   height: 20, 
   alignItems: 'center',
   justifyContent: 'center'
 },

  menuItem: {
   flexDirection: 'row',
   alignItems: 'center',
   paddingVertical: 10,
   paddingHorizontal: 30,
   backgroundColor: '#fff',
   marginTop: 10,
 },

 divider: {
   height: 2,
   backgroundColor: 'maroon',
   marginVertical: 8,
   alignSelf: 'center', 
   width: '85%', 
 },

 iconContainer: {
   marginRight: 20, 
   width: 24, 
   alignItems: 'center', 
 },
 menuItemText: {
   fontFamily: 'DidactGothic_400Regular', 
   fontSize: 13,
   color: 'maroon',
   flex: 1, 
 },
 menuItemDanger: {
   backgroundColor: '#ffcccc',
 },
 menuItemTextDanger: {
   color: '#ff5c5c',
 },
 footer: {
   height: 50, 
 },
 container: {
  flex: 1,
  backgroundColor: '#fff',
},

 })

 const Pantrystyles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 0,
  },
  headerTitle: {
    fontFamily: 'ArchivoBlack_400Regular',
    color: 'maroon',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  notificationBadge: {
    backgroundColor: '#B71C1C',
    borderRadius: 20,
    width: 40,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', 
    padding: 4,
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4, 
  },

  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    shadowColor: "#000", 
    
    shadowOffset: {
      width: 0, 
      height: 2, 
    },
    shadowOpacity: 0.23, 
    shadowRadius: 2.62, 

    elevation: 4, 
  },

  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10, 
    paddingRight: 20,
    fontSize: 16,
  },
  searchIcon: {
    paddingLeft: 10,
    paddingRight: 5, 
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  searchLabel: {
    fontFamily: 'ArchivoBlack_400Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'maroon', 
    paddingBottom: 10,
  },
  ingredientList: {
    paddingLeft: 5,
    paddingRight: 5, 
    paddingTop: 5, 
    paddingBottom: 30, 
  },
  ingredientSection: {
    marginTop: 20,
    paddingHorizontal: 25, 
  },

  sectionTitle: {
    fontFamily: 'ArchivoBlack_400Regular',
    fontSize: 15,
    fontWeight: 'bold',
    color:'maroon',
  },

  
  ingredientButton: {
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: 70,
    height: 70, 
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  ingredientIcon: {
    resizeMode: 'contain',
  },
  ingredientLabel: {
    fontSize: 14,
    marginTop: 6, 
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  categorySection: {
    marginTop: 20,
    paddingHorizontal: 25, 
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    marginVertical: 8,
    marginHorizontal: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderLeftWidth: 20, 
    borderLeftColor: 'maroon', 
  },
  

  categoryIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 12,
  },
  categoryLabel: {
    fontFamily: 'ArchivoBlack_400Regular',
    fontSize: 18,
    color: 'maroon',
    flex: 1,
  },

  
   categoryList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  ingredientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, 
  },
  viewAllButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 0, 
    shadowOpacity: 0, 
    elevation: 0, 
  },

  viewAllButtonText: {
    color: 'grey',
    textDecorationLine: 'underline',
    fontSize: 10,
    fontWeight: 'bold',
  },
 })

 const Dashboardstyles = StyleSheet.create({


 })

 const Recipestyles = StyleSheet.create({


 })


 const Morestyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  aboutSection: {
    backgroundColor: 'white',
    padding: 20,
  },
  aboutTitle: {
    fontFamily: 'ArchivoBlack_400Regular',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'maroon',
    textAlign: 'center', 
    marginTop: 30,

  },
  aboutDescription: {
    fontFamily: 'Basic-Regular',
    fontSize: 14,
    color: 'black',
  },
  developersSection: {
    backgroundColor: 'maroon',
    paddingVertical: 15,
    borderTopRightRadius: screenWidth / 0.5, 
    borderTopLeftRadius: screenWidth / 0.5, 
    alignItems: 'center',
    overflow: 'hidden',
  },

  developerProfiles: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },

 developerProfile: {
    alignItems: 'center',
    marginBottom: 20,
    width: '33%', 
  },
  developerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  nameContainer: {
    alignItems: 'center',
  },
  developerLastName: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F3D9A4',
  },
  developerFirstName: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
    color: '#F3D9A4',
  },

  developersTitle: {
    fontFamily: 'ArchivoBlack_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F3D9A4',
    marginBottom: 20,
     textAlign: 'center', 
     marginTop: 35,
  },


  logoImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },

 })

 
 
 export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
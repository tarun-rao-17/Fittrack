



import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert, StyleSheet } from "react-native";
import { icons } from "../../../constants";

const SearchInput = ({ initialQuery, placeholder }) => { 
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={query}
        placeholder={placeholder} 
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {  
          if (query === ""){            
          Alert.alert(
            "Missing Query",
            "Please input something to search results across the database"
          
          );
          return
        }

        router.push(`/Search/${query}`);
      }}
    >
      <Image source={icons.search} style={styles.searchIcon} resizeMode="contain" />
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flexDirection: "row",
  alignItems: "center",
  width: "90%",
  height: 54,
  paddingHorizontal: 16,
  backgroundColor: "#000000", // Equivalent to bg-black-100
  borderRadius: 20, // Equivalent to rounded-2xl
  borderColor: "#333333", // Equivalent to border-black-200
  borderWidth: 2,
  marginTop: 30,
  

},
input: {
  flex: 1,
  color: "#FFFFFF", // text-white
  fontSize: 16,
  paddingVertical: 0,
},
searchIcon: {
  width: 20, 
  height: 20, 
},
});

export default SearchInput;


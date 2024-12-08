import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const CustomListItem = ({    
  icon: IconComponent,    
  name,    
  onPress,
  path,    
  backgroundColor = '#E5E5E5',    
  textColor = '#000',    
  iconColor = '#000',   
  borderRadius = 20  
}) => {
  const navigation = useNavigation();
  // Determine how to render the icon
  const renderIcon = () => {
    if (typeof IconComponent === 'function') {
      return <IconComponent color={iconColor} size={24} />;
    }
    if (React.isValidElement(IconComponent)) {
      // If it's already a rendered element, clone it with updated props
      return React.cloneElement(IconComponent, {
        color: iconColor,
        size: 24
      });
    }
    return null;
  };
  const handlepress=()=>{
    if (onPress) {
      onPress();
    } else {
      router.push(path);
    }
  }

  return (     
    <TouchableOpacity        
      onPress={handlepress}       
      style={{         
        flexDirection: 'row',         
        justifyContent:'center',         
        alignItems: 'center',         
        backgroundColor: backgroundColor,         
        borderRadius: borderRadius,         
        padding: 18,         
        width:350,         
        marginLeft:15,         
        marginVertical: 5,         
        shadowColor: '#000',         
        shadowOffset: { width: 0, height: 2 },         
        shadowOpacity: 0.1,         
        shadowRadius: 3,         
        elevation: 3       
      }}     
    >       
      {/* Icon on the left */}       
      {IconComponent && (         
        <View style={{ marginRight: 15 }}>           
          {renderIcon()}         
        </View>       
      )}        
      
      {/* Name in the center */}       
      <View style={{ flex: 1 }}>         
        <Text style={{            
          color: textColor,            
          fontSize: 16,            
          fontWeight: '500'          
        }}>           
          {name}         
        </Text>       
      </View>        
      
      {/* Chevron on the right */}       
      <View>         
        <ChevronRight color={iconColor} size={24} />       
      </View>     
    </TouchableOpacity>   
  ); 
};  

export default CustomListItem;
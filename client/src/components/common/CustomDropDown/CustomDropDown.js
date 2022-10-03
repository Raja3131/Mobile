import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';
import Icon from '../Icon/Icon';

const CustomDropDown = ({data, placeholder}) => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <Icon style={styles.icon} type="evil" name="arrow-down" size={20} />
        )}
      </View>
    );
  };
  return (
    <>
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          searchPlaceholder="Search..."
          value={value}
          onChange={item => {
            setValue(item.value);
          }}
          renderLeftIcon={() => (
            <Icon
              style={styles.icon}
              type="evil"
              color="black"
              name="arrow-down"
              size={20}
            />
          )}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default CustomDropDown;

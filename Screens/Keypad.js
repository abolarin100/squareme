import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    useWindowDimensions,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Keypad = () => {
    const navigation = useNavigation();
    
  const [enteredDigits, setEnteredDigits] = useState('');



    const handleNext = () => {
        navigation.navigate("SetPin");

    };

    const handleInputChange = (digit) => {
        setEnteredDigits((prevDigits) => prevDigits + digit);
      };

      const renderDigitButton = (digit) => (
        <TouchableOpacity key={digit} onPress={() => handleInputChange(digit)}>
          <Text style={{ fontSize: 24, color: '#BDBDBD', padding: 2 }}>{digit}</Text>
        </TouchableOpacity>
      );

      const handleBackspace = () => {
        setEnteredDigits((prevDigits) => prevDigits.slice(0, -1));
      };
    
      const handleCancel = () => {
        setEnteredDigits('');
      };


    return (
        <View className="flex-1 bg-[#000A4A]  ">
            <SafeAreaView className='flex-1 bg-[#000A4A ] flex-col justify-between  ,'>


                <View className='flex-row justify-between px-8 py-4  '>
                    <View className='flex-row gap-4 '>
                        <View><Image
                            source={require("../assets/images/scan.png")}
                            className=" scale-150 mt-1 "
                        /></View>

                    </View>

                    <View className='bg-[#9F56D41A] rounded-xl flex-col justify-center p-5 gap-1'>
                        <Text className='text-white text-center text-[12px]'>Wallet balance</Text>
                        <Text className='text-white text-center font-semibold text-[17px]'>₦5,200</Text>
                    </View>

                    <View className='flex-row gap-2'>
                        <Ionicons name="time-outline" size={40} color={'white'} />
                    </View>
                </View>

                <View className='flex-row justify-center items-center gap-2'>
                <Text className='text-white text-center font-semibold text-[36px]'>₦</Text>
                <Text className='text-white text-center font-semibold text-[64px]'>{enteredDigits}</Text>
                </View>


               <View className='flex-col items-center'>
               <View className='flex-col gap-16 w-[75%] justify-center    relative bottom-28  '>
                    <View className='flex-row justify-between '>
                        {[1, 2, 3].map(digit => renderDigitButton(digit))}

                    </View>
                    <View className='flex-row justify-between'>
                        {[4, 5, 6].map(digit => renderDigitButton(digit))}

                    </View>
                    <View className='flex-row justify-between'>
                        {[7, 8, 9].map(digit => renderDigitButton(digit))}

                    </View>
                    <View className='flex-row justify-between items-center'>
                        <TouchableOpacity  className='items-center'>
                            <Text className='text-xl text-[#BDBDBD]'>ͦͦ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleInputChange('0')} className='p-2'>
                            <Text className='text-xl text-[#BDBDBD]'>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleCancel} className='py-2'>
                            <Ionicons name="chevron-back" size={15} color="#BDBDBD" />
                        </TouchableOpacity>

                    </View>

                </View>

               </View>





            </SafeAreaView>
        </View>
    );
};

export default Keypad;
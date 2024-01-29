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

const Profile = () => {
    const navigation = useNavigation();



    const handleNext = () => {
        navigation.navigate("SetPin");
    };


    return (
        <View className="flex-1 bg-white ">
            <SafeAreaView className='flex-1'>
                <View className=" flex-1 flex-col justify-start  gap-1  w-[100%]  ">

                    
                    <View className=' flex-col  items-center  '>
                        <Text className='text-xl font-bold text-center w-[80%] text-black'>Profile</Text>
                        <Text className='text-sm text-center w-[100%] text-[#4D4D4D] mt-6 '>Your Profile has been set  successfully.</Text>
                    </View>
                    



                </View>

                <View className='flex-2 flex-col gap-4 px-8 py-8  '>
                    <TouchableOpacity className='bg-[#000A4A] justify-center  py-3 rounded-md' onPress={handleNext}>
                        <Text className='text-white text-base text-center '>Proceed</Text>
                    </TouchableOpacity>



                </View>
            </SafeAreaView>
        </View>
    );
};

export default Profile;
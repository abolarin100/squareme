import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    useWindowDimensions,
    ImageBackground
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const Login = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    const [loaded] = useFonts({
        Dmsans: require('../assets/fonts/DMSans.ttf'),
    });

    useEffect(() => {
        if (!loaded) {
            // Font not yet loaded
        }
    }, [loaded]);

    const handleNext = () => {
        navigation.navigate("SignUp");
    };
    const handleSkip = () => {
        navigation.navigate("Dashboard");
    };

   

    return (



        <View className="flex-1 bg-[#000A4A] ">
            
                <SafeAreaView className='flex-1'>
                    <View className=" flex-1 flex-row justify-center items-center pt-4  w-[100%] gap-1 ">
                        <Text className='text-5xl text-white font-semibold'>squareme</Text>
                       <View className='flex-row'>
                       <Image
                            source={require("../assets/images/log.png")}
                            className="relative top-1  "
                        />
                        <Text className='text-[8px] text-white'>TM</Text>
                       </View>
                    </View>

                   


                    <View className='flex-2 flex-col gap-4 px-8 py-8  '>
                        <TouchableOpacity className='bg-white justify-center  py-3 rounded-md' onPress={handleNext}>
                            <Text className='text-[#000A4A] text-base text-center '>Create an account</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='border border-white justify-center  py-3 rounded-md' onPress={handleSkip} >
                            <Text className='text-white text-base text-center '>I have an account</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            



        </View>

    );
};

export default Login;
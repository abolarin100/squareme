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

const Onboarding = () => {
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
        navigation.navigate("Login");
    };



    return (



        <View className="flex-1 ">
            <ImageBackground
                source={require('../assets/images/onboard3.png')}
                className='object-cover flex-1  '
            >

                <View className=' absolute flex-1'>
                    <Image
                        source={require("../assets/images/transparent.png")}
                        className="absolute w-[100vw] h-[100vh]  "
                    />
                </View>
                <SafeAreaView className='flex-1'>
                    <View className=" flex-row pt-4 pl-8">
                        <Text className='text-4xl text-white font-semibold'>squareme</Text>
                        <View className='flex-row'>
                            <Image
                                source={require("../assets/images/log.png")}
                                className="relative top-2.5 right-0.5 scale-75 "
                            />
                            <Text className='text-[5px] text-white relative top-3 right-2'>TM</Text>
                        </View>
                    </View>

                    <View className=' flex-1 flex-col px-8 my-24 justify-end gap-4 '>
                        <View>
                            <Image
                                source={require("../assets/images/grp3.png")}
                                className=""
                            />
                        </View>

                        <View className=''>
                            <Text className=' text-3xl text-white font-semibold font-Dms'>Spend your money easily
                                without any complications</Text>
                        </View>

                    </View>


                    <View className='flex-2  px-8 py-8  '>
                        <TouchableOpacity className='bg-white justify-center  py-3 rounded-md' onPress={handleNext}>
                            <Text className='text-[#000A4A] text-base text-center '>Get Started</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </ImageBackground>



        </View>

    );
};

export default Onboarding;
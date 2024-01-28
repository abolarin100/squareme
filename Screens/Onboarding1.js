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
        navigation.navigate("Onboarding3");
    };

    const handleSkip = () => {
        navigation.navigate("Onboarding3");
    };

    return (



        <View className="flex-1 ">
            <ImageBackground
                source={require('../assets/images/onboard2.png')}
                className='object-cover flex-1  '
            >

                <View className=' absolute flex-1'>
                    <Image
                        source={require("../assets/images/transparent.png")}
                        className="absolute w-[100vw] h-[100vh] "
                    />
                </View>
                <SafeAreaView className='flex-1'>
                    <View className=" flex-row pt-4 pl-8">
                        <Text className='text-4xl font-semibold  text-[#000A4A]'>squareme</Text>
                        <View className='flex-row'>
                            <Image
                                source={require("../assets/images/log.png")}
                                className="relative top-2.5 right-0.5 scale-75 "
                            />
                            <Text className='text-[5px] relative top-3 right-2 text-[#000A4A]'>TM</Text>
                        </View>
                    </View>

                    <View className=' flex-1 flex-col px-8 my-16 justify-end gap-4  '>
                        <View>
                            <Image
                                source={require("../assets/images/grp2.png")}
                                className=""
                            />
                        </View>

                        <View className=''>
                            <Text className=' text-3xl text-white font-semibold font-Dms'>A super secure way to pay your bills.</Text>
                        </View>
                        <View>
                            <Text className='text-sm text-white '>Pay your bills with the cheapest rates in town.</Text>
                        </View>
                    </View>


                    <View className='flex-2 flex-row justify-between px-8 py-8  '>
                        <TouchableOpacity onPress={handleSkip}>
                            <Text className='text-white text-base'>Skip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='bg-white px-6 py-2 rounded-md' onPress={handleNext}>
                            <Text className='text-black text-base'>Next</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>



        </View>

    );
};

export default Onboarding;
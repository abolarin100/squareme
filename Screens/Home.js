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
import { LinearGradient } from 'expo-linear-gradient';


const Home = () => {
    const navigation = useNavigation();



    const handleNext = () => {
        navigation.navigate("SetPin");
    };


    return (
        <View className="flex-1 bg-[#00c6fb1a] ">
            <SafeAreaView className='flex-1 flex-col '>
                <LinearGradient colors={['rgba(0, 198, 251, 0.01)', 'rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)','rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)']} className='flex-1 flex-col '>
                    <View className='flex-row justify-between px-8 py-4  '>
                        <View className='flex-row gap-4 '>
                            <View><Image
                                source={require("../assets/images/person.png")}
                                className=" scale-150 mt-1 "
                            /></View>
                            <View className=' space-y-2'>
                                <Text className='text-[#828282]'>Hello,</Text>
                                <Text className='text-black'>David Oloye</Text>
                            </View>
                        </View>

                        <View className='flex-row gap-2'>
                            <TouchableOpacity>
                                <Image
                                    source={require("../assets/images/barcode.png")}
                                    className="  "
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image
                                    source={require("../assets/images/Notification.png")}
                                    className="  "
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className=' flex-col items-center gap-6 my-2'>
                        <View>
                            <Text className='text-[#000A4A]'>Wallet balance</Text>
                        </View>
                        <View>
                            <Image
                                source={require("../assets/images/blur.png")}
                                className=" mt-2  "
                            />
                        </View>

                        <View className='flex-row justify-between px-8 py-8 w-[90%] '>
                            <TouchableOpacity

                                className='w-[45%] border bg-[#000A4A] rounded-lg px-4 py-3 flex justify-center items-center '


                            >

                                <Text className='text-white text-base'>Fund</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className='bg-[#E1E1E1] w-[45%]   py-3  rounded-lg px-8 flex justify-center items-center'
                                onPress={handleNext}


                            >
                                <Text className='text-[#747474] text-base '  >Withdraw</Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                    <View className='flex-col  px-4 gap-6 '>
                        <View>
                            <Text className='text-[#656565] text-lg font-semibold    px-2'>Quick Access</Text>
                        </View>

                        <View className='flex-row gap-2 items-center justify-start '>
                            <View className='flex-col gap-3 items-center' >
                                <TouchableOpacity className='rounded-full bg-[#F6EFFB] p-3'><Ionicons name="phone-portrait" size={20} color={"#9F56D4"} /></TouchableOpacity>
                                <Text className='font-semibold text[#3E3E3E]'>Pay Bills</Text>
                            </View>
                            <View className='flex-col gap-3 items-center' >
                                <TouchableOpacity className='rounded-full bg-[#F6EFFB] p-3'><Ionicons name="gift-outline" size={20} color={"#9F56D4"} /></TouchableOpacity>
                                <Text className='font-semibold text[#3E3E3E]'>Giftcards</Text>
                            </View>
                            <View className='flex-col gap-3 items-center' >
                                <TouchableOpacity className='rounded-full bg-[#F6EFFB] p-3'><Ionicons name="card-outline" size={20} color={"#9F56D4"} /></TouchableOpacity>
                                <Text className='font-semibold text[#3E3E3E]'>Cards</Text>
                            </View>

                        </View>
                    </View>
                    <View className='flex-col px-4 gap-6  mt-0 pb-1'>
                        <View>
                            <Text className='text-[#656565] text-lg font-semibold    px-2'>Recent Transactions</Text>
                        </View>

                        <View className='flex-col gap-2 items-center justify-start '>
                            <View className='flex-col gap-3 items-center' >

                                <Image
                                    source={require("../assets/images/note.png")}
                                    className=" mt-2  "
                                />

                            </View>
                            <View className='flex-col gap-3 items-center' >
                                <Text className='text-[#656565] text-lg font-semibold    px-2'> No recent transaction</Text>
                            </View>
                            <View className='flex-col w-[75%] items-center py-4' >

                                <Text className=' text[#9A9A9A] text-center '>You have not performed any transaction, you can start sending and requesting money from your contacts.</Text>
                            </View>

                        </View>
                    </View>
                </LinearGradient>


            </SafeAreaView>
        </View>
    );
};

export default Home;
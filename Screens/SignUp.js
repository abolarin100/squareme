import React, { useState, useEffect } from "react";
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
    TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
// import CountryPicker from 'react-native-country-picker-modal'




const SignUp = () => {

    const [countryCode, setCountryCode] = useState('NG')
    const [callingCode, setCallingCode] = useState('+234')

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
        navigation.navigate("VerifyPhone");
    };

    const handleSkip = () => {
        navigation.navigate("PhoneSuccess");
      };

    



    return (



        <TouchableWithoutFeedback className="flex-1 bg-white " onPress={() => {
            Keyboard.dismiss();
        }}>

            <SafeAreaView className='flex-1 bg-white'>
                <View className=" flex-1 flex-col justify-start items-center  py-8  w-[100%]  ">
                    <Text className='text-base text-center w-[60%] text-[#4F4F4F]'>We’ll send an SMS with a code to
                        verify your phone number</Text>
                    <View className='flex-col w-[80%] mt-12 '>
                        <View className='flex-row justify-between gap-4'>
                            <TouchableOpacity className='border border-[#4F4F4F] px-2 py-3 justify-center items-center rounded-md flex-row w-[30%]'>

                                {/* <CountryPicker
                                
                                countryCode = {countryCode}
                                withFilter
                                withFlag
                                withCurrencyNameButton = {false}
                                withAlphaFilter={false}
                                withCallingCode
                                onSelect ={country => {
                                    console.log('country', country);
                                    const {cca2, callingCode} = country;
                                    setCountryCode(cca2)
                                    setCallingCode(callingCode[0])
                                }}
                                className=' items-center'
                            
                        />  */}

                                <Image
                                    source={require("../assets/images/flag.png")}
                                    className=" object-contain   "
                                />
                                <View className='flex-row justify-center items-center  ' >
                                    <Text className='px-2 text-[#4F4F4F]'>{callingCode}</Text>
                                    <Text className='px-1 text-[#4F4F4F] text-2xl relative bottom-3'>̬</Text>

                                </View>
                            </TouchableOpacity>
                            <TextInput
                                placeholder="Phone Number"
                                keyboardType='phone-pad'
                                className='border border-[#4F4F4F] py-3 pl-4 pr-16 rounded-md w-[60%]'

                            // placeholderTextColor={}
                            />
                        </View>
                        <TouchableOpacity className='border border-[#4F4F4F] my-8 py-3 pl-4 px-4 rounded-md flex-row justify-between items-center' >
                            <Text className='text-[#9F56D4] '>Have a referral ID?</Text>
                            <Ionicons name="gift-outline" size={24} color="#9F56D4" />

                        </TouchableOpacity>



                    </View>
                </View>




                <View className='flex-2 flex-col gap-4 px-8 py-8  '>
                    <TouchableOpacity className='bg-[#000A4A] justify-center  py-3 rounded-md' onPress={handleNext}>
                        <Text className='text-white text-base text-center '>Proceed</Text>
                    </TouchableOpacity>
                    <View className='flex-row justify-center gap-2 '>
                        <Text className='text-[#4F4F4F] text-sm'>Already have an account?</Text>
                        <TouchableOpacity className=' ' onPress={handleSkip}>
                            <Text className='text-[#9F56D4] text-sm text-center '>Login here</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>




        </TouchableWithoutFeedback>

    );
};

export default SignUp;
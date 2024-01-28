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
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const SetPin = () => {
    const inputRefs = useRef(Array.from({ length: 3 }, () => React.createRef()));
    const [pins, setPins] = useState(Array(6).fill(''));
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(true);
    const [resend, setResend] = useState(false);
    const [timerIsActive, setTimerIsActive] = useState(true);

    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();

    const [loaded] = useFonts({
        Dmsans: require('../assets/fonts/DMSans.ttf'),
    });

    useEffect(() => {
        let interval;

        if (isActive && seconds > 0 && !resend) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (resend) {
            setSeconds(60);
            setIsActive(true);
            setResend(false);
            setTimerIsActive(true);
        } else if (seconds === 0) {
            setTimerIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds, resend]);

    const handleNext = () => {
        navigation.navigate("ConfirmPin");
    };

    

    const handleInputChange = (text, index) => {
        if (text.length === 1) {
            const newPins = [...pins];
            newPins[index] = text;
            setPins(newPins);

            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].current.focus();
            } else if (newPins.every(pin => pin !== '')) {
                // Check if all six digits have been entered
                handleNext();
            }
        }
    };

    const handleBackspace = () => {
        const newPins = [...pins];
        const lastFilledIndex = newPins.lastIndexOf('');

        if (lastFilledIndex !== -1) {
            newPins[lastFilledIndex - 1] = '';
            setPins(newPins);
            inputRefs.current[lastFilledIndex - 1].current.focus();
        }
    };

    const handleResend = () => {
        setResend(true);
        setTimerIsActive(true);
    };

    const renderDigitButton = (digit) => (
        <TouchableOpacity key={digit} onPress={handleNext}>
            <Text style={{ fontSize: 24, color: '#000A4A' }}>{digit}</Text>
        </TouchableOpacity>
    );


    return (
        <TouchableWithoutFeedback className="flex-1 bg-white " onPress={() => {
            Keyboard.dismiss();
        }}>
            <SafeAreaView className='flex-1 bg-white items-center '>
                <View className=" flex-1 flex-col justify-start items-center  py-8  w-[100%]  ">
                    <Text className='text-sm text-center w-[64%] text-[#4F4F4F]'>Set a six digit PIN that you would use for
                        all transactions</Text>
                    <View className='flex-col  w-[80%] my-8  items-center'>
                        <View className='flex-row justify-center items-center gap-1' >
                            {inputRefs.current.map((ref, index) => (
                                <View
                                    key={index}
                                    ref={ref}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    style={{ width: '12%', height: 50, borderRadius: 8, backgroundColor: '#F2F8FF', paddingHorizontal: 16 }}
                                    onChangeText={(text) => handleInputChange(text, index)}
                                />
                            ))}
                            <Text className='text-[#8F9BB3] text-xl'>-</Text>

                            {inputRefs.current.map((ref, index) => (
                                <TextInput
                                    key={index}
                                    ref={ref}
                                    keyboardType=""
                                    maxLength={1}
                                    style={{ width: '12%', height: 50, borderRadius: 8, backgroundColor: '#F2F8FF', paddingHorizontal: 16 }}
                                    onChangeText={(text) => handleInputChange(text, index)}
                                />
                            ))}

                        </View>


                    </View>
                </View>

                <View className='flex-col gap-16 w-[75%] justify-center relative bottom-28  '>
                <View className='flex-row justify-between'>
                {[1, 2, 3].map(digit => renderDigitButton(digit))}

                        </View>
                        <View className='flex-row justify-between'>
                        {[4, 5, 6].map(digit => renderDigitButton(digit))}

                        </View>
                        <View className='flex-row justify-between'>
                        {[7, 8, 9].map(digit => renderDigitButton(digit))}

                        </View>
                        <View className='flex-row justify-between items-center'>
                            <TouchableOpacity onPress={() => handleInputChange('0', pins.indexOf(''))} className='items-center'>
                                <Text  className='text-xl text-[#BDBDBD]'>ͦͦ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text  className='text-xl text-[#000A4A]'>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleNext}>
                                <Ionicons name="chevron-back" size={15} color="#BDBDBD"   />
                            </TouchableOpacity>

                        </View>

                    </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default SetPin;
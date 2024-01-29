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
  Keyboard
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const VerifyPhone = () => {
    const inputRefs = useRef(Array.from({ length: 5 }, () => React.createRef()));


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
      // Reset the timer when resend is true
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
    navigation.navigate("PhoneSuccess");
  };

  const handleSkip = () => {
    navigation.navigate("Onboarding3");
  };

  

  const handleInputChange = (text, index) => {
    if (text.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].current.focus();
      } else {
        // Check if all five digits have been entered
        if (inputRefs.current.every(ref => ref.current && ref.current.value && ref.current.value.length === 1)) {
          handleNext();
        }
      }
    }
  };

  

  const handleResend = () => {
    setResend(true);
    setTimerIsActive(true);
  };


  return (
    <TouchableWithoutFeedback className="flex-1 bg-white " onPress={() => {
        Keyboard.dismiss();
    }} >
      <SafeAreaView className='flex-1 bg-white'>
        <View className=" flex-1 flex-col justify-start items-center  py-8  w-[100%]  ">
          <Text className='text-base text-center w-[80%] text-[#4F4F4F]'>Please input the five digit code that was sent
            to your phone number below</Text>
          <View className='flex-col  w-[80%] my-8  items-center'>
            <View className='flex-row justify-center items-center gap-2' >
            {inputRefs.current.map((ref, index) => (
                <TextInput
                  key={index}
                  ref={ref}
                  keyboardType="numeric"
                  maxLength={1}
                  style={{  width: '12%', height: 50, borderRadius: 8, backgroundColor: '#F2F8FF', paddingHorizontal: 16 }}
                  onChangeText={(text) => handleInputChange(text, index)}
                />
              ))}

            </View>

            <View className='py-8'>
              <Text className='flex-row justify-center items-center text-[#9F56D4]'> {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}</Text>
            </View>
          </View>

          <View className='flex-row justify-center gap-1 w-[80%]'>
            <Text className=' text-center  text-[#4F4F4F]'>
              Having trouble receiving SMS?
            </Text>
            <TouchableOpacity onPress={handleNext}>
              <Text className='text-[#9F56D4]'>Resend</Text>
            </TouchableOpacity>
          </View>
          <Text className='text-[#4F4F4F] py-1'>Or try other options below</Text>

        </View>

        <View className='flex-row justify-between px-8 py-8 w-[100%] '>
        <TouchableOpacity
            onPress={handleSkip}
            className='w-[45%] border border-[#000A4A] rounded-lg px-6 flex justify-center items-center '
            disabled={timerIsActive}
            style={{ opacity: !timerIsActive ? 1 : 0.5 }}
          >

            <Text className='text-[#000A4A] text-base'>Call me</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className='bg-[#000A4A] w-[45%]   py-2  rounded-lg px-8 flex justify-center items-center'
            onPress={handleNext}
            disabled={timerIsActive}
            style={{ opacity: !timerIsActive ? 1 : 0.5 }}
          >
            <Text className='text-white text-base '  >Whatsapp</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default VerifyPhone;
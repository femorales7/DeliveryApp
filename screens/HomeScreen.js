import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
// import { ScrollView } from "react-native-web";
import Categories from "./Components/categories";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white  pt-8">
      <Text>
        {/* header */}
        <View className="flex flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon className="space-x-4" size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 ">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput
              placeholder="Resturants and cusines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon className="space-x-4"  color="#00CCBB" />
        </View>

      {/* Body */}

      <ScrollView className ="bg-gray-100" >
        {/* Categories */}
        <Categories />

        {/* Fetarure Rows */}


      </ScrollView>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

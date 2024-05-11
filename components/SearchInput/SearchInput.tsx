

import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { FormEvent } from '@/nativewind-env'
import { icons } from "../../constants"

const SearchInput = ({
    title, value, otherStyle, keyboardType, handleChangeText, placeholder
}: {
    title: string, value: string, otherStyle: string, keyboardType?: string, handleChangeText: (text: string) => void,
    placeholder: string
}): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='border-2 border-black-200 w-full h-16 px-4 rounded-2xl focus:border-secondary items-center flex-row '>
            <TextInput className='text-base mt-0.5 text-white flex-1 font-pregular'
                placeholder="Search for a video topic"
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
                secureTextEntry={title === "Password" && !showPassword}
            />
            <TouchableOpacity>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>

        </View>
    )
}

export default SearchInput
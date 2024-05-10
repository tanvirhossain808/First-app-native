import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants"
import FormFlied from '@/components/FormFeild/FormFlied'
import CustomButton from '@/components/CustomButton/CustomButton'
import { Link } from 'expo-router'
// import { FormEvent } from '@/nativewind-env'

export default function SignIn(): JSX.Element {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = (): void => { }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>

                <View className='w-full justify-center h-full px-4 my-6'>
                    <Image source={images.logo}
                        resizeMode='contain' className='w-[150px] h-[35px]'
                    />
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Aora</Text>
                    <FormFlied
                        title="Email"
                        value={form.email}
                        handleChangeText={
                            (e: string) => setForm({
                                ...form, email: e
                            })

                        }
                        placeholder='Type your email'
                        otherStyle="mt-7"
                        keyboardType="email-address"

                    />
                    <FormFlied
                        title="Password"
                        value={form.password}
                        handleChangeText={
                            (e: string) => setForm({
                                ...form, password: e
                            })

                        }
                        placeholder='Type your password'
                        otherStyle="mt-7"
                        keyboardType="email-address"

                    />

                </View>
                <View className='justify-center pt-5 flex-row gap-2'>
                    <Text className='text-lg text-gray-100 font-pregular'>
                        Don't have an account?
                    </Text>
                    <Link href="signUp" className='text-lg font-psemibold text-secondary'>Sign Up</Link>

                </View>
                <CustomButton title='Sign in' handlePress={submit}
                    containerStyle='mt-7'
                    isLoading={isSubmitting}

                />

            </ScrollView>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
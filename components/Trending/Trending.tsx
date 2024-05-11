import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const Trending = ({ posts }) => {
    return (
        <FlatList data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (

                <Text className='text-3xl text-white'>{item.id}</Text>
            )}
            horizontal

        >




        </FlatList>
    )
}

export default Trending
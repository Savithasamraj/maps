import { StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Moviescreen = () => {
const [ moviesData,setMoviesData]=useState()




const fetchMovie = async () => {
    try {
        const response = await axios.get("https://dummyapi.online/api/movies")
        console.log("response",response)
        const data = await response.data
        console.log(data)
        setMoviesData(data)
        
    } catch (error) {
        console.log(error)
    }

}

const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.movie}</Text>
      <Text style={styles.rating}>Rating: {item.rating}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(item.imdb_url)}>
        <Text style={styles.link}>View on IMDb</Text>
      </TouchableOpacity>
    </View>
  );

    useEffect(()=>{
fetchMovie()
    },[])
  return (
    <View>
     <Text style={{textAlign:"center",fontWeight:"bold"}}>Movies List</Text>
      <FlatList
      data={moviesData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
    </View>
  )
}

export default Moviescreen

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 10,
      },
      card: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
      image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
      },
      title: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
      rating: {
        marginTop: 5,
        fontSize: 14,
      },
      link: {
        marginTop: 5,
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
      }


})
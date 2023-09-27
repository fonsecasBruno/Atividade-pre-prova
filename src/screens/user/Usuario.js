import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, IconButton } from 'react-native-paper'
import Api from '../../services/Api'

export default function Usuario(props) {

    const [usuario, setUsuarios] = useState([])
    const usuarioId = props.route.params.id

    console.log(props)

    useEffect(() => {
        
        Api.get('/users/' + usuarioId)
        .then(response => {

            setUsuarios(response.data)

        })

        .catch(error => {
            console.error('DEU ERRO AO BUSCAR USUARIOS', error)
        })

    }, []) 

  return (
    <View>
      <Card onPress={() => {
        navigation.navigate('Post', usuario)
      }}>

      <Card.title
        title={usuario?.username}
        subtitle={usuario?.email}
        left={() => <Avatar.Image size={48} source={{uri: item.image}}/>}
        right={()=> <IconButton icon='chevron-right'/>}
      />

      </Card>
        <Card.Cover source={{uri: usuario?.image}}/>

        <Card.Content>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text variant="titleLarge">Name:</Text>
              <Text variant="titleLarge">{usuario?.firstName} {usuario?.lastName}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text variant="titleLarge">Email:</Text>
              <Text variant="titleLarge">{usuario?.email}/</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text variant="titleLarge">Phone:</Text>
              <Text variant="titleLarge">{usuario?.phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text variant="titleLarge">Age:</Text>
              <Text variant="titleLarge">{usuario?.age}</Text>
            </View>
          </Card.Content>

    </View>
  )
}

const styles = StyleSheet.create({})
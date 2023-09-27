import { StyleSheet, View, FlatList } from 'react-native'
import React, { useEffect, useState} from 'react'
import { Avatar, Card, Divider, Text} from 'react-native-paper'

import Api from '../../services/Api'

export default function Post(props) {

  const usuario = props.route.params
  const [posts, setPosts] = useState([])

  useEffect(() => {
    Api.get('/users/' + usuario.id + '/posts')
      .then(response => {
        setPosts(response.data.posts)
      })
      .catch(error => {
        console.error("DEU ERRO AO BUSCAR USUARIOS", error)
      })
  }, [])

  return (
    <View>
      <Card>
        <Card.Title
          title={usuario?.username}
          subtitle={usuario?.email}
          left={() => <Avatar.Image size={48} source={{ uri: usuario?.image }} />}
        />
          <Card.Content>

          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text>{item.body}</Text>
                <Divider />
              </View>
            )
          }}
          />

        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})

import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Button from '../../../components/Button'
import Colors from '../../../assets/Colors'
import { FormSubmitType } from '../LoginEnums';
import { bold } from 'ansi-colors';

class SelectAccessForm extends PureComponent {

  constructor(props) {
    super(props)
  }
  
  render() {
    const { onPressAccessMethod} = this.props

    return (
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ flex: 1 }}
            text={"Entrar com o E-mail"}
            onPress={() => onPressAccessMethod(FormSubmitType.SIGNIN)}
            textColor={Colors.main_blue}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginBottom: 15,
            marginTop: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              height: 2,
              backgroundColor: Colors.simple_gray
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              marginRight: 15,
              color: Colors.main_blue
            }}
          >
            OU
          </Text>
          <View
            style={{
              flex: 1,
              height: 2,
              backgroundColor: Colors.simple_gray
            }}
          />
        </View>

      

        <View
          style={{
            marginTop: 25,
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: Colors.main_blue,
              marginRight: 10
            }}
          >
            Não tem conta ?
          </Text>
          <Button
            text={"Cadastre-se"}
            style={{ padding: 7 }}
            textStyle={{ fontSize: 13 }}
            onPress={() => onPressAccessMethod(FormSubmitType.SIGNUP)}
            textColor={Colors.main_blue}
          />
        </View>
      </View>
    );
  }
}


const styles = {
  mainContainer: {
    backgroundColor: Colors.white,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 50
  }
};


export default SelectAccessForm
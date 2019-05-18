import React from 'react'
import {
  Text, TouchableOpacity
} from 'react-native'
import Colors from '../assets/Colors'

const Button = ({ style, text, bgColor, textColor, onPress, textStyle }) => {
  const textUpper = text.toUpperCase()
  return (
    <TouchableOpacity 
      style={[styles.buttonStyle, style, getBgColor(bgColor)]}
      onPress={onPress}
    >
      <Text style={[getTextColor(textColor), textStyle]}>{ textUpper }</Text>
    </TouchableOpacity>
  )
}

const getBgColor = (bgColor) => {
  const correctBgColor = bgColor ? bgColor : 'white'
  return { backgroundColor: correctBgColor}
}

const getTextColor = (textColor) => {
  const correctTextColor = textColor ? textColor : Colors.grey
  return { color: correctTextColor }
}

const styles = {
  buttonStyle: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'center',
    elevation: 5,
  },
}

export default Button

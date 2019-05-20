'use strict'
import React, { PureComponent } from 'react'
import { ActivityIndicator, StyleSheet, FlatList, View } from "react-native";
import { connect } from "react-redux";
import TodoListItem from './components/TodoListItem'
import * as HomeActions from "./HomeActions";
import Colors from '../../assets/Colors'

class HomeScreen extends PureComponent {

  componentWillReceiveProps(newProps) {

  }
  
  _renderItem(item) {
    return (
      <TodoListItem
        itemId={item.id}
        isChecked={item.isChecked}
        itemName={item.title}
      />
    );
  }

  componentWillMount() {
    this.props.loadToDoList();
  }

  render() {
    const { toDoList, isFetchingToDoList } = this.props;
    return (
      <View style={styles.container}>
        {isFetchingToDoList ? (
          <ActivityIndicator size="large" color={Colors.main_blue} style={{marginTop: 30}}/>
        ) : null}
        <FlatList
          data={toDoList}
          renderItem={({ item }) => this._renderItem(item)}
        />
      </View>
    );
  }
}


const styles = {
  container: {
 
  },
};


const mapStateToProps = state => ({
  toDoList: state.home.toDoList,
  isFetchingToDoList: state.home.isFetchingToDoList
});

const mapDispatchToProps = {
  loadToDoList: HomeActions.loadToDoList
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
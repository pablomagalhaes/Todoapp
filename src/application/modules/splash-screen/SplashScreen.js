import React, { PureComponent } from "react"
import { View, Image } from "react-native"
import { connect } from "react-redux"
import Colors from "../../assets/Colors"
import { mainLogo } from "../../assets/Images"
import * as SplashScreenActions from "./SplashScreenActions";

// import { LOGIN_SCREEN, SELECT_CONSTRUCTION_SITE_SCREEN } from "../../config/routes"

class SplashScreen extends PureComponent {

  componentWillReceiveProps(newProps) {
    const userIsLogged = newProps.userIsLogged
      setTimeout(() => {
        console.log("userIsLogged", userIsLogged);
        if (userIsLogged) {
          this.props.navigation.replace("HomeScreen");
        } else {
          this.props.navigation.replace("LoginScreen");
        }
      }, 1500);
  }

  componentWillMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={mainLogo} style={styles.image} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userIsLogged: state.splashScreen.userIsLogged
});

const mapDispatchToProps = {
  getCurrentUser: SplashScreenActions.getCurrentUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.main_blue,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
}

import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import {
  signinButton,
  buttonText,
  body,
  buttonswrapper,
  formwrapper,
  h1,
} from "./Authstyles";
import { createUser } from '../../actions';


class SignUp extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      error: null
    };
  }
  componentWillReceiveProps(props) {
    this.setState({
      error: props.error,
    });
  }
  handleInput = (text, type) => {
    this.setState({
      [type]: text
    });
  };
  signup = async () => {
    await this.props.createUser(this.state, this.props.navigation);
    await this.setState({
      password: '',
      confirmPassword: '',
      error: this.props.error,
    });
  };
  render() {
    return (
      <View style={body}>
        <Text style={h1}>Sign Up</Text>
        <View style={formwrapper}>
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Username
          </FormLabel>
          <FormInput
            value={this.state.username}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "username")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Password
          </FormLabel>
          <FormInput
            value={this.state.password}
            textInputRef="password"
            secureTextEntry={true}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "password")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Confirm Password
          </FormLabel>
          <FormInput
            value={this.state.confirmPassword}
            textInputRef="password"
            secureTextEntry={true}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "confirmPassword")}
          />
          <FormLabel labelStyle={{ color: "white", fontSize: 18 }}>
            Email
          </FormLabel>
          <FormInput
            value={this.state.email}
            inputStyle={{ color: "white", fontSize: 18 }}
            onChangeText={text => this.handleInput(text, "email")}
          />
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <TouchableOpacity style={signinButton} onPress={() => this.signup()}>
            <Text style={buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, { createUser })(SignUp);


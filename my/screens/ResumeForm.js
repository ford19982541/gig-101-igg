import React from 'react'
import ValidationComponent from 'react-native-form-validator'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

export default class ResumeForm extends ValidationComponent {
    state = {
        name: '',
        nickname: '',
        age: '',
        skill: '',
    }

    _onSubmit = () => {
        this.validate({
            name: { require: true },
            nickname: { require: true },
            age: { require: true, number: true },
            Skill: { require: true }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewInput}>
                    <Text>Full Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                    ></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>Nick Name</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ nickname: text })}
                        value={this.state.nickname}
                    ></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>Age</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({ age: text })}
                        value={this.state.age}
                    ></TextInput>
                </View>
                <View style={styles.viewInput}>
                    <Text>Skills</Text>
                    <TextInput
                        style={styles.textAreaInput}
                        onChangeText={(text) => this.setState({ skill: text })}
                        value={this.state.skill}
                        multiline={true}
                    ></TextInput>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button title='Create Resume' ></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: 'white',
        minHeight: '100%'
    },
    viewInput: {
        marginTop: 20
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    textAreaInput: {
        height: 80,
        borderColor: 'gray',
        borderWidth: 1
    }
})
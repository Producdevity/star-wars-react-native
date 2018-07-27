import React, { Component } from 'react'

// React Native
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'

// Redux
import { connect }               from 'react-redux'
import { getFilterenItemsState } from '../../store/helpers/selectors'

// Data
import { FIELDS } from '../../common/data/fields'

class ItemsOverviewScreen extends Component {

  renderListItem = ({item}) => {
    return (
        <View style={styles.item} onPress={this.onPressListItem}>
          <Text style={styles.item}>Name: {item.name}</Text>
        </View>
    )
  }

  render() {
    const {query, selectedCategory, items, navigation, hanldeInput} = this.props

    return (
        <View style={styles.container}>

          <Text style={styles.title}>Category: {selectedCategory}</Text>

          <TextInput
              style={styles.searchTextInput}
              onChangeText={(text) => hanldeInput(FIELDS.query, text)}
              value={query}
              placeholder='Search...'
          />

          <FlatList
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderListItem}
          />

          <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.goBackButton}>
            <Text style={styles.goBackButtonText}>Go back</Text>
          </TouchableOpacity>

        </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  title: {
    fontSize:     18,
    textAlign:    'center',
    marginBottom: 5
  },

  item: {
    padding:  10,
    fontSize: 18,
    height:   44
  },

  goBackButton: {
    marginTop:       20,
    padding:         20,
    backgroundColor: 'green'
  },

  goBackButtonText: {
    fontSize:  20,
    color:     'white',
    textAlign: 'center'
  },

  searchTextInput: {
    height:      40,
    borderColor: 'gray',
    borderWidth: 1
  }

})


function mapStateToProps(state) {
  return {
    categories:       state.core.categories,
    selectedCategory: state.core.inputs[FIELDS.selectedCategory],
    query:            state.core.inputs[FIELDS.query],
    items:            getFilterenItemsState(state)
  }
}


export default connect(mapStateToProps)(ItemsOverviewScreen)

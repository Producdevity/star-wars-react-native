import React, { Component } from 'react'

// React Native
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

// Redux
import { connect } from 'react-redux'

// Data
import { FIELDS } from '../../common/data/fields'

class ItemsOverviewScreen extends Component {

  renderListItem = ({item}) => {
    return (
        <View style={styles.item} onPress={this.onPressListItem}>
          <Text style={styles.item}>Naam: {item.name}</Text>
        </View>
    )
  }

  render() {
    const {selectedCategory, navigation} = this.props

    return (
        <View style={styles.container}>

          <Text style={styles.title}>Category: {selectedCategory}</Text>

          <FlatList
              data={Object.values(MOCK.people.results)}
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
    fontSize:  18,
    textAlign: 'center'
  },

  item: {
    padding:  10,
    fontSize: 18,
    height:   44
  },

  goBackButton:     {
    marginTop:       20,
    padding:         20,
    backgroundColor: 'green'
  },
  goBackButtonText: {
    fontSize:  20,
    color:     'white',
    textAlign: 'center'
  }

})


function mapStateToProps(state) {
  return {
    categories:       state.core.categories,
    selectedCategory: state.core.inputs[FIELDS.selectedCategory]
  }
}


export default connect(mapStateToProps)(CategoryItemsOverviewScreen)

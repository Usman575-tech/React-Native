import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Flatcard from './component/Flatcard'
import ElevatedCard from './component/ElevatedCard'
import FancyCard from './component/FancyCard'
import Actioncard from './component/Actioncard'
import ContactList from './component/ContactList'

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <Flatcard/>
      <ElevatedCard />
      <FancyCard />
      <Actioncard />
      <ContactList/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App;

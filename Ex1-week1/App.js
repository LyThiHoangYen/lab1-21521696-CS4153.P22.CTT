import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>I'm a student</Text>
      </View>

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Image 
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D5635AQFmxSYgSvZXYg/profile-framedphoto-shrink_400_400/B56ZUYWwN1GUAg-/0/1739870373062?e=1742468400&v=beta&t=EiX5la7ifBQ99Bj2utKRjwMJdRdGc51gXlvXsyhZIAw' }} 
          style={styles.image} 
        />
        <Text style={styles.text}> My name is Ly Thi Hoang Yen. I am a final-year student majoring in Information Systems at the University of Information Technology - VNU-HCM. 

        
          </Text>
          <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.text}><Text style={styles.bold}>Name:</Text> Lý Thị Hoàng Yến</Text>
        <Text style={styles.text}><Text style={styles.bold}>Age:</Text> 21 years</Text>
        <Text style={styles.text}><Text style={styles.bold}>Location:</Text> UIT, VNU-HCM</Text>
      </View>


      {/* Experiences */}
      <View style={styles.experienceSection}>
        <Text style={styles.sectionTitle}>Experiences</Text>
        <Text style={styles.text}><Text style={styles.bold}>Education:</Text> </Text>
        <Text style={styles.text}>UIT, VNU-HCM (2019-2024)</Text>
        <Text style={styles.text}><Text style={styles.bold}>Working Experiences:</Text></Text>
        <Text style={styles.text}>Facebook | Fresher Engineer (Sep 2021 - current)</Text>
        <Text style={styles.text}>Part-time - BA intern in Bosch.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    
  },
  experienceSection: {
    backgroundColor: '#EFE8D8', // Màu nền giống trong ảnh
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginBottom: 5,
    color: '#2980b9',
  },
  text: {
    fontSize: 16,
    color: '#2c3e50',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

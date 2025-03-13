import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Sentiment from 'sentiment'; // Import thư viện sentiment

export default function App() {
  /* 
  Khai báo biến trạng thái (useState)
  text: Lưu nội dung người dùng nhập vào.
  sentiment: Lưu trạng thái cảm xúc (positive hoặc negative).
  backgroundColor: Lưu màu nền của ứng dụng.
  */
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  
// Hàm analyzeSentiment() để phân tích cảm xúc
  const analyzeSentiment = () => {
    const sentimentAnalyzer = new Sentiment();
    const result = sentimentAnalyzer.analyze(text);

    if (result.score >= 1) {
      setSentiment('positive');
      setBackgroundColor('#6AC47E'); // Nền xanh
    } else {
      setSentiment('negative');
      setBackgroundColor('#C44D4D'); // Nền đỏ
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Sentiment Analysis</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a sentence..."
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={analyzeSentiment}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {sentiment && (
        <Image
          source={
            sentiment === 'positive'
              ? require('./assets/happy.png')
              : require('./assets/sad.png')
          }
          style={styles.emoji}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emoji: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
});


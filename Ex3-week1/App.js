import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

// 📌 Tạo danh sách từ cảm xúc tiếng Việt
const positiveWords = ["tuyệt vời", "hạnh phúc", "yêu thích", "vui", "tốt", "tích cực", "may mắn", "tuyệt"];
const negativeWords = ["tệ", "buồn", "chán", "xấu", "tiêu cực", "ghét", "đáng ghét", "bực mình"];

export default function App() {
  const [text, setText] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // 📌 Hàm phân tích cảm xúc câu nhập vào
  const analyzeSentimentVietnamese = () => {
    let positiveCount = 0;
    let negativeCount = 0;

    const words = text.toLowerCase().split(" "); // Tách câu thành từng từ

    words.forEach(word => {
      if (positiveWords.includes(word)) {
        positiveCount++;
      } else if (negativeWords.includes(word)) {
        negativeCount++;
      }
    });

    if (positiveCount > negativeCount) {
      setSentiment('positive');
      setBackgroundColor('#6AC47E'); // Nền xanh
    } else if (negativeCount > positiveCount) {
      setSentiment('negative');
      setBackgroundColor('#C44D4D'); // Nền đỏ
    } else {
      setSentiment('neutral');
      setBackgroundColor('#C44D4D'); // Nền xám
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Phân tích cảm xúc (Tiếng Việt)</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập một câu..."
        onChangeText={setText}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={analyzeSentimentVietnamese}>
        <Text style={styles.buttonText}>Kiểm tra</Text>
      </TouchableOpacity>
      {sentiment && (
        <Image
          source={
            sentiment === 'positive'
              ? require('./assets/happy.png') // Nếu tích cực, hiển thị ảnh mặt cười 😊
              
              : require('./assets/sad.png')   // Nếu tiêu cực, hiển thị ảnh mặt buồn 😞
            
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

import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from './src/components/Header';
import { getCurrentColorMode } from './src/theme/colors';
import NewIcon from './src/svg/NewIcon';
import MenuIcon from './src/svg/MenuIcon';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import AttachIcon from './src/svg/AttachIcon';
import SendIcon from './src/svg/SendIcon';
import Avatar from './src/svg/AvatarIcon';
import ModalIcon from './src/svg/ModalIcon';
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import SettingIcon from './src/svg/SettingIcon';

interface ChatItem {
  sender: 'user' | 'model';
  text: string;
}

export default function App() {
  const colors = getCurrentColorMode();

  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatItem[]>([]);
  const [isSendingQuery, setIsSendingQuery] = useState(false);
  const [apiKey, setApiKey] = useState(
    'AIzaSyBprJm3cMfSrHUSzmzUEiLD-OQWx1Mi8XM',
  );

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const scrollViewRef = useRef<ScrollView>(null);

  const sendQuery = async () => {
    if (inputText.trim() !== '' && !isSendingQuery) {
      setIsSendingQuery(true);

      // Append user's input to ScrollView immediately
      setChatHistory(prevHistory => [
        ...prevHistory,
        { sender: 'user', text: inputText },
      ]);

      try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: 'gemini-pro',
          safetySettings,
        });
        const result = await model.generateContent(inputText);
        const response = result.response;

        // Append AI's response to ScrollView
        setChatHistory(prevHistory => [
          ...prevHistory,
          { sender: 'model', text: response.text() },
        ]);

        if (scrollViewRef.current) {
          scrollViewRef.current.scrollToEnd({ animated: true });
        }
      } catch (error) {
        console.error('Error sending query:', error);
      }
      setInputText('');
      setIsSendingQuery(false);
    }
  };

  const clearChatHistory = () => {
    setChatHistory([]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={clearChatHistory}>
            <NewIcon width={30} height={30} color={colors.secondary} />
          </TouchableOpacity>
        }
        MiddleComponent={
          <Image
            source={require('./assets/Images/geminiLogo.png')}
            style={styles.geminiLogo}
            resizeMode="contain"
          />
        }
        rightComponent={
          <SettingIcon width={30} height={30} color={colors.secondary} />
        }
      />
      <ScrollView
        ref={scrollViewRef}
        style={[
          styles.scrollconatiner,
          { flex: 1 },
          { backgroundColor: colors.background },
        ]}
      >
        {chatHistory.map((message, index) => (
          <View style={styles.messageContainer} key={index}>
            {message.sender === 'user' && (
              <View
                style={[styles.avatarContainer, styles.userAvatarContainer]}
              >
                <Avatar width={32} height={32} color={colors.secondary} />
              </View>
            )}
            {message.sender === 'model' && (
              <View style={[styles.iconContainer, styles.modelIconContainer]}>
                <ModalIcon width={32} height={32} />
              </View>
            )}
            <View
              style={[
                styles.messageContent,
                message.sender === 'user'
                  ? styles.userMessageContainer
                  : styles.modelMessageContainer,
              ]}
            >
              <Text
                style={
                  message.sender === 'user'
                    ? [styles.userText, { color: colors.secondaryText }]
                    : [styles.modelText, { color: colors.secondaryText }]
                }
              >
                {message.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView
        style={[
          styles.keyboardAvoidingView,
          { borderTopWidth:1,borderTopColor: colors.borderColor },
        ]}
        behavior="padding"
      >
        <View
          style={[
            styles.Inputcontainer,
            { backgroundColor: colors.background },
          ]}
        >
          <AttachIcon
            width={30}
            height={30}
            color={colors.secondary}
            strokeWidth={1}
          />
          <TextInput
            style={[
              styles.textInput,
              { color: colors.secondaryText, },
            ]}
            multiline={true}
            placeholder='Ask AI "Write me a Story ........"'
            placeholderTextColor={colors.placeholderText} // Add this line
            value={inputText}
            editable={!isSendingQuery}
            onChangeText={setInputText}
          />
          {isSendingQuery ? (
            <ActivityIndicator size="large" color={colors.secondary} />
          ) : (
            <TouchableOpacity onPress={sendQuery}>
              <SendIcon
                width={30}
                height={30}
                color={colors.secondary}
                strokeWidth={1}
              />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollconatiner: {
    padding: 10,
  },
  ChatContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffffcf',
  },
  geminiLogo: {
    width: responsiveWidth(30),
    height: '70%',
    marginTop: -10,
  },
  keyboardAvoidingView: {
    borderTopWidth: 1,
  },
  Inputcontainer: {
    minHeight: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter',
    paddingVertical: 8,
    paddingHorizontal: 10,
    maxHeight: 100,
    height: '100%',
  },
  userText: {
    fontFamily: 'Inter',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  modelText: {
    fontFamily: 'Inter',
    fontSize: 16,
    alignSelf: 'flex-end',
  },
  userMessageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  modelMessageContainer: {
    borderRadius: 5,
    flex: 1,
    alignItems: 'flex-start',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor:'#86A78933'
  },
  avatarContainer: {},
  iconContainer: {},
  userAvatarContainer: {},
  modelIconContainer: {},
});

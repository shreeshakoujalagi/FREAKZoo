import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { colors, theme } from '../../theme/colors';
import { ChevronLeft, Send, Image as ImageIcon, Phone, Video, MoreVertical } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const MOCK_MESSAGES = [
    { id: '1', text: 'Hey there!', sender: 'them', time: '10:00 AM' },
    { id: '2', text: 'Hey! How are you doing?', sender: 'me', time: '10:05 AM' },
    { id: '3', text: 'Are we still meeting up later?', sender: 'them', time: '10:12 AM' },
];

export default function DirectMessageScreen() {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const { name } = route.params || { name: 'Friend' };

    const [messages, setMessages] = useState(MOCK_MESSAGES);
    const [inputText, setInputText] = useState('');

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <ChevronLeft color={colors.white} size={28} />
                </TouchableOpacity>
                <View style={styles.avatarContainer}>
                    <LinearGradient
                        colors={[colors.primaryGradientStart, colors.primaryGradientEnd]}
                        style={styles.avatarGradient}
                    >
                        <Text style={styles.avatarInitial}>{name ? name[0] : 'U'}</Text>
                    </LinearGradient>
                    <View style={styles.onlineDot} />
                </View>
                <Text style={styles.headerTitle}>{name}</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity style={styles.iconButton}>
                    <Phone color={colors.white} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Video color={colors.white} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <MoreVertical color={colors.white} size={20} />
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleSend = () => {
        if (!inputText.trim()) return;
        const newMessage = {
            id: Date.now().toString(),
            text: inputText,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, newMessage]);
        setInputText('');
    };

    const renderMessage = ({ item }: { item: typeof MOCK_MESSAGES[0] }) => {
        const isMe = item.sender === 'me';
        return (
            <View style={[styles.messageWrapper, isMe ? styles.messageWrapperRight : styles.messageWrapperLeft]}>
                <View style={[styles.messageBubble, isMe ? styles.messageBubbleRight : styles.messageBubbleLeft]}>
                    <Text style={styles.messageText}>{item.text}</Text>
                </View>
                <Text style={styles.messageTime}>{item.time}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <FlatList
                    data={messages}
                    keyExtractor={item => item.id}
                    renderItem={renderMessage}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.attachButton}>
                        <ImageIcon color={colors.textSecondary} size={24} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type a message..."
                        placeholderTextColor={colors.textSecondary}
                        value={inputText}
                        onChangeText={setInputText}
                        multiline
                    />
                    <TouchableOpacity
                        style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
                        onPress={handleSend}
                        disabled={!inputText.trim()}
                    >
                        <Send color={inputText.trim() ? colors.white : colors.textSecondary} size={20} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        padding: 4,
    },
    avatarContainer: {
        position: 'relative',
        marginHorizontal: 8,
    },
    avatarGradient: {
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInitial: {
        color: colors.white,
        fontSize: 16,
        fontFamily: theme.font.bold,
    },
    onlineDot: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.success,
        borderWidth: 2,
        borderColor: colors.background,
    },
    headerTitle: {
        fontSize: 18,
        fontFamily: theme.font.bold,
        color: colors.white,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        padding: 8,
        marginLeft: 4,
    },
    content: {
        flex: 1,
    },
    listContent: {
        padding: 16,
    },
    messageWrapper: {
        marginBottom: 16,
        maxWidth: '80%',
    },
    messageWrapperLeft: {
        alignSelf: 'flex-start',
    },
    messageWrapperRight: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
    },
    messageBubble: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
    },
    messageBubbleLeft: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderBottomLeftRadius: 4,
    },
    messageBubbleRight: {
        backgroundColor: colors.primaryGradientStart,
        borderBottomRightRadius: 4,
    },
    messageText: {
        color: colors.white,
        fontSize: 15,
        fontFamily: theme.font.regular,
    },
    messageTime: {
        fontSize: 11,
        color: colors.textSecondary,
        marginTop: 4,
        marginHorizontal: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)',
        backgroundColor: colors.surface,
    },
    attachButton: {
        padding: 8,
    },
    textInput: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: colors.white,
        fontSize: 15,
        fontFamily: theme.font.regular,
        maxHeight: 100,
        marginHorizontal: 8,
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primaryGradientStart,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
});

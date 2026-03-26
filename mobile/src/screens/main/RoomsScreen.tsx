import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MOCK_ROOMS } from '../../mock/data';
import RoomCard from '../../components/RoomCard';
import { colors, theme } from '../../theme/colors';
import { Plus } from 'lucide-react-native';

export default function RoomsScreen() {
    const navigation = useNavigation<any>();

    const handleRoomPress = (roomId: string) => {
        navigation.navigate('RoomChat', { roomId });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Live Rooms</Text>

            <FlatList
                data={MOCK_ROOMS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <RoomCard room={item} onPress={() => handleRoomPress(item.id)} />
                )}
                contentContainerStyle={styles.listContent}
            />

            <TouchableOpacity style={styles.fab}>
                <Plus color={colors.textPrimary} size={32} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50, // Status bar safe area approximation
    },
    headerTitle: {
        fontSize: 28,
        color: colors.textPrimary,
        fontFamily: theme.font.bold,
        marginLeft: theme.spacing.m,
        marginBottom: theme.spacing.l,
    },
    listContent: {
        paddingBottom: 100,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.accentPink,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: colors.accentPink,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
});

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    InterestPicker: undefined;
    Avatar: undefined;
    Main: undefined;
    RoomChat: { roomId: string };
    DirectMessage: { id: string; name: string };
};

export type MainTabParamList = {
    Home: undefined;
    Discover: undefined;
    Rooms: undefined;
    Messages: undefined;
    Profile: undefined;
};

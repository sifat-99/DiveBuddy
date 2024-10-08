import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const buddies = [
    { id: '1', name: 'Brian Edward', location: 'Palau, Oceania', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Richard Will', location: 'Palau, Oceania', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '3', name: 'Brian Edward', location: 'Palau, Oceania', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '4', name: 'Richard Will', location: 'Palau, Oceania', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
];

const HomePage = () => {
    const renderBuddy = ({ item }) => (
        <TouchableOpacity style={styles.buddyCard}>
            <Image source={{ uri: item.image }} style={styles.buddyImage} />
            <View style={styles.buddyInfo}>
                <Text style={styles.buddyName}>{item.name}</Text>
                <Text style={styles.buddyLocation}>{item.location}</Text>
            </View>
            <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.navbar} >
                <Icon name="arrow-back-outline" size={24} color="#fff" style={{ position: 'absolute', top: 50, left: 10 }} />
                <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center', marginTop: 50 }}>Find Buddy</Text>
                <TouchableOpacity style={{ position: 'absolute', top: 50, right: 10 }}>
                    <Icon name="notifications-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <Icon name="search-outline" size={24} color="#000" />
                <TextInput
                    placeholder="Search Buddy..."
                    style={styles.searchInput}
                />
                <TouchableOpacity>
                    <Icon name="options-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={buddies}
                keyExtractor={(item) => item.id}
                renderItem={renderBuddy}
            />

            <View style={styles.bottomTab}>
                <TouchableOpacity>
                    <Icon style={{ textAlign: 'center' }} name="home-outline" size={28} color="#7E60BF" />
                    <Text style={styles.tabText} color='#7E60BF'>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={{ textAlign: 'center' }} name="location-outline" size={28} color="#000" />
                    <Text style={styles.tabText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={{ textAlign: 'center' }} name="book-outline" size={28} color="#000" />
                    <Text style={styles.tabText}>Dive Log</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={{ textAlign: 'center' }} name="people-outline" size={28} color="#000" />
                    <Text style={[styles.tabText, { color: '#040273' }]}>Find Buddy</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={{ textAlign: 'center' }} name="calendar-outline" size={28} color="#000" />
                    <Text style={styles.tabText}>Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#040273',
        height: 100,
    }
    , container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        alignItems: 'center',
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    buddyCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        elevation: 2,
    },
    buddyImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    buddyInfo: {
        flex: 1,
        marginLeft: 15,
    },
    buddyName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buddyLocation: {
        color: '#777',
    },
    bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
        elevation: 10,
        paddingBottom: 20,
        borderTopColor: '#f5f5f5',
    },
    tabText: {
        fontSize: 12,
        textAlign: 'center',
    },
});

export default HomePage;

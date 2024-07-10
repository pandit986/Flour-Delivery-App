import React, { useRef, useState } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';
import { images } from './helper';

const { width } = Dimensions.get('window');
const ImageCarousel = () => {

    //state
    const [currentIndex, setCurrentIndex] = useState(0);

    //Ref
    const flatListRef = useRef(null);

    const onViewRef = useRef(({ viewableItems }) => {
        //viewableItems is an array of objects that represent the currently visible items in the FlatList
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    });

    // viewConfigRef ensures that the callback is triggered when 50% of an item is visible.
    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.uri }} style={styles.image} />
                )}
                onViewableItemsChanged={onViewRef.current} //returns a mutable object whose .current
                viewabilityConfig={viewConfigRef.current}
                ref={flatListRef}
            />
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: 200,
        resizeMode: 'cover',
    },
    pagination: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#000',
    },
    inactiveDot: {
        backgroundColor: '#ccc',
        backgroundColor: 'white',

    },
});


export default ImageCarousel;

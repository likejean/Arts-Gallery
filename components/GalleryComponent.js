import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Gallery(props) {

    const renderGalleryItem = ({item, index}) => {

        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/uthappizza.png')}}
            />
        );
    };

    return (
        <FlatList 
            data={props.pictures}
            renderItem={renderGalleryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Gallery;
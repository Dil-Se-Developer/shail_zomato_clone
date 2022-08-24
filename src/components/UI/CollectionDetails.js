import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionHeader from './CollectionHeader';
import RestaurantCard from './RestaurantCard';
import ExploreNear from './ExploreNear';
import Footer from './Footer';
import './CollectionDetails.css'

const CollectionDetails = () => {
    const { restaurantId } = useParams();
    const collectionsData = useSelector((state) => state.collectionsData.collectionsData);

    // console.log(collectionsData[restaurantId - 1]);

    const restaurantsdata = collectionsData[restaurantId - 1];
    // console.log(restaurantsdata);
    
    return (
        <>
            <CollectionHeader restaurantsdata={restaurantsdata}/>
            <RestaurantCard restaurantsdata={restaurantsdata}/>
            <ExploreNear/>
            <Footer/>
        </>
    )
}

export default CollectionDetails
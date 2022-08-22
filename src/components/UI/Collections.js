import React, { useEffect } from 'react';
import CollectionCard from './CollectionCard';
import { useSelector, useDispatch } from "react-redux";
import { fetchCollectionsData } from '../../redux_toolkit/slices/collectionDataSlice';
import './Collections.css';

const Collections = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsData())
    }, [])

    const collectionsData = useSelector((state) => state.collectionsData.collectionsData);

    // console.log(collectionsData);

    return (
        <>
            <div className='collections_heading'>
                <h2>Collections</h2>
                <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Vadodara, based on trends</p>
            </div>
            <div className='collections_cards'>
                {collectionsData.map((collectionData) => <CollectionCard collectionData={collectionData} key={collectionData.id} />)}
            </div>
        </>
    )
}

export default Collections
import React from 'react'
import './CollectionCard.css'

const CollectionCard = ({ collectionData }) => {
    const { name, places, collectionimg } = collectionData;
    return (
        <div className='collectiondata_bg'>
            <img src={collectionimg} alt='collection_img' />
            <div className='collectiondata_txt'>
                <h4>{name}</h4>
                <p>{places}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path>
                    </svg>
                </p>
            </div>
        </div>
    )
}

export default CollectionCard
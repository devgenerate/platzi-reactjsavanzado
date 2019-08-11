import React from 'react'

import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => (
  <ul>
    {
      photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
    }
  </ul>
)

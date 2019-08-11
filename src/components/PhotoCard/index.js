import React, { Fragment } from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

import { Article, Img, ImgWrapper } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({
  id,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show && (
          <Fragment>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavClick = () => {
                    !liked && toggleLike({ variables: {
                      input: { id }
                    } })
                    setLiked(!liked)
                  }
                  return <FavButton
                    liked={liked}
                    likes={likes}
                    setLiked={handleFavClick}
                  />
                }
              }
            </ToggleLikeMutation>
          </Fragment>
        )
      }
    </Article>
  )
}
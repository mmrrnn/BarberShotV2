import styled from 'styled-components'

const ThumbnailImage = styled.img`
  cursor: pointer;
  position: relative;
  object-fit: cover;
  width: 100%;
  &:hover {
    opacity: 0.9;
  }
`

export default ThumbnailImage;

import styled from 'styled-components'
import { IconButton } from "@mui/material"

const CloseButton = styled(IconButton)`
  z-index: 10;
  position: absolute;
  right: 0;
  border-radius: 0;
  background-color: white;
  color: ${({ theme }) => theme.palette.gold};
  &:hover {
    background-color: rgba(255, 255, 255, 0.95);
  }
`

export default CloseButton;

import React, { ReactElement } from 'react'
import { StyledNoItems } from './NoItems.styles'

const NoItems = ({ children }: { children: string }) : ReactElement => (
    <StyledNoItems>
        <p>{children}</p>
    </StyledNoItems>
)

export default NoItems

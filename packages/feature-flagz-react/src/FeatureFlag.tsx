import * as React from 'react'

export const FeatureFlag: React.FC<Props> = (props) => {
    if (!props.enabled) return null
    return props.children
}

interface Props {
    children: React.ReactNode
    enabled: boolean
}

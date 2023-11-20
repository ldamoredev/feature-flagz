import * as React from 'react'
import { render } from '@testing-library/react'
import { FeatureFlag } from '../src'

it('show children content if feature flag is enabled', () => {
    render(
        <FeatureFlag enabled={true}>
            <p id="p-children">p-children</p>
            <div id="div-children">div-children</div>
        </FeatureFlag>
    )

    expect(document.getElementById('p-children').innerHTML).toEqual('p-children')
    expect(document.getElementById('div-children').innerHTML).toEqual('div-children')
})

it('dont show children content if feature flag is disabled', () => {
    render(
        <FeatureFlag enabled={false}>
            <p id="p-children">p-children</p>
            <div id="div-children">div-children</div>
        </FeatureFlag>
    )

    expect(document.getElementById('p-children')).not.toBeInTheDocument()
    expect(document.getElementById('div-children')).not.toBeInTheDocument()
})

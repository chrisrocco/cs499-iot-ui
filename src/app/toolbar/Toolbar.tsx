import * as React from 'react'

import {CommandBar} from "office-ui-fabric-react";


const toolbarItems = [
    {
        key: 'newItem',
        name: 'Locality',
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
        iconProps: {
            iconName: 'Add'
        },
        ariaLabel: 'New. Use left and right arrow keys to navigate',
        subMenuProps: {
            items: [
                {
                    key: 'emailMessage',
                    name: 'English',
                    iconProps: {
                        iconName: 'World'
                    },
                    ['data-automation-id']: 'newEmailButton'
                },
                {
                    key: 'calendarEvent',
                    name: 'Spanish',
                    iconProps: {
                        iconName: 'Calendar'
                    }
                }
            ]
        }
    }
]


export const Toolbar = () => {
    return (
        <div>
            <CommandBar
                items={toolbarItems}
                ariaLabel={'Use left and right arrow keys to navigate between commands'}
            />
        </div>
    )
}
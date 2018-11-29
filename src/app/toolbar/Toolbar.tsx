import * as React from 'react'

import {CommandBar} from "office-ui-fabric-react";


const toolbarItems = [
    {
        key: 'newItem',
        name: 'New',
        cacheKey: 'myCacheKey', // changing this key will invalidate this items cache
        iconProps: {
            iconName: 'Add'
        },
        ariaLabel: 'New. Use left and right arrow keys to navigate',
        subMenuProps: {
            items: [
                {
                    key: 'emailMessage',
                    name: 'Email message',
                    iconProps: {
                        iconName: 'Mail'
                    },
                    ['data-automation-id']: 'newEmailButton'
                },
                {
                    key: 'calendarEvent',
                    name: 'Calendar event',
                    iconProps: {
                        iconName: 'Calendar'
                    }
                }
            ]
        }
    },
    {
        key: 'upload',
        name: 'Upload',
        iconProps: {
            iconName: 'Upload'
        },
        href: 'https://dev.office.com/fabric',
        ['data-automation-id']: 'uploadButton'
    },
    {
        key: 'share',
        name: 'Share',
        iconProps: {
            iconName: 'Share'
        },
        onClick: () => console.log('Share')
    },
    {
        key: 'download',
        name: 'Download',
        iconProps: {
            iconName: 'Download'
        },
        onClick: () => console.log('Download')
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
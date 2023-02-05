import React, {FC} from 'react';

type ContactsType = {
    contactName?: string,
    contactValue?: any
}

export const Contacts: FC<ContactsType> = ({contactValue, contactName}) => {
    return (
        <div>
            <span>{contactName}: {contactValue ? contactValue : '-'}</span>
        </div>
    );
};

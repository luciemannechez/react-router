import React from 'react';
import {Route, NavLink} from 'react-router-dom';

export function SubRoute ({match, location}) {
    return (
        <div>
            <h1>{`${match.params.name} sub route`}</h1>
            <div>
                {location.state.contact.info}
            </div>
        </div>
    )
}

export const Contact = ({match}) => {
    const contacts = [
        {
            id: 1,
            name: 'Charlie Hardy',
            info: 'info'
        },
        {
            id: 2,
            name: 'Leona Frank',
            info: 'info leona'
        }
    ];

    return (
        <div>
            <h1>Contact route</h1>
            <div>
                <Route path={`${match.path}/:name`} component={SubRoute}/>
                <Route path={match.path} render={() => {
                    return ( contacts.map((contact) =>
                        <NavLink key={contact.id}
                                 to={{
                                     pathname: `/contact/${contact.name}`,
                                     state: {
                                        contact: contact
                                    }
                                 }}
                                 activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}>{contact.name}</NavLink>
                    ));
                }}
                />
            </div>
        </div>
    )
};

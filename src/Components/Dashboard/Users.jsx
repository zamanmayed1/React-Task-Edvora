import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    let url = 'https://assessment.api.vweb.app/users'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [])
    let reload;
    if (users.length == 0) {
        return reload = 'Loading...'
    }
    return (
        <div className="overflow-auto rounded-lg shadow">
            {reload}
            <table className="mx-auto md:w-2/4  w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left w-2/4">User ID</th>
                        <th className="p-3 text-sm font-semibold tracking-wide text-left">User Name</th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {
                        users.map(user =>
                            <tr>
                                <td className="p-3 text-left text-sm text-gray-700 whitespace-nowrap">
                                    {user.user_id}
                                </td>
                                <td className="p-3 text-left text-sm text-gray-700 whitespace-nowrap">
                                    {user.name}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;
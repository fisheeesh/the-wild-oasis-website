import React from 'react'

export default async function Page() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users')

    let data = await res.json()

    console.log(data)

    return (
        <div>
            <h1>Cabins Page</h1>

            <ul>
                {
                    data.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

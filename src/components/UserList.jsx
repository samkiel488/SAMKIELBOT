import React from 'react'

const UserList = () => {

        const userInfo = [
        { id: 1,  username: "Sonia", age: 20, country: "Canada",  },
        
        { id: 2,   username: "John", age: 10, country: "Germany",  },

        { id: 3,   username: "Zabdiel", age: 0, country: "USA",  }

    ]


  return (
    <div>
        {userInfo.map(({id, username, age, country}) => (

        <h2>
            <ul key={Math.random()}>
            
                <li>{id} {username} </li>
                <li> {age} </li>
                <li> {country} </li>

            </ul>
        </h2>
        ))}
    </div>
  )
}

export default UserList
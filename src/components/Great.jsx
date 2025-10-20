const Great = () => {

    const userInfo = [
        {   username: "Sonia", age: 20, country: "Canada",  },
        
        {   username: "John", age: 10, country: "Germany",  },

        {   username: "Zabdiel", age: 0, country: "USA",  }

    ]

    return <h1>
        
        {userInfo.map((users) => (

        <ul key={Math.random()}>
            <li>Name:  {users.username}</li>
            <li>Age:  {users.age}</li>
            <li>Country:  {users.country}</li>
            
        </ul>
        ))}
    </h1>
};

export default Great
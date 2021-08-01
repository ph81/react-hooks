import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

    //callback function updating the user state with the new prop through useEffect
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault()

            props.updateUser(user.id, user)
        }}
        >
        <label>Name</label>
        <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
        />
        <label>Username</label>
        <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
        />
        <button>Update user</button>
        <button
            onClick={() => props.setEditing(false)}
            className="button muted-button"
        >
            Cancel
        </button>
        </form>
    )
}

export default EditUserForm
import React from 'react'

export default function TableTask({ users, handleDelete, handleUpdate }) {
    console.log(users)
//     const [learn, setLearn] = useState("");
//     const [date, setDate] = useState("");
//     const [name, setName] = useState("");
//     const [status, setStatus] = useState("Choose");
//     const [updatingId, setUpdatingId] = useState("");

//     const handleUpdateClick = (id) => {
//         const userToUpdate = users.find((user) => user.id === id);
//         setLearn(userToUpdate.learn);
//         setDate(userToUpdate.date);
//         setName(userToUpdate.name);
//         setStatus(userToUpdate.status);
//         setUpdatingId(id);
//     };

//     const handleUpdate = () => {
//     const updatedUser = { id: updatingId, learn, date, name, status };
//     handleUpdateClick(updatingId, updatedUser);
//     resetForm();
//   };

//     const resetForm = () => {
//         setLearn("");
//         setDate("");
//         setName("");
//         setStatus("Choose");
//         setUpdatingId("");
//     };

    return (
        <table>
            <thead>
                <th>#</th>
                <th>Content</th>
                <th>Due date</th>
                <th>Status</th>
                <th>Assiged to</th>
                <th>Action</th>
            </thead>
            {
                users.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.learn}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        <td>{item.name}</td>
                        <td>
                            <button className="update-btn" onClick={() => handleUpdate(item.id)}>Update</button>
                            <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    )
}

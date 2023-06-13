import React, { useState } from 'react'
// import TableTask from '../Main/TableTask';

export default function HeaderTask({ handleSubmit }) {
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    const [learn, setLearn] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Choose");
    const [error, setError] = useState("");

    const handleValidation = () => {
        if (!learn) {
            setError("Please enter content");
            return false;
        }
        if (!date) {
            setError("Please select a due date");
            return false;
        }
        if (status === "Choose") {
            setError("Please select a status");
            return false;
        }
        if (!name) {
            setError("Please enter the name");
            return false;
        }
        setError("");
        return true;
    };
    const handleSubmission = () => {
        if (handleValidation()) {
            const newUser = { id: uuidv4(), learn, date, name, status };
            handleSubmit(newUser);
            resetForm();
        }
    };
    // const handleSubmission = () => {
    //     if (handleValidation()) {
    //         handleSubmit({
    //             id: uuidv4(),
    //             learn: learn,
    //             date: date,
    //             name: name,
    //             status: status,
    //         });
    //         setLearn("");
    //         setName("");
    //         setDate("");
    //         setStatus("Choose");
    //     }
    // };
    const handleUpdate = () => {
        if (handleValidation()) {
            const updatedUser = { id: uuidv4(), learn, date, name, status };
            handleUpdate(updatedUser);
            resetForm();
        }
    };
    const resetForm = () => {
        setLearn("");
        setDate("");
        setName("");
        setStatus("Choose");
    };

    return (
        <header>
            <span>@</span>
            <input name="learn" value={learn}
                onChange={(e) => setLearn(e.target.value)}
            />
            <span>@</span>
            <input type="date" name="date" value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <span>@</span>
            <div class="custom-select">
                <select onChange={(e) => {
                    setStatus(e.target.value)
                }} value={status} id="status" name="status">
                    <option value="Choose">Choose</option>
                    <option value="Pending">Pending</option>
                    <option value="Fullfill">Fullfill</option>
                    <option value="Reject">Reject</option>
                </select>
            </div>
            <span>@</span>
            <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {/* <button onClick={() => {
                handleSubmit({ id: uuidv4(), learn: learn, date: date, name: name, status: status });
                setLearn("");
                setName("");
                setDate("");
                setStatus("Choose");
            }}>Submit</button> */}
            <button onClick={handleSubmission}>Submit</button>
            {/* <button onClick={handleUpdate}>Update</button> */}
            {error && <p className="error">{error}</p>}
        </header>

    )
}

import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const SendCourses = () => {
    const defaultInputs = {
        BatchNum: "",
        courses: ""
    }
    const [inputs, setInputs] = useState(defaultInputs);
    const handleChanges = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let error = inputs.error
        setInputs({
            ...inputs, error: error, [name]: value
        })

    }

    const handleRegister = () => {
        console.log(inputs)
    }
    return (
        <div className='w-[80%] m-5'>
            <Row>
                <Col><select
                    type="text"
                    onChange={handleChanges}
                    className="block border border-grey-light w-full p-3 rounded mb-4 ml-5"
                    name="BatchNum"
                    value={inputs.BatchNum}
                    placeholder="BatchNum" select>
                    <option value="1">Batch-1</option>
                    <option value="2">Batch-2</option>
                </select></Col>
                <Col><select
                    type="text"
                    onChange={handleChanges}
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="courses"
                    value={inputs.language}
                    placeholder="Courses" select>
                    <option value="English">Spoken English</option>
                    <option value="Tailor">Tailor Courses</option>
                </select></Col>
            </Row>
            <Row><button
                onClick={handleRegister}
                type="submit"
                className="w-full text-center bg-green-500 py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >Send Courses.</button></Row>
        </div >
    )
}

export default SendCourses

import { useState } from 'react'

const defaultInputs = {
    name: "",
    password: "",
    mobile: "",
    language: "English",
    locality: "",
    pincode: "",
    district: "",
    block: "",
    state: "",
    error: {
        name: "",
        password: "",
        mobile: "",
        language: "",
        locality: "",
        pincode: "",
        district: "",
        city: "",
        state: "",
    }
}




const SignupUser = () => {
    //if otp sent then it is true else false

    const [inputs, setInputs] = useState(defaultInputs);
    const [pincodBtnStatus, setPincodBtnStatus] = useState(false)
    const handleChanges = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let error = inputs.error
        switch (name) {
            case 'confirm_password': error.password = (value !== inputs.password) ? "Password unmatch" : ""; break;
            case 'pincode': setPincodBtnStatus(value.length === 6); break;
            default:
                break;
        }
        setInputs({
            ...inputs, error: error, [name]: value
        })

    }

    const handleRegister = () => {
        console.log(inputs)
    }

    const handleGetAddress = () => {
        console.log("clicled")
        setPincodBtnStatus(false)
        fetch(`https://api.postalpincode.in/pincode/${inputs.pincode}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res[0].Status === "Success") {
                    let data = res[0].PostOffice[0]
                    console.log(data)
                    let temp_inputs = inputs
                    temp_inputs.block = data.Block
                    temp_inputs.state = data.State
                    temp_inputs.district = data.District
                    console.log(temp_inputs)
                    setInputs(temp_inputs)
                    setPincodBtnStatus(true)
                }
            }).catch((err) => { console.log(err); setPincodBtnStatus(true) })
    }
    return (
        <div className='text-centre w-full'>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="w-full mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">New User Registration</h1>

                        <input
                            onChange={handleChanges}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            value={inputs.name}
                            placeholder="Full Name" />

                        <select
                            type="text"
                            onChange={handleChanges}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="language"
                            value={inputs.language}
                            placeholder="Language" select>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                        <input
                            onChange={handleChanges}
                            value={inputs.mobile}
                            type="tel"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="mobile"
                            placeholder="Mobile" />

                            <input
                            onChange={handleChanges}
                            value={inputs.email}
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input
                            onChange={handleChanges}
                            value={inputs.password}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input
                            onChange={handleChanges}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <p className='text-rose-600'>
                            {inputs.error.password}
                        </p>

                        <input
                            onChange={handleChanges}
                            value={inputs.locality}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="locality"
                            placeholder="Locality" />

                        <input
                            value={inputs.pincode}
                            onChange={handleChanges}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="pincode"
                            type="number"
                            placeholder="PINCODE" />

                        <button
                            disabled={!pincodBtnStatus}
                            onClick={handleGetAddress}
                            type="submit"
                            className="w-full text-center bg-green-500 py-3 disabled:bg-green-200  rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Get Address</button>

                        <input
                            value={inputs.block}
                            onChange={handleChanges}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="block"
                            placeholder="Block" />
                        <input
                            value={inputs.district}
                            onChange={handleChanges}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="district"
                            placeholder="District" />
                        <input
                            value={inputs.state}
                            onChange={handleChanges}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="state"
                            placeholder="State" />
                        <button
                            onClick={handleRegister}
                            type="submit"
                            className="w-full text-center bg-green-500 py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                        >Regsiter User.</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignupUser

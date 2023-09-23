import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Form() {

    const [date, setDate] = useState(new Date())
    const [formDisplay, setFormDisplay] = useState(false)

    const [formData, setFormData] = useState({
        userName: "",
        birthDate: {date}
    })
    
    function handleChange(event) {
        const {name, type, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    console.log(formData)


    return (
        <div>


            <div>
                <form>
                <input
                    name="userName"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    value={formData.userName}
                >

                </input>

                <DatePicker selected={date} onChange={(date) => setDate(date)} />

                <div><button>Start Test</button></div>
            </form>
            </div>
        </div>
    )
}

export default Form
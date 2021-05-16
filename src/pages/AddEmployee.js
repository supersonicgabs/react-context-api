import React, {Fragment, useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {useHistory, Link} from 'react-router-dom'

export const AddEmployee = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [designation, setDesignation] = useState('')
    const {addEmployee, employees} = useContext(GlobalContext)
    let history = useHistory()

    const onSubmit = (e) =>{
        e.preventDefault();
        const newEmployee = {
            id: employees.length+1,
            name,
            location,
            designation
        }
        addEmployee(newEmployee)
        history.push('/')
    }

    return(
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full max-w-sm container mt-20 mx-auto">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="name"
                        >
                            Name of Employee
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full max-w-sm container mt-20 mx-auto">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="location"
                        >
                            Location
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            type="text"
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="w-full max-w-sm container mt-20 mx-auto">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                            htmlFor="designation"
                        >
                            Designation
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            type="text"
                            value={designation}
                            onChange={(e)=>setDesignation(e.target.value)}
                            placeholder="Enter designation"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Employee
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
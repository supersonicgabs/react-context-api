import React, {Fragment, useState, useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {useHistory, Link} from 'react-router-dom'

export const EditEmployee = route => {
    let history = useHistory();
    const {employees, editEmployee} = useContext(GlobalContext)
    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        designation: "",
        location: ""
    })
    

    useEffect(()=>{
        (async ()=>{
            const currentUserId = route.match.params.id
            console.log('currentUserId: ', currentUserId)
            const employeeId = currentUserId
            console.log('employeeId: ', employeeId)
            console.log('parseInt(employeeId): ', parseInt(employeeId))
            const aaaaa = await employees.find(emp => emp.id === parseInt(employeeId))
            console.log('employees: ', employees)
            console.log('aaaa: ', aaaaa)
            setSelectedUser(aaaaa)
        })()
        // eslint-disable-next-line
    })

    const onSubmit = (e) =>{
        e.preventDefault()
        editEmployee(selectedUser)
        history.push('/')
    }

    const handleOnChange = (userKey, value) => {
        console.log('selectedUser: ', selectedUser)
        setSelectedUser({...selectedUser, [userKey]: value})
    }

    if(!selectedUser || !selectedUser.id){
        alert("Id don't match!")
    }

    return(
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name of the Employee
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            type="text"
                            value={selectedUser?.name}
                            onChange={(e)=>handleOnChange("name", e.target.value)}
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="location"
                        >
                            Location
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            type="text"
                            value={selectedUser?.location}
                            onChange={(e)=>handleOnChange("location", e.target.value)}
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label 
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="designation"
                        >
                            Designation
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            type="text"
                            value={selectedUser?.designation}
                            onChange={(e)=>handleOnChange("designation", e.target.value)}
                            placeholder="designation"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                        Edit Employee
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
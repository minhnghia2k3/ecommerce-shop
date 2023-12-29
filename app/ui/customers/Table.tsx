import React from 'react'
import { users } from '@/lib/data'


const CustomersTable = () => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.fullName}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td className='d-flex gap-2'>
                            <button className="btn btn-sm btn-outline-primary">Edit</button>
                            <button className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default CustomersTable
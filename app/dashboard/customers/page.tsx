import Search from '@/app/ui/atoms/Search'
import CustomersTable from '@/app/ui/customers/Table'
import React from 'react'

const page = () => {
    return (
        <>
            <div>
                <h1 className="h3 mb-4 text-gray-800">Customers</h1>
                <div className="d-flex justify-content-between">
                    <Search />
                    <button className="btn btn-primary">Add new</button>
                </div>
            </div>
            <CustomersTable />
        </>
    )
}

export default page
import Link from 'next/link'
import React from 'react'

const BackToTop = () => {
    return (
        <Link
            href="#"
            className="back-to-top d-flex align-items-center justify-content-center"
        >
            <i className="bi bi-arrow-up-short" />
        </Link>

    )
}

export default BackToTop
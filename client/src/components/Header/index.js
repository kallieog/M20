import React from "react"
import NavTabs from "../NavTabs"

const Header = ({handlePageChange, currentPage}) => {
    return(
        <header>
            <h1>
                My Portfolio
            </h1>
            <NavTabs handlePageChange={handlePageChange} currentPage = {currentPage} />
        </header>

    )
}
export default Header
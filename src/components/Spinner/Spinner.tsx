import React, { ReactElement } from 'react'
import { StyledSpinner } from './Spinner.styles'

const Spinner = () : ReactElement=> (
    <StyledSpinner>
        <div className="bookshelf_container">
            <div className="bookshelf_wrapper">
                <ul className="books_list">
                    <li className="book_item first"></li>
                    <li className="book_item second"></li>
                    <li className="book_item third"></li>
                    <li className="book_item fourth"></li>
                    <li className="book_item fifth"></li>
                    <li className="book_item sixth"></li>
                </ul>
                <div className="shelf"></div>
            </div>
        </div>
    </StyledSpinner>
)

export default Spinner

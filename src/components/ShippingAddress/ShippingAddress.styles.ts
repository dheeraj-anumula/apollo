import styled from 'styled-components'
import Button from 'styles/Button'

const StyledDiv = styled.section`
    width: 45%;
    margin: 0 2rem 2rem 0;

    label {
        display: inline-block;
        margin-bottom: .5rem;
    }

    input:disabled, input[disabled] {
        cursor:not-allowed;
        background-color: #e9ecef;
        opacity: 1;
    }

    select:disabled, select[disabled] {
        cursor:not-allowed;
        background-color: #e9ecef;
        opacity: 1;
    }

    fieldset {
        border: none;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-control {
        display: block;
        width: 100%;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
      }
`

const EditButton = styled(Button)`
    display: inline-block;
    width: auto;
    background-color: #002171;
    color: white;
    margin-left: 1rem;

    &:hover {
        background-color: #0d47a1;
    }
`

const SaveButton = styled(Button)`
    display: inline-block;
    width: auto;
    background-color: #003d00;
    color: white;
    margin-left: 1rem;

    &:hover {
        background-color: #33691e;
    }
`

export {
    StyledDiv,
    EditButton,
    SaveButton
}

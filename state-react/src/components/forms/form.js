import { useState } from "react";

const Form = (props) => {

    const [inputs, setInputs] = useState({
        image: ''
    })

    const handleInputChange = (e) => {
        setInputs({
            image: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addCard(inputs)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da carta</label>
                <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image} />
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default Form
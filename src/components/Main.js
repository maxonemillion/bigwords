import React, { useState } from "react";
import { Button, Form } from "react-bootstrap"
import API from "../utils/API";
import "./Main.css"


const Main = () => {
    const [word, setWord] = useState("")
    const [definition, setDefinition] = useState("");

    function loadDefinitions(word) {
        API.definitions(word)
            .then(res => {
                setDefinition(res.data)
                console.log(res.data)
                console.log(definition.entries)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loadDefinitions(word);
    };

    return (
        <div>
            <Form.Control
                autoComplete="off"
                type="text"
                id="movie-input"
                placeholder="Search word"
                onChange={(event) => setWord(event.target.value)}
                value={word} />
            <Button onClick={handleSubmit}>go</Button>
            {definition.entries?.map((def) => {
                return (
                    <div>
                        {def.lexemes?.map(def => {
                            return (
                                <ul>
                                    {def.senses?.map((def) => {
                                        return (
                                            <ul>
                                                {def.definition}
                                            </ul>
                                        )
                                    })}
                                </ul>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Main;
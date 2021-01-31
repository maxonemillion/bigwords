import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap"
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
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        loadDefinitions(word);
    };

    const handleKeyPress = e => {
        if (e.keyCode === 13) {
          handleSubmit(e);
        }
      };

    return (
        <div id="main">
        <div id="word-input">
            <InputGroup className="">
                <FormControl
                    autoComplete="off"
                    type="text"
                    placeholder="Search word"
                    onChange={(event) => setWord(event.target.value)}
                    onKeyDown={handleKeyPress}
                    value={word}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={handleSubmit}>search</Button>
                </InputGroup.Append>
            </InputGroup>
            <div id="definitions">
            {definition.entries?.map((def) => {
                return (
                    <div>
                        {def.lexemes?.map(def => {
                            return (
                                <div>
                                    {def.senses?.map((def) => {
                                        return (
                                            <h4>
                                                {def.definition.toLowerCase()}
                                            </h4>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            </div>
            </div>
            </div>
    )
}

export default Main;
import { createContext } from "react";

{/* <InputComponent label="Name" type="text" name="name" value={inputs.name} onChange={handleName} /> */}

export let InputComponents = createContext({
    labelTitle: "",
    type: "",
    name: "",
    value: "",
    onChange: null,
});


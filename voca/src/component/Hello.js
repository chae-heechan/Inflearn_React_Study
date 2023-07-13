import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    console.log(age)
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "성인" : "미성년자";

    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        // document.getElementById("name").innerText = name;
        setName(newName);
    }

    return (
        <div>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name}></UserName>
            <button onClick={changeName}>Change!</button>
        </div>
    )
}
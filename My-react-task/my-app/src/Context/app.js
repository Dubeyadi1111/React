import React from "react";
import Context from "./Context/myContext";
import child1 from './child2'

function App(){
    return(
        <>
        <myContext.provider> value ={"HELLO WORLD"}
            <child1/>
        </myContext.provider>
        </>
    )
}
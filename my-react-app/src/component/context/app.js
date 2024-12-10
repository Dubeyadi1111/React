import React from "react";
import myContext from "./Context/myContext";
import app1 from './app2'

function App(){
    return(
        <>
        <myContext.provider> value ={"HELLO WORLD"}
            <app1/>
        </myContext.provider>
        </>
    )
}
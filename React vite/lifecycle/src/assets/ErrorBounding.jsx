import React from 'react'

export class ErrorBounding extends component {
    constructor (){
        super ()
        this.state = {
            hasError:false
        }
    }
    static getDerivedStateFromError(error){
        console.log("getDerivedStateError()");
        if (error){
            return {hasError:true}
        }
    }
    componentDidCatch(error,errorInfo){
        console.log("componentDidCatch()");
        console.log("error,errorInfo");
    }
}
function ErrorBounding() {
  return (
    <div>
      
    </div>
  )
}

export default ErrorBounding

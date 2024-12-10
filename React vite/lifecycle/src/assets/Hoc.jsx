import Child from "./Child"

function Hoc(CallBack) {
 const NewComponent = (props) =>{
    let additionalprops ={}
    if(props.name == "Start"){
        additionalprops.bg ="black";
        additionalprops.color ="white"
    }
    if(props.name=="Stop"){
        additionalprops.bg="green"
        additionalprops.color="white"
    }
    return (
    <>
    <CallBack {...props} {...additionalprops} />
    </>
  )
}
return NewComponent
}

export const MyButton = Hoc(Child)
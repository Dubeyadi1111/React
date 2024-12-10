import react from `react`

function Object (){
    let user ={
        name :"Rocky",
        age :24, addres:"kgf",
        email:"rkcb@gmail.com",
        mobile:9113411434
    }
    let userdetails=[]
     
    for (let key in user ){
        userdetails.push(<p>{key}:{user[key]}</p>)
    }
    return(
        <>
        {/* {user} */}
        <h1>name:{user.name}</h1>
        <h1>name:{user.age}</h1>
        <h1>name:{user.address}</h1>

        {userdetails}
        {Object.keys(user).map(ele=>{
            return <div>
                <b></b>
            </div>
        })}
        </>
    )
}

export default Object
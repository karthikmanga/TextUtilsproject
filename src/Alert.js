import react from 'react'
function Alert(props){
    return(
   <>
   {props.alert && <div className="alert alert-success" role="alert">
      {props.alert}
         </div>}
   </>
    )


}
export default Alert;
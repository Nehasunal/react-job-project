const Cards = ({children, color}) =>{
  return (
    <>
    <div className={ `${color} p-6 rounded-lg shadow-md`}>
      {children}
    </div>
    </>
  )
}

export default Cards
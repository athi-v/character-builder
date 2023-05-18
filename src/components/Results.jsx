import React from 'react'


const Results = ({fullname, surname, age, occupation}) => {
  return (
    <div className="pt-5">
    <p className="font-semibold text-xl text-center">
      Hey my name is {fullname} {surname}!
    </p>
    <p className="font-normal text-lg text-center">
      I am {age} years old and I work as {occupation}.
    </p>
  </div>  )
}

export default Results
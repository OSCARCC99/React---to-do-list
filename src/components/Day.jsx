import Left from "./icons/Left"

import { getNameDay } from "../helpers/getNameDay"
import { getDate } from '../helpers/getDate'

const Day = ({ dateM, setDateM }) => {

  //devolver dias
  const addDays = (date) => {
    let addDate = new Date(dateM)
    addDate.setDate(date.getDate() + 1)
    return addDate;
  }
  const restDays = (date) => {
    let restDate = new Date(dateM)
    restDate.setDate(date.getDate() - 1)
    return restDate;
  }

  const handleRight = () => {
    //console.log('right');
    setDateM(addDays(dateM))
  }
  const handleLeft = () => {
    setDateM(restDays(dateM))
  }

  return (
    <section className='flex justify-center items-center gap-8 my-20 [&>p]:text-gray02'>
      <p 
        onClick={()=>handleLeft()}
        className="cursor-pointer">
        <Left/>
      </p>
      <div className="w-[155px]">
        <h4 className="text-4xl font-medium">{getNameDay(dateM)}</h4>
        <p className="text-gray02">{getDate(dateM)}</p>
      </div>
      <p 
        onClick={()=>handleRight()}
        className="cursor-pointer">
        <Left/>
      </p>
    </section>
  )
}

export default Day
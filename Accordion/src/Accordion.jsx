import React, { useState } from 'react'
import { FaChevronDown ,FaChevronUp} from 'react-icons/fa';
FaChevronDown
const Accordion = ({items}) => {
    const [openIndex, setOpenIndex] = useState(null);

    if(!Array.isArray(items)||items.length===0){
        return <div className='accordion-message'>NO ITEMS AVAILABLE</div>
    }
    function handleClick(index){

        setOpenIndex((prevIndex)=>
            {return prevIndex===index?null: index});
    }
    return (
        <div className='accordion-container'>
            {
                items.map((item,index)=>(
                    <div key={index} className='accordion-item'>
                        <div className="accordion-title" onClick={()=>handleClick(index)}>
                            <span>{item.title}</span>
                            <span>
                                    {openIndex===index? <FaChevronUp/>:<FaChevronDown/>}
                            </span>
                        </div>
                        {
                            openIndex === index && (
                                <div className="accordion-content">{item.content}</div>

                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion

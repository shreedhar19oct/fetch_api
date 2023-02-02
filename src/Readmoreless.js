import { useState } from "react";

const ReadMoreReadLess = ({limit,children}) => {
    
    const text = children;

    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }

    return (
        <div className="read-more-read-less">
            {isReadMoreShown ? text: null}
            <button className="btn" onClick={toggleBtn}> {isReadMoreShown ? 'Read Less' : '...Read More'}</button>
        </div>
    )
}
export default ReadMoreReadLess;
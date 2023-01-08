import{useState}from 'react';

function Slider({imageProps}){
    const[item, setItem]=useState(0);

    const previousPicture=()=>{
        setItem((item=>{
            item--;
            if(item<0){
                return imageProps.length-1
        }
            return item
        }))
    }
    const nextPicture=()=>{
        setItem((item=>{
            item++;
            if(item>imageProps.length-1){
                item=0;
            }
            return item;
        }))
    }
return(
    <div>
        <div className='container'>
            <img src={imageProps[item]}width='300px' alt='present'/>
        </div>
        <div className='btn container'>
            <button  onClick={previousPicture}>Previous</button>
            <button  onClick={nextPicture}>Next</button>

        </div>
    </div>
)

}
export default Slider;
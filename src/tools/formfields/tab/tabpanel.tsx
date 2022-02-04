import './tabpanel.scss'
interface Iprops {value:number,index:number,children:React.ReactElement}


export const TabPanel=({value,index,children}:Iprops)=>{

     return (
         <div 
           style={{display:value !== index?'none':'flex'}}
           className="tabPanelBody">
               {value === index && (
                   
                  children
               )}
         </div>
     )
}
import 
   {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    Paper
    
   }
   from '@mui/material'
interface Iele {number:number,sentWeight:string
    ,realWeight:string,realPay:string,pay:string,
     remain:string,weightSub:string,detail:string}
interface Iprops {bodyArray: Iele[]
                ,headArray:string[],setOpen:Function}

export const MyTable =({headArray,bodyArray,setOpen}:Iprops) =>{


    return (
        <Paper sx={{overflow:"hidden",width:'100%'}}>
            <TableContainer sx={{maxHeight:440}} >
                <Table stickyHeader={true}>
                    <TableHead>
                        <TableRow>
                            {headArray.map((ele:string,i:number)=>{
                                if (ele === "الفرق") {
                                    return <TableCell sx={{color:'#05a7e2'}} key={i}>{ele}</TableCell>
                                }
                                return (<TableCell key={i}>{ele}</TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {bodyArray?.map((ele:Iele,i:number)=>{
                                return (
                                    <TableRow key={i}>
                                    <TableCell onClick={()=>setOpen(true)}
                                               sx={{color:'#05a7e2',cursor:'pointer'}} >{ele.detail}</TableCell>
                                    <TableCell sx={{color:'#05a7e2'}}  >{ele.remain}</TableCell>
                                    <TableCell >{ele.realPay}</TableCell>
                                    <TableCell >{ele.pay}</TableCell>
                                    <TableCell sx={{color:'#05a7e2'}} >{ele.weightSub}</TableCell>
                                    <TableCell >{ele.sentWeight}</TableCell>
                                    <TableCell >{ele.realWeight}</TableCell>
                                    <TableCell >{ele.number}</TableCell>


                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>   
        </Paper>       
    )

}
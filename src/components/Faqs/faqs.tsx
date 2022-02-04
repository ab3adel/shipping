import './faqs.scss'
import Q from '../../images/Faqs/questionmark.svg'
import Q1 from '../../images/Faqs/questionmark1.svg'
import Q2 from '../../images/Faqs/questionmark2.svg'
import {Question} from './question'
import { useEffect, useState } from 'react'
import axios from '../../tools/api/axios/axios'
import {Apis} from '../../tools/api/apis'
import {Notify} from '../../tools/notification/notification'


type Tdata ={title:string,content:string}

export default  function Faqs () {
let arr = [ {title:'question1',content:`IpsLaboris magna 
quis do adipisicing. Ea Lorem et quis aliqua voluptate et
 non consectetur nisi qui Lorem. Fugiat laborum do minim 
 sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
 Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
  tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
  r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
 {title:'question2',content:`IpsLaboris magna 
 quis do adipisicing. Ea Lorem et quis aliqua voluptate et
  non consectetur nisi qui Lorem. Fugiat laborum do minim 
  sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
  Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
   tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
   r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
{title:'question3',content:`IpsLaboris magna 
quis do adipisicing. Ea Lorem et quis aliqua voluptate et
 non consectetur nisi qui Lorem. Fugiat laborum do minim 
 sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
 Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
  tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
  r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
{title:'question4',content:`quis do adipisicing. Ea Lorem et quis aliqua voluptate et
non consectetur nisi qui Lorem. Fugiat laborum do minim 
sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
 tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
 r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
{title:'question4',content:`quis do adipisicing. Ea Lorem et quis aliqua voluptate et
non consectetur nisi qui Lorem. Fugiat laborum do minim 
sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
 tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
 r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
{title:'question4',content:`quis do adipisicing. Ea Lorem et quis aliqua voluptate et
non consectetur nisi qui Lorem. Fugiat laborum do minim 
sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
 tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
 r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
{title:'question4',content:`quis do adipisicing. Ea Lorem et quis aliqua voluptate et
non consectetur nisi qui Lorem. Fugiat laborum do minim 
sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
 tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
 r aliquip officia sint ex sint sit ullamco in aliquip aute.`},
{title:'question4',content:`quis do adipisicing. Ea Lorem et quis aliqua voluptate et
non consectetur nisi qui Lorem. Fugiat laborum do minim 
sunt magna minim ex reprehenderit qui amet cillum sunt amet sit.
Non nisi irure aliquip nisi in tempor labore. Non deserunt occaecat id
 tempor culpa aliquip duis ipsum dolore Lorem. Nulla do pariatur officia dolo
 r aliquip officia sint ex sint sit ullamco in aliquip aute.`}]
 const [questions,setQuestions] =useState<Tdata[]>(arr)
 const [showErr,setShowErr]= useState(false)
 const [isLoading,setIsLoading]=useState('idle')
useEffect(()=>{
    
const fetchFaqs=async ()=>{
    const res= await axios.get(Apis.Faqs)
      .then(res=> {
          setIsLoading('loaded')
          res.data.payload.map((ele:any)=>{
              setQuestions(pre=>{
                  return ([...pre,{title:ele.question_ar,content:ele.answer_ar}])
              })
          })
      })
      .catch (err =>{
          setShowErr(true)
      })
}
if (isLoading==='idle') {
    setIsLoading('loading')
    fetchFaqs()
}

},[])

    return (
        <div className="faqsContainer">
           <div className="faqsHeader">
               <h3> الأسئلة الشائعة</h3>
               <div className="imgsGroup">
                   <img src={Q2} className="q2" />
                   <img src={Q1} className="q1" />
                   <img src={Q} className="q" />
                  
                   
               </div>
           </div>
           <div className="faqsBody">
               {questions.map ((ele:{title:string,content:string},index:number)=>{
                   return (
                       <Question key={index} title={ele.title} content={ele.content}/>
                   )
               })}
           </div>
           {showErr && (
               <Notify isNotified={showErr}
                       setIsNotified={()=>setShowErr(false)}
                       severity='error' children='حدث خطأ ما ' />
           )}
        </div>
    )
}
import 
{
    Dialog,
    DialogContent,
    DialogActions,
    Checkbox,
    Divider

}
from '@mui/material'
import { ChangeEvent } from 'react'
import { MyButton } from '../../tools/formfields/button/button'
import { InputField } from '../../tools/formfields/input/inputfield'
import { MySelector } from '../../tools/formfields/selector/selector'
import { translator } from '../../tools/translator'
import { dummy } from '../../tools/validations/validations'

interface iProps {open:boolean,setOpen:Function,formFields:any
           ,setFormFields:Function,countriesName:string[],cities:string[]}

export const AddressForm =({open,setOpen,cities,countriesName
                          ,formFields,setFormFields}:iProps)=>{
    const handleCheckBox =(e:ChangeEvent)=>{
        let input = e.currentTarget as HTMLInputElement
        let value ='0'
        if (input.value) value='1' 
        setFormFields(input.name,value,false)
    } 


    return (
        <Dialog open={open} onClose={()=>setOpen(false)} className="addressForm">
            <DialogContent>
            <div className="newAddress">
            <div className="newAddressInputs">
                <div className="addressesSpec">
                   <InputField name="Name" label={translator('Inputs','Name')} type='text'
                            requireText={formFields['NameError'] as string}
                            validator={dummy} formFields={formFields} setFormFields={setFormFields}/>
                    <MySelector options={['work','home','others']} name="Type" 
                            requireText={formFields['TypeError'] as string}
                             label={translator('Inputs','Type')} 
                            formFields={formFields} setFormFields={setFormFields}/>
                            <div className="checkBox">

                                <Checkbox onChange={(e:ChangeEvent)=>handleCheckBox(e)} 
                                  checked={Boolean(formFields['IsMain'])} name="IsMain" id="isMain"/>
                                <label htmlFor='isMain'>{translator('ProfilePage','AddressesSection','MainAddress')} </label>
                            </div>
                </div>
                <Divider/>
                 
                <div className="selectionsGroup">
                        <MySelector options={countriesName} name="Country" 
                           requireText={formFields['CountryError'] as string}
                            label={translator('ProfilePage','AddressesSection','ChooseCountry')}
                            formFields={formFields} setFormFields={setFormFields}/>
                        <MySelector options={cities} name="City"
                         requireText={formFields['CityError'] as string} 
                             disabled={!Boolean(formFields['Country'])}
                            label={translator('ProfilePage','AddressesSection','ChooseCity')}
                            formFields={formFields} setFormFields={setFormFields}/>
                    
           
                    <div className="addressesLines">
                        <InputField name="StateCode" label=' State Code' type='text'
                                  requireText={formFields['StateCodError'] as string}
                                    validator={dummy} formFields={formFields} setFormFields={setFormFields}/>
                        <InputField name="PostCode" label=' Post Code' type='number'
                                   requireText={formFields['PostCodeError'] as string}
                                    validator={dummy} formFields={formFields} setFormFields={setFormFields}/>
                        <Divider/>
                        <InputField name="Line1"  requireText={formFields['Line1Error'] as string}
                                   label={translator('ProfilePage','AddressesSection','Address1')} type='text'
                                    validator={dummy} formFields={formFields} setFormFields={setFormFields}/>
                        <InputField name="Line2" label={translator('ProfilePage','AddressesSection','Address2')} type='text'
                                    validator={dummy} formFields={formFields} setFormFields={setFormFields}/>
                        <InputField name="Line3" label={translator('ProfilePage','AddressesSection','Address3')} type='text'
                                    validator={dummy} formFields={formFields} setFormFields={setFormFields}/>
                    </div>
                </div>    
              
            </div>    
           
        </div>
            </DialogContent>
            <DialogActions>
                <div className="newAddressButtons">
                    <MyButton
                      fun={()=>{}}>
                        {translator('Buttons','Save')}
                    </MyButton>
                    <MyButton
                      fun={()=>setOpen(false)}>  
                      {translator('Buttons','Cancle')}
                    </MyButton>
                </div>
            </DialogActions>
        </Dialog>

    )
}
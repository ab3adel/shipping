import {InputField} from '../../../tools/formfields/input/inputfield'
import {MyButton} from '../../../tools/formfields/button/button'
import {MySelector} from '../../../tools/formfields/selector/selector'
import {dummy} from  '../../../tools/validations/validations'
import {Ifield} from '../../../tools/formfields/interfaces'
import {Checkbox,Divider} from '@mui/material'
import { ChangeEvent } from 'react'
import {translator} from '../../../tools/translator'
interface Iprops {undo :Function,setFormFields:Function,formFields:Ifield
                  ,countriesName:string[],cities:string[],doAction:Function,
                countryStatus:string,disableName:boolean}

export const NewAddress =({undo,formFields,setFormFields,disableName
                    ,countriesName,cities,doAction,countryStatus}:Iprops) =>{

    const handleCheckBox =(e:ChangeEvent)=>{
        let input = e.currentTarget as HTMLInputElement
        let value ='0'
        if (input.value) value='1' 
        setFormFields(input.name,value,false)
    } 

    return (
        <div className="newAddress">
            <div className="newAddressInputs">
                <div className="addressesSpec">
                   <InputField name="Name" label={translator('Inputs','Name')} type='text'
                           disabled={!disableName} requireText={formFields['NameError'] as string}
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
            <div className="newAddressButtons">
                <MyButton
                fun={()=>doAction()}>
                    {translator('Buttons','Save')}
                    </MyButton>
                <MyButton
                   fun={()=>undo()}
                   >{translator('Buttons','Cancle')}</MyButton>
            </div>
        </div>
    )
}

interface iWords {[key:string]:string|Element}
interface iWordsContainer {[key:string]:iWords}
let lang = localStorage.getItem('lang')
let arr:string [] =["من موقع الشحن الى باب منزلك","مغلفة جيدا و بشكل أمن","ملتزمون بالاجراءات الصحية"]
if (lang === 'en') arr=['Commited with health measures',"Well packed and securely","We will deliver it to your house"]
export let arr3=arr;
export const translator = (page:string,index:string
                         ,index2?:string,index3?:string,index4?:string,index5?:string)=>{

    let wordsContainer:any= {
        AboutPage: {
            mainTitle: <h2>من نحن</h2>,
            body : {
                section1: <> <p>   في ووديكس نهتم براحة و سلامة عملائنا </p>
                <br/>
             <p>  كل ما عليك فعله هو الانضمام الينا
             </p> </>,
             section2: <p>اختر ما تريد ودعنا نحزمه </p>,
             section3: <p>   نوصله الى وجهتك </p>,
             section4 :  <p>أو نقوم بتخزينه لوقت لاحق </p>,
             buttonTitle:   'الانضمام الينا'

            }

        },
        HomePage :{
            HomePageSection1: {
                body: {
                    section1:<>
                    <h3>  أهلا بك في ووديكس  </h3>
                    <div>اشحن معنا بكل سهولة وامان</div>
                    </>
                }
            },
            HomePageSection2:{
                mainTitle:`
                ابدأ الان بارسال السحنات بخطوات بسيطة
                `,
                buttonTitle:'أبدأ الشحن'
            },
            HomePageSection3:{
                mainTitle:'معرفة موقع شحنتك على الخريطة عن طريق الرقم الخاص',
                buttonTitle:'تتبع شحنتي',

            },
            HomePageSection4 :{
                section1:'يمكنك ايضا تحميل التطبيق الخاص بنا من المتجر',
                speed:'السرعة',
                reliability:'الثقة',
                professionality:'الاحترافية',

            },
            SignUpDialog:{
                mainTitle:'تسجيل الدخول',
                body:{
                    section1:'هل نسيت كلمة المرور؟',
                    section2: <span>لا تملك حساب؟</span> ,
                    buttonTitle:'انضم الينا'
                }
            }
        },
        FaqsPage:{
            mainTitle:   <h3> الأسئلة الشائعة</h3>
        },
        ContactsPage:{
            mainTitle:<h2>تواصل معنا</h2>,
            body:{
                section1:<>
                            <h1>ارسال رسالة مباشرة</h1>
                            <p>يتطلب ذلك تسجيل الدخول</p>
                       </>,
                buttonTitle:'دخول',
                contactsForm:{
                    mainTitle:<h1> تواصل معنا</h1>
                }       
            }
        },
        Navbar :{
            Home:'الرئيسية',
            OrderShipment:'اطلب شحنة',
            AboutUs:'من نحن',
          
            ContactUs:'تواصل معنا'
        },
        PaymentOperations:{
            mainTitle:<h2>عمليات الدفع</h2>,

        },
        ProfilePage:{
            EditImage: <span>  ...تعديل الصورة </span>,
            mainTitle: <h3>حسابي</h3>,
            PersonalInfo:'معلومات شخصية',
            Security:'الأمان',
            BillsArchive:'أرشيف الفواتير',
            MyAddresses:'عناويني',
            buttonTitle:'تسجيل الخروج',
            AddressesSection:{
                mainTitle:<span>عناويني</span>,
                Tabs:{
                    currentAddress:'عنواني الحالي',
                    sentAddresses:'عناوين الارسال',
                    recipientAddresses:'عناوين الاستقبال'
                },
              
                MainAddress:'عنوان رئيسي',
                ChooseCountry:'اختر دولة',
                ChooseCity:'اختر مدينة',
                Address1:'عنوان1',
                Address2:'عنوان2',
                Address3:'عنوان3'

            },
            ArchiveSection:{
                mainTitle:  <p>ارشيف الفواتير</p>,
                Tabs:{
                    Paid:'مدفوعة',
                    UnPaid:'غير مدفوعة',

                },
                detailsDialog:{
                    mainTitle: <h4> تفاصيل الفاتورة</h4>,
                    body:{
                        shipmentNumber:  <p>رقم الشحنة</p>,

                    }
                }
            },
            PersonalInfoSection:{
                mainTitle:'معلومات شخصية',

            },
            SecuritySection:{
                mainTitle:'الأمان',
                body:{
                    section1:<span>التعرف على الوجه</span>,
                    section2:<span>بصمة الاصبع</span>
                }
            }
        },
        ShippingPage:{
            mainTitle: <p> شحنة جديدة</p>,
            body:{
                buttonTitle:'طلب عرض للشحنة',
                ShippingForm:{
                    shipmentType:'نوع الشحنة',
                    Choose:'اختر',
                    Inputs:{
                        senderAddress:'عنوان المرسل',
                        default:'الافتراضي',
                        shippmentDimentions:'أبعاد الشحنة',
                        Lenght:'الطول',
                        Width:'العرض',
                        Height:'الارتفاع',
                        Weight:'الوزن',
                        recipientAddress:'عنوان المستقبل',
                        recievingDate:'تاريخ الاستلام'
                    }
                },
                OffersSection:{
                    companyName:<span>اسم الشركة</span>,
                    offerValue:<span> قيمة العرض</span>,
                    buttonTitle:'اختار العرض'
                },
                OfferDetailsSection:{
                    mainTitle:  <h3> اختيار العرض</h3>,
                    body:{

                        companyName:<span>اسم الشركة</span>,
                        offerValue:<span> قيمة العرض</span>,
                        checkBox:'اضافة تكلفة الى الفاتورة النهائية',
                        Inputs:{
                            sender:'الدفع عن طريق المرسل',
                            reciever:'لدفع عن طريق المستقبل'
                        }
                    }

                }
            }
        },
        SignUpPage:{
            mainTitle:<>
                    <h1>انشاء حساب</h1>
                    <h3>سجل الان بخطوات بسيطة</h3>
                     </>,
            agreement:<>
                          لقد قرأت ووافقت على <span>&nbsp;</span>
                <a>شروط الاستخدام وسياسة الخصوصية  </a>
                للموقع<span>&nbsp;</span>
                      </>         
        },
        Buttons :{
            Save:'حفظ',
            Cancle:'تراجع',
            AddNew:'اضافة جديد',
            Edit:'تعديل',
            Details:'تفاصيل',
            Delete:'حذف',
            SignIn:'تسجيل الدخول',
            SignOut:'تسجيل الخروج',
            Print:'طباعة',
            Sum:'جمع',
            Download:'تحميل',
            ChangePassword:'تغيير كلمة المرور',
            Share:'مشاركة الرابط',
            JoinUs:'انضم الينا',
            Continue:'المتابعة',
            Done:'تم'
        },
        Inputs:{
            Name:'الاسم',
            BirthDate:'تاريخ الميلاد',
            PhoneNumber:'رقم الجوال',
            NickName:'الكنية',
            BankName:'اسم البنك',
            AccountNumber:'رقم الحساب',
            Email:'البريد الالكتروني',
            PassWord:'كلمة المرور',
            NewPassword:'كلمة مرور جديدة',
            PasswordConfirmation:'تأكيد كلمة المرور',
            VerificationCode:'رمز التحقق',
            Type:'النوع',
            Specification:'التخصص'

            

        }


    }

if (lang === 'en') {
    wordsContainer= {
        AboutPage:{
            mainTitle:<h2>Who are we?</h2>,
            body : {
                section1:<>
                           <p>In Wodex we care about our clients' peace and relax </p>
                           <br></br>
                           <p>you have to join us </p>
                </>,
                section2:<p>Choose what you want and let us pack it for you </p>,
                section3:<p>We deliver it to your location</p>,
                section4:<p>Or we store it for you for a next time</p>,
                buttonTitlte:'Join Us'
            }
        },
        HomePage :{
            HomePageSection1: {
                body: {
                    section1:<>
                    <h3>    Welcom in Woodex   </h3>
                    <div>    Shipping with us will be easy & secure</div>
                    </>
                }
            },
            HomePageSection2:{
                mainTitle:`Start now the shipping in simple steps`,
                buttonTitle:' Start now'
            },
            HomePageSection3:{
                mainTitle:' Locate your shipment on map by special number',
                buttonTitle:'Track my shipment ',
    
            },
            HomePageSection4 :{
                section1:'You can also download our app in the store',
                speed:'Speed',
                reliability:'Reliability',
                professionality:'Professionality',
    
            },
            SignUpDialog:{
                mainTitle:' Sign Up',
                body:{
                    section1:'Forget your password ?',
                    section2: <span>Don't have an account yet?  </span> ,
                    buttonTitle:'Join us'
                }
            }
        },
        FaqsPage:{
            mainTitle: <h3> Common Questions </h3>
        },
        ContactsPage:{
            mainTitle:<h2>Contact with us</h2>,
            body:{
                section1:<>
                            <h1>  Send direct message</h1>
                            <p> you have to sign in </p>
                       </>,
                buttonTitle:'Sign in' ,
                contactsForm :{
                    mainTitle:<h1>Contact Us</h1>,

                }      
            }
        },
        Navbar :{
            Home:'Home',
            OrderShipment:'Order Shipment ',
            AboutUs:' About Us',
            SignIn:'Sign In',
            SignOut:'Sign Out' ,
            ContactUs:' Contact Us'
        },
        PaymentOperations:{
            mainTitle:<h2>Payment Operations</h2>,
            
        },
        ProfilePage:{
            EditImage: <span>  ... edit image </span>,
            mainTitle: <h3>My Profile</h3>,
            PersonalInfo:' Personal Info',
            Security:'Security',
            BillsArchive:' Bills Archive',
            MyAddresses:'My Addresses',
           
            AddressesSection:{
                mainTitle:<span>My Addresses</span>,
                Tabs:{
                    currentAddress:' Current Address',
                    sentAddressses:'Sent Addresses',
                    recipientAddresses:'Recipients Addresses'
                },
              
                MainAddress:' Main Address',
                ChooseCountry:' Choose Country',
                ChooseCity:' Choose City',
                Address1:'Address1',
                Address2:'Address2',
                Address3:'Address3'

            },
            ArchiveSection:{
                mainTitle:  <p>Bills Archive</p>,
                Tabs:{
                    Paid:'Paid',
                    UnPaid:'UnPaid ',

                },
                detailsDialog:{
                    mainTitle: <h4>The Bill Details</h4>,
                    body:{
                        shipmentNumber:  <p>Shipment Number </p>,

                    }
                }
            },
            PersonalInfoSection:{
                mainTitle:'Personal Info',

            },
            SecuritySection:{
                mainTitle:'The Security',
                body:{
                    section1:<span>  Face Recognition</span>,
                    section2:<span> Finger Print</span>
                }
            }
        },
        ShippingPage:{
            mainTitle: <p>New Shipment</p>,
            body:{
                buttonTitle:'Ask for Offer',
                shippingForm:{
                    shipmentType:'Shipment Type',
                    Choose:'Choose',
                    Inputs:{
                        senderAddress:'Sender Address',
                        default:'Default',
                        shippmentDimentions:'Shipment Dimension',
                        Lenght:'Lenght',
                        Width:'Width',
                        Height:'Height',
                        Weight:'Weight',
                        recipientAddress:'Recipient Address',
                        recievingDate:'Recieving Date'
                    }
                },
                OffersSection:{
                    companyName:<span>Company Name</span>,
                    offerValue:<span> Offer Value</span>,
                    buttonTitle:' Choose Offer'
                },
                OfferDetailsSection:{
                    mainTitle:  <h3> Choosing The Offer</h3>,
                    body:{
                        companyName:<span>Company Name</span>,
                        offerValue:<span> Offer Value</span>,                       
                         checkBox:'Adding the cost to the final bill',
                        Inputs:{
                            sender:'Paying via the sender',
                            reciever:'Paying via the recipient'
                        }
                    }

                }
            }
        },
        SignUpPage:{
            mainTitle:<>
                    <h1>Create Account </h1>
                    <h3> Sign up now with a simple steps</h3>
                     </>,
            agreement:<>
                  I have read and agree to <span>&nbsp;</span>
                <a>  the terms and conditions    </a>
                to this site<span>&nbsp;</span>
                     </>         
        },
        Buttons :{
            Save:'Save',
            Cancle:'Cancle',
            AddNew:'Add New',
            Edit:'Edit',
            Details:'Details',
            Delete:'Delete',
            SignIn:'Sign In',
            SignOut:'Sign Out',
            Print:'Print',
            Sum:'Sum',
            Download:'Downlaod',
            ChangePassword:'Change the password',
            Share:'Share Link',
            JoinUs:'Join Us',
            Continue:'Continue',
            AddAddress:'Address',
            Done:'Done'
        },
        Inputs:{
            Name:'Name',
            BirthDate:'Birth Date',
            PhoneNumber:'Phone Number',
            NickName:'Nick Name',
            BankName:'Banck Name',
            AccountNumber:'Account Number',
            Email:'Email',
            Password:'PassWord ',
            NewPassword:'New Password',
            PasswordConfirmation:'Password Confirmation',
            VerificationCode:'Verfication Code',
            Type:'Type',
            Specification:'Specification',
         

            

        }

    }
   

}
  
let ele = wordsContainer[page][index]
if (index2) {
    ele=wordsContainer[page][index][index2]
}
if (index3 && index2) {
    ele=wordsContainer[page][index][index2][index3]
}
if (index2 && index3 && index4) {
    ele=wordsContainer[page][index][index2][index3][index4]
}
if (index2 && index3 && index4 && index5) {
    ele=wordsContainer[page][index][index2][index3][index4][index5]
}
    return ele
}
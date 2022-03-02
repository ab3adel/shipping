export const Apis = {

    Register:'/register',
    Login:'/login',
    Logout:'/logout',
    BankUpdate:(id:number)=>`/customers/${id}`,
    Attachment:'/attachments',
    UserName:(id:number)=>`/users/${id}`,
    Profild :'/profile',
    Faqs:'/faq',
    ContactUs:'/contacts',
    Recipients:'/reciepients',
    ShowUpdateDeleteRecipients:(id:number)=>`/reciepients/${id}`,
    Countries:'/shipping/countries',
    Cities:`/shipping/cities`,
    Country:'/shipping/country'

}
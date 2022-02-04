export const Apis = {

    Register:'/register',
    Login:'/login',
    Logout:'/logout',
    BankUpdate:(id:number)=>`/customers/${id}`,
    Attachment:'/attachments',
    UserName:(id:number)=>`/users/${id}`,
    Profild :'/profile',
    Faqs:'/faq',
    ContactUs:'/contacts'
}

import * as yup from 'yup';

export const validationSchema = [
    
       yup.object({
       fullName: yup.string().max(28).required('Full name is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
       address1: yup.string().max(25).required('Address is required'),
       city: yup.string().max(14).required('City is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
       zip: yup.string().max(10).required('Zip is required').matches(/^[0-9]+$/, "Must be only digits"),
       country: yup.string().max(14).required('Country is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")

}),

yup.object(),
yup.object({
      nameOnCard: yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
})

]



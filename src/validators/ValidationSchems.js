import * as yup from 'yup';


export default {
    LoginSchem: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    }),
    RegistrationSchem: yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required().oneOf([yup.ref('password'),null]),
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        displayname: yup.string().required(),
        role: yup.string().matches(/(customer|creator)/).required()
    })
}

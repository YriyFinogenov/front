import yup from 'yup';


export default {
    LoginSchem: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required()
    })
}
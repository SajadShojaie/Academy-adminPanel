import { Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label, Media } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PostApi from "../../../../mycore/Services/api/PostApi/PostApi"
import { toast } from 'react-toastify'
import UpdateApi from '../../../../mycore/Services/api/UpdateApi/UpdateApi'

const FormValidation = ({title, pageData, history}) => {
  
  const formSchema = Yup.object().shape({
    fullName: Yup.string().required('نباید خالی باشد'),
    email: Yup.string().email('Invalid email').required('نباید خالی باشد'),
    password: pageData ? Yup.number() : Yup.number().required("نباید خالی باشد").min(8, "حداقل 8 کارکتر باید باشد"),
    phoneNumber: Yup.number().required('نباید خالی باشد'),
    birthDate: Yup.date().required('نباید خالی باشد'),
    nationalId: Yup.number().min(10, 'کدملی نامعتبر است').required('نباید خالی باشد'),
    profile: Yup.string().required('نباید خالی باشد')
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className="text-primary">{title}</CardTitle>
      </CardHeader>

      <CardBody>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password:"",
            phoneNumber: '',
            birthDate: '',
            nationalId: '',
            profile: ''
          }}
          validationSchema={formSchema}
          onSubmit={ async (values) => {
            //call api
            if (pageData) {
              const updateRes = await UpdateApi(`http://localhost:5000/api/student/${pageData._id}`, {
                fullName: values.fullName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                birthDate: values.birthDate,
                nationalId: values.nationalId,
                profile: values.profile
              })

              if (updateRes.status === 200) {
                setTimeout(() => {
                  history.goBack(-1)
                }, 1000)
              }
              
            } else {
              const res = await PostApi("http://localhost:5000/api/auth/register", values)
              if (res.status === 200) {
                toast.success("دانشجو با موفقیت اضافه شد")
              }
            }
          }}
        >
          {({ errors, touched, values, setFieldValue, handleReset }) => (
            <Form>
              <FormGroup>
                <Label for='required'>نام کاربری</Label>
                <Field
                  name='fullName'
                  id='fullName'
                  placeholder={pageData ? pageData.fullName : "example"}
                  className={`form-control ${errors.fullName && touched.fullName && 'is-invalid'}`}
                />
                <ErrorMessage name='fullName' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='email'>ایمیل</Label>
                <Field
                  placeholder={pageData ? pageData.email : "example@example.com"}
                  type='email'
                  name='email'
                  id='email'
                  className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                />
                <ErrorMessage name='email' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='password'>رمز عبور</Label>
                <Field 
                placeholder={pageData ? "غیر قابل تغییر" : "باید بیشتر از 8 رقم باشد"}
                disabled={pageData} 
                name='password' 
                id='password'
                 
                className={`form-control ${errors.password && touched.password && 'is-invalid'}`} 
                />
                <ErrorMessage name='password' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='number'>شماره ی همراه</Label>
                <Field
                  placeholder={pageData ? pageData.phoneNumber : "09........"}
                  name='phoneNumber'
                  id='phoneNumber'
                  className={`form-control ${errors.phoneNumber && touched.phoneNumber && 'is-invalid'}`}
                />
                <ErrorMessage name='phoneNumber' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='date'>تاریخ تولد</Label>
                <Field
                  placeholder={pageData ? pageData.birthDate : "روز/ماه/سال"}
                  type='text'
                  name='birthDate'
                  id='birthDate'
                  className={`form-control ${errors.birthDate && touched.birthDate && 'is-invalid'}`}
                />
                <ErrorMessage name='birthDate' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='nationalId'>کدملی</Label>
                <Field
                  placeholder={pageData ? pageData.nationalId : "باید حداقل 10 رقم باشد"}
                  name='nationalId'
                  id='nationalId'
                  className={`form-control ${errors.nationalId && touched.nationalId && 'is-invalid'}`}
                />
                <ErrorMessage name='nationalId' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='profile'>عکس پروفایل</Label>
                <Field
                  type="file"
                  name='profile'
                  id='profile'
                  value={""}
                  onChange={(e) => setFieldValue("profile", e.target.files[0].name)}
                  accept="svg,PNG,jpg"
                  className={`d-none form-control ${errors.profile && touched.profile && 'is-invalid'}`}
                />
                {values.profile ? <Label for='profile' className="d-block mt-1 btn btn-info w-25 ">با موفقیت آپلود شد</Label> : <Label for='profile' className="d-block mt-1 btn btn-success w-25 ">برای انتخاب عکس کلیک کنید</Label>}
                
                <ErrorMessage name='profile' component='div' className='field-error text-danger' />
              </FormGroup>

              <div className="d-flex justify-content-center mt-2">
              <Button.Ripple color='success' type='submit' className="mx-1">
                ثبت اطلاعات
              </Button.Ripple>
              <div className='btn btn-danger' onClick={() => handleReset()}>
                لغو تغییرات 
              </div>
              </div>

            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}
export default FormValidation

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label, textarea } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PostApi from "../../../../mycore/Services/api/PostApi/PostApi"
import { toast } from 'react-toastify'
import UpdateApi from '../../../../mycore/Services/api/UpdateApi/UpdateApi'

const formSchema = Yup.object().shape({
  title: Yup.string().min(4, "باید بیشتر از 4 کارکتر باشد").required('نباید خالی باشد'),
  category: Yup.string().required('نباید خالی باشد'),
  text: Yup.string().required("نباید خالی باشد"),
  image: Yup.string().required('نباید خالی باشد')
})

const AddBlogForm = ({maintitle, pageData, history}) => {
  //loading
  const [ispending, setIspending] = useState(false)
  return (
    <Card>

      {pageData ? (
        <div className='d-flex justify-content-center mt-2'>
          <img src={require(`../../../../assets/images/my_img/${pageData.image}`).default} alt=""
            style={{width:"55%", borderRadius:"40px"}} />
        </div>
      ) : null}

      <CardHeader>
        <CardTitle tag='h4' className="text-primary">{maintitle}</CardTitle>
      </CardHeader>

      <CardBody>
        <Formik
          initialValues={{
            title: pageData ? pageData.title : "",
            category: pageData ? pageData.category : "",
            image: pageData ? pageData.image : "",
            text: pageData ? pageData.text : ""      
          }}
          validationSchema={formSchema}
          onSubmit={ async (values) => {
            setIspending(true)

            //call api
            if (pageData) {
              const updateRes = await UpdateApi(`http://localhost:5000/api/news/${pageData._id}`, values)
              if (updateRes.status === 200) {
                setTimeout(() => {
                  history.goBack(-1)
                }, 1000)
              }

            } else {
              const res = await PostApi("http://localhost:5000/api/news/", values)
              if (res.status === 200) {
                toast.success("مقاله با موفقیت اضافه شد")
              }
              setIspending(false)
            }
          }}
        >
          {({values, errors, touched, handleReset, setFieldValue }) => (
            <Form>
              <FormGroup>
                <Label for='title'>تیتر مقاله</Label>
                <Field
                  name='title'
                  id='title'
                  placeholder={pageData ? pageData.title : ""}
                  className={`form-control ${errors.title && touched.title && 'is-invalid'}`}
                />
                <ErrorMessage name='title' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='text'>توضیحات اصلی</Label>
                <textarea
                  name='text'
                  id='text'
                  placeholder={pageData ? pageData.text : ""}
                  value={values.text}
                  onChange={(e) => setFieldValue("text", e.target.value)}
                  style={{minHeight:"170px"}}
                  className={`form-control ${errors.text && touched.text && 'is-invalid'}`}
                />
                <ErrorMessage name='text' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='category'>نوع مقاله</Label>
                <Field as="select" className='form-control ' name="category" id='category'>
                  <option value="">انتخاب کنید...</option>
                  <option value="article">مقاله</option>
                  <option value="news">خبر</option>
                </Field>
                <ErrorMessage name='category' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='image'>عکس مقاله</Label>
                <Field
                  type="file"
                  name='image'
                  id='image'
                  value={""}
                  onChange={(e) => setFieldValue("image", e.target.files[0].name)}
                  accept="svg,PNG,jpg"
                  className={`d-none form-control ${errors.profile && touched.profile && 'is-invalid'}`}
                />
                {values.image ? <Label for='image' className="d-block mt-1 btn btn-info w-25 ">با موفقیت آپلود شد</Label> : <Label for='image' className="d-block mt-1 btn btn-success w-25 ">برای انتخاب عکس کلیک کنید</Label>}
                
                <ErrorMessage name='image' component='div' className='field-error text-danger' />
              </FormGroup>

              <div className="d-flex justify-content-center mt-2">
                <Button.Ripple type='submit' className="btn btn-success mx-1" >
                  {ispending ? "در حال ارسال" : "ثبت اطلاعات"}
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
export default AddBlogForm

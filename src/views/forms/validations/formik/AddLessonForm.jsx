import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label, textarea } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PostApi from "../../../../mycore/Services/api/PostApi/PostApi"
import { toast } from 'react-toastify'
import UpdateApi from '../../../../mycore/Services/api/UpdateApi/UpdateApi'

const formSchema = Yup.object().shape({
  lessonName: Yup.string().min(4, "باید بیشتر از 4 کارکتر باشد").required('نباید خالی باشد'),
  topics: Yup.string().required('نباید خالی باشد'),
  description: Yup.string().required("نباید خالی باشد"),
  image: Yup.string().required('نباید خالی باشد'),
  category: Yup.string().required('نباید خالی باشد')
})

const AddLessonForm = ({maintitle, categories, pageData, history}) => {
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
        <CardTitle tag='h4'className="text-primary">{maintitle}</CardTitle>
      </CardHeader>

      <CardBody>
        <Formik
          initialValues={{
            lessonName: pageData ? pageData.lessonName : "",
            topics: pageData ? pageData.topics : "",
            description: pageData ? pageData.description : "",
            image: "",          
            category:  pageData ? pageData.category : ""
          }}
          validationSchema={formSchema}
          onSubmit={ async (values) => {
            setIspending(true)

            //call api
            if (pageData) {
              const updateRes = await UpdateApi(`http://localhost:5000/api/lesson/${pageData._id}`, values)
              
              if (updateRes.status === 200) {
                setTimeout(() => {
                  history.goBack(-1)
                }, 1000)
              }
              
              setIspending(false)
            } else {
              const res = await PostApi("http://localhost:5000/api/lesson/add", values)
              if (res.status === 200) {
                toast.success("ترم با موفقیت اضافه شد")
              }
              setIspending(false)
            }
          }}
        >
          {({values, errors, touched, handleReset, setFieldValue, handleChange }) => (
            <Form>
              <FormGroup>
                <Label for='lessonName'>نام دوره</Label>
                <Field
                  name='lessonName'
                  id='lessonName'
                  placeholder={pageData ? pageData.lessonName : ""}
                  className={`form-control ${errors.lessonName && touched.lessonName && 'is-invalid'}`}
                />
                <ErrorMessage name='lessonName' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='topics'>هشتگ ها</Label>
                <Field
                  type='text'
                  name='topics'
                  id='topics'
                  placeholder={pageData ? pageData.topics : ""}
                  onChange={(e) => setFieldValue("topics", [e.target.value])}
                  className={`form-control ${errors.topics && touched.topics && 'is-invalid'}`}
                />
                <ErrorMessage name='topics' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='description'>توضیحات دوره</Label>
                <textarea
                  name='description'
                  id='description'
                  style={{minHeight:"170px"}}
                  className={`form-control ${errors.description && touched.description && 'is-invalid'}`}
                  value={values.description}
                  onChange={handleChange}
                  placeholder={pageData ? pageData.description : ""}
                />
                <ErrorMessage name='description' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='category'>سرفصل مربوط</Label>
                <Field as="select" className='form-control ' name="category" id='category'>
                  <option value="">انتخاب کنید...</option>
                  {
                    categories.map((category) => {
                      return (
                        <option value={category.id} key={category.id}>{category.name}</option>
                      )
                    })
                  }
                </Field>
                <ErrorMessage name='category' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='image'>عکس دوره</Label>
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
export default AddLessonForm

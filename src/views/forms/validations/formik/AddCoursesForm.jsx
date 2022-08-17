import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label, Media } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PostApi from "../../../../mycore/Services/api/PostApi/PostApi"
import UpdateApi from "../../../../mycore/Services/api/UpdateApi/UpdateApi"
import { toast } from 'react-toastify'

const formSchema = Yup.object().shape({
  title: Yup.string().min(4, "باید بیشتر از 4 کارکتر باشد").required('نباید خالی باشد'),
  cost: Yup.number().required('نباید خالی باشد'),
  endDate: Yup.date().required("نباید خالی باشد"),
  startDate: Yup.date().required('نباید خالی باشد'),
  capacity: Yup.number().max(100, "حداکثر 100 نفر مجاز است").min(1, "حداقل یک نفر باید باشد").required('نباید خالی باشد'),
  teacher: Yup.string().required('نباید خالی باشد'),
  lesson: Yup.string().required('نباید خالی باشد')
})

const AddCoursesForm = ({maintitle, teachers, lessons, pageData, history}) => {

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className="text-primary">{maintitle}</CardTitle>
      </CardHeader>

      <CardBody>
        <Formik
          initialValues={{
            title: pageData ? pageData.title : "",
            cost: pageData ? pageData.cost : "",
            endDate: pageData ? pageData.endDate.slice(0, 10) : "",
            startDate: pageData ? pageData.startDate.slice(0, 10) : "",
            capacity: pageData ? pageData.capacity : "",
            teacher: pageData ? pageData.teacher._id : "",
            lesson: pageData ? pageData.lesson._id : ""
          }}
          validationSchema={formSchema}
          onSubmit={ async (values) => {
            //call api
            if (pageData) {
              const updateRes = await UpdateApi(`http://localhost:5000/api/course/${pageData._id}`, values)
              
              if (updateRes.status === 200) {
                setTimeout(() => {
                  history.goBack(-1)
                }, 1000)
              }
            } else {
              const res = await PostApi("http://localhost:5000/api/course/", values)
              if (res.status === 200) {
                toast.success("ترم با موفقیت اضافه شد")
              }
            }

          }}
        >
          {({errors, touched, handleReset }) => (
            <Form>
              <FormGroup>
                <Label for='title'>موضوع</Label>
                <Field
                  name='title'
                  id='title'
                  placeholder={pageData ? pageData.title : ""}
                  className={`form-control ${errors.title && touched.title && 'is-invalid'}`}
                />
                <ErrorMessage name='title' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='cost'>هزینه</Label>
                <Field
                  type='text'
                  name='cost'
                  id='cost'
                  placeholder={pageData ? pageData.cost : ""}
                  className={`form-control ${errors.cost && touched.cost && 'is-invalid'}`}
                />
                <ErrorMessage name='cost' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='startDate'>تاریخ شروع</Label>
                <Field
                  name='startDate'
                  id='startDate'
                  placeholder={pageData ? pageData.startDate.slice(0, 10) : ""}
                  className={`form-control ${errors.startDate && touched.startDate && 'is-invalid'}`}
                />
                <ErrorMessage name='startDate' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='endDate'>تاریخ پایان</Label>
                <Field  name='endDate' id='endDate' placeholder={pageData ? pageData.endDate.slice(0, 10) : ""} className={`form-control ${errors.password && touched.password && 'is-invalid'}`} />
                <ErrorMessage name='endDate' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='capacity'>ظرفیت</Label>
                <Field
                  type='text'
                  name='capacity'
                  id='capacity'
                  placeholder={pageData ? pageData.capacity : ""}
                  className={`form-control ${errors.capacity && touched.capacity && 'is-invalid'}`}
                />
                <ErrorMessage name='capacity' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='teacher'>استاد</Label>
                <Field as="select" className='form-control ' name="teacher" id='teacher'>
                  <option value="">انتخاب کنید...</option>
                  {
                    teachers.map((teacher) => {
                      return (
                        <option value={teacher._id} key={teacher._id}>{teacher.fullName}</option>
                      )
                    })
                  }
                </Field>
                <ErrorMessage name='teacher' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label for='lesson'>دوره</Label>

                <Field as="select" className='form-control ' name="lesson" id='lesson'>
                  <option value="">انتخاب کنید...</option>
                  {
                    lessons.map((lesson) => {
                      return (
                        <option  value={lesson._id} key={lesson._id}>{lesson.lessonName}</option>
                      )
                    })
                  }
                </Field>
                <ErrorMessage name='lesson' component='div' className='field-error text-danger' />
              </FormGroup>

              <div className="d-flex justify-content-center mt-2">
              <Button.Ripple color='success' type='submit' className="mx-1" >
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
export default AddCoursesForm

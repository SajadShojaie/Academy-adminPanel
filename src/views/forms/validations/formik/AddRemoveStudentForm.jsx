import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Button, Label, textarea } from 'reactstrap'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import PostApi from "../../../../mycore/Services/api/PostApi/PostApi"
import { toast } from 'react-toastify'
import GetApi from '../../../../mycore/Services/api/GetApi/GetApi'

const formSchema = Yup.object().shape({
  student: Yup.string().required('نباید خالی باشد'),
  courseId: Yup.string().required('نباید خالی باشد')
})

const AddRemoveStudentForm = ({ allStudent, allCourses}) => {
  //get specific student and his info
  const [StudentId, setStudentId] = useState(null)
  const [StudentInfo, setStudentInfo] = useState(null)
  if (StudentId !== null) {
    GetApi(`http://localhost:5000/api/student/${StudentId}`)
      .then((res) => setStudentInfo(res))
    
      setStudentId(null)
  } 

  //show ro unshow of lasst field
  const [show, setShow] = useState(false)

  //delete student from courses
  const [coursesId, setCoursesId] = useState(null)
  if (coursesId !== null && StudentInfo !== null) {
    const res = PostApi(`http://localhost:5000/api/course/removeStudentFromCourse/${StudentInfo._id}`, {
      courseId:coursesId
    })

    res.then((e) => e.status === 200 && toast.success("با موفقیت حذف شد"))
    setCoursesId(null)
  }

  //add student to courses
  const [CoursesIdAdd, setCoursesIdAdd] = useState(null)
  if (CoursesIdAdd !== null && StudentInfo !== null) {
    const res = PostApi(`http://localhost:5000/api/course/addStudentToCourse/${StudentInfo._id}`, {
      courseId:CoursesIdAdd
    })

    res.then((e) => e.status === 200 && toast.success("با موفقیت اضافه شد"))
    setCoursesIdAdd(null)
  }

  return (
    <Card>
      <CardBody>
        <h4 className='text-primary' style={{fontWeight:"bold"}}>
          حذف دانشجو از ترم
        </h4>

        <Formik
          initialValues={{
            student: "",
            courseId:""
          }}
          validationSchema={formSchema}
          onSubmit={ async (values) => {
            console.log(values)
          }}
        >
          {({values, setFieldValue }) => (
            <Form>

              <FormGroup>
                <Label for='student'>انتخاب دانشجو</Label>
                <Field as="select" className='form-control ' onChange={(e) => {
                  setStudentId(e.target.value)
                  setFieldValue("student", e.target.value)

                }} name="student" id='student'>
                  <option value="">انتخاب کنید...</option>
                  {
                    allStudent.map((student) => {
                      return <option key={student._id} value={student._id}>{student.fullName}</option>
                    })
                  }
                </Field>
                <ErrorMessage name='student' component='div' className='field-error text-danger' />
              </FormGroup>

              <FormGroup>
                <Label className="mt-2">دوره های دانشجو : </Label>
                {StudentInfo ? StudentInfo.courses.length ? StudentInfo.courses.map((course) => (
                  <div key={course._id} className='d-flex justify-content-around align-items-center w-50'>
                    <Field  value={course.title}  disabled className='form-control mt-1' />
                    <div className='btn btn-danger mt-1 mx-2' onClick={() => setCoursesId(course._id)}>حذف</div>
                  </div>
                )) : (
                  <p style={{fontSize:"13px", fontWeight:"bold"}} className="text-warning mt-1">
                    دانشجو دوره ای را تا به حال ثبت نام نکرده است
                  </p>
                ) : (
                  <p style={{fontSize:"13px", fontWeight:"bold"}} className=" mt-1">
                    لطفا ابتدا دانشجو مورد نظر را انتخاب کنید
                  </p>
                )}
              </FormGroup>

              { StudentInfo  && (
                <>
                  <h4 className='text-primary mt-5' style={{fontWeight:"bold"}}>
                    افزودن دانشجو به ترم
                  </h4>
                  <Button.Ripple className={`btn mt-3 ${show ? "d-none" : "btn-success"}`} onClick={() => setShow(!show)}>
                    افزودن به ترم
                  </Button.Ripple>
                  {show && (
                    <FormGroup>
                      <Label for='courseId' className="mt-2">انتخاب ترم</Label>
                      <Field as="select" className='form-control ' name="courseId" id='courseId'>
                        <option value="">انتخاب کنید...</option>
                        {
                          allCourses.map((course) => {
                            return <option key={course._id} value={course._id}>{course.title}</option>
                          })
                        }
                      </Field>
                    <ErrorMessage name='courseId' component='div' className='field-error text-danger' />
                    
                    <button  className="btn btn-success mt-1" onClick={() => setCoursesIdAdd(values.courseId)}>افزودن</button>
                    <button type="button" className="btn btn-danger mt-1 mx-1" onClick={() => setShow(!show)}>بیخیال</button>
                    </FormGroup>
                  )}
                </>
              )}
                
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  )
}
export default AddRemoveStudentForm

import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const StatsCard = ({ cols, allCourses, allLesson, allNews, allArticle }) => {
  const data = [
    {
      title: 'تعداد ترم ها ',
      subtitle: allCourses.length,
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: 'تعداد دوره ها ',
      subtitle: allLesson.length,
      color: 'light-success',
      icon: <DollarSign size={24} />
    },
    {
      title: 'تعداد اخبار',
      subtitle: allNews.length,
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: 'تعداد مقالات ',
      subtitle: allArticle.length,
      color: 'light-info',
      icon: <User size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      return (
        <Col
          key={index}
          className="`mb-2">
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <h5 style={{fontWeight:"bold", color:"#b200e8b3"}}>آخرین آمار سایت شما : </h5>
        <CardText className='card-text font-small-2 mr-25 mb-0'>اخرین اپدیت چند دقیقه قبل</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard

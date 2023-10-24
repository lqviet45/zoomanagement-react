import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React ,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllNews = () => {

  const [news, setNews] = useState([])
  const [searchString, setSearchString] = useState('')
  const [searchBy, setSearchBy] = useState('Title')
  const [totalPage, setTotalPage] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const navagate = useNavigate()

  const handleNavigation = (item) => {
    navagate(`/news/${item.id}`, { state: item })
  }

  useEffect(() => {
    fetch(`https://localhost:7193/api/News?pageNumber=${pageNumber}&searchBy=${searchBy}&searchString=${searchString}`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setNews(data.pagingList);
        setTotalPage(data.totalPages);
      })
      .catch(error =>
        console.error(error)
      )

  }, [searchBy, searchString, pageNumber]);

  return (
    <>
      <Row xs={1} md={2} className="g-4">

        {news.map((item, idx) => {
          return (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={item.thumnail} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  );
}

export default AllNews;
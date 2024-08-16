import { useEffect, useState } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Header, Footer, ProductItem, PaginationContainer } from './Components';
import axios from 'axios';


const App = () => {
  const [readmore, setReadMore] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [pagination, setPagination] = useState({
    step: 1,
    last: 0,
    count: 8,
    array: []
  });

  const updatePagination = (products) => {
    const last = Math.ceil(products.length / pagination.count);
    if (products.length >= (pagination.count * 3)) setPagination(prev => { return { ...prev, last, step: 1, array: [1, 2, 3] } });
    else if (products.length > pagination.count) {
      const array = [];
      for (let i = 1; i <= Math.ceil(products.length / pagination.count); i++) array.push(i);
      setPagination(prev => { return { ...prev, last, step: 1, array } });
    }
    else setPagination(prev => { return { ...prev, last, step: 1, array: [] } });
  }

  const getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        const products = res.data.products;
        setProducts(products);
        updatePagination(products);
      })
      .catch(() => { });
  }

  useEffect(() => {
    getProducts();
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => { });
  }, []);

  const handleSearchValue = (e) => {
    e.preventDefault();
    axios.get("https://dummyjson.com/products/search?q=" + searchValue)
      .then(res => {
        const products = res.data.products;
        setProducts(products);
        updatePagination(products);
      })
      .catch(() => { });
  }

  const handleProductCategory = (e) => {
    const value = e.target.value;
    if (categoryType !== value) {
      setCategoryType(value);
      if (value === "Select Category") getProducts();
      else axios.get("https://dummyjson.com/products/category/" + value)
        .then(res => {
          const products = res.data.products;
          setProducts(products);
          updatePagination(products);
        })
        .catch(() => { });
    }
  }

  const handlePagination = (step, stage) => {
    const { array, last } = pagination;
    if (array.includes(step)) setPagination(prev => { return { ...prev, step, array } });
    else if (step && step <= last) {
      if (stage === "prev") {
        array.pop();
        array.unshift(step);
      }
      else if (stage === "next") {
        array.shift();
        array.push(step);
      }
      setPagination(prev => { return { ...prev, step, array } });
    }
  }

  return (<>
    <Container>
      <Header {...{ setSearchValue, handleSearchValue }} />
      <article>
        <h4>Lorem Ipsum</h4>
        <p className='d-inline'>Slash Sales kicks off in June, offering up to 80% off on all products{readmore && <span>. Don’t miss this limited-time opportunity to grab incredible deals across our entire range. Whether you’re looking for the latest gadgets, stylish apparel, or home essentials, now is the perfect time to save big. Shop early to secure the best discounts and get the items you’ve been eyeing at unbeatable prices. Remember, the Slash Sales event won’t last long, so act fast to take advantage of these massive savings. Mark your calendar and get ready for extraordinary bargains starting in June!</span>}</p>
        <span className='read-more' onClick={() => setReadMore(!readmore)}>{readmore ? "Read Less" : "Read More"}</span>
      </article>
      <div className='row mt-4 category-select'>
        <div className='col-6 col-lg-3 p-0 pe-md-3'>
          <Form.Select onChange={handleProductCategory}>
            <option>Select Category</option>
            {categories.map(dt =>
              <option key={dt.name} value={dt.slug}>{dt.name}</option>
            )}
          </Form.Select>
        </div>
      </div>
      <div className='products'>
        <Row className='gy-3 gx-4'>
          {products.slice((pagination.step - 1) * pagination.count, pagination.step * pagination.count).map(data =>
            <Col className='col-6 col-lg-3' key={data.id}>
              <ProductItem product={data} isFav={false} />
            </Col>)}
        </Row>
      </div>
      {pagination.array.length > 0 && <PaginationContainer {...{ pagination, handlePagination }} />}
    </Container>
    <Footer />
  </>
  );
}

export default App;

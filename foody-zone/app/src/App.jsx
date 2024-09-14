import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL = 'http://localhost:9000';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState();

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);
        const json = await response.json();     
        setData(json);
        setLoading(false);
        setFilteredData(json);
      } catch (error) {
          setLoading(false);
          setError("Unable to fetch data!!");
      }
    };
    fetchFoodData();
  }, []);
  
  const searchFood = (e) => {
    const searchValue = e.target.value;

    if(searchValue === ''){
      setFilteredData(null);
    }

    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  } ;

  const filteredFood = (type) => {
    if(type === 'all'){
      setFilteredData(data);
      setSelectedBtn('all');
      return;
    };

    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns  = [
    {
      name: 'All',
      type: 'all'
    },
    {
      name: 'Breakfast',
      type: 'Breakfast'
    },
    {
      name: 'Lunch',
      type: 'Lunch'
    },
    {
      name: 'Dinner',
      type: 'Dinner'
    }

  ];

  return (
  <>
    <Container>
      <TopSection>
        <div className='logo'>
          <img src='./Foody Zone.png' alt='logo' />
        </div>
        <div className='search'>
          <input onChange={searchFood} type='text' placeholder='Search Food...'/>
        </div>
      </TopSection>
      <FilterSection>
        {filterBtns.map((value) => (
          <Button 
            isSelected = {selectedBtn === value.type}
            key={value.name} onClick={() => filteredFood(value.type)}>
            {value.name}
          </Button>
        ))}
      </FilterSection>
    </Container>
    <SearchResult 
      data={filteredData} 
      loading={loading}
      error={error}
    />
  </>
  );

};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 140px;
    padding: 16px;

    .search {
      input{
        border: 1px solid red;
        background: transparent;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-size: 16px;
        height: 40px;
        width: 100%;
        outline: red;
      }
    }

    .search input::placeholder{
      color: white;
    }

    @media (0 < width < 600px){
      flex-direction: column;
      height: 120px;
    }
`;

const FilterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  color: white;
  background-color: ${({isSelected}) => (isSelected ? '#e21c1c' : '#ff4343')};
  outline : 1px solid ${({isSelected}) => (isSelected ? '#f7f7f7' : '#ff4343')};
  border: none;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;

  &:hover{
    background-color: #f01919;
  }
`;
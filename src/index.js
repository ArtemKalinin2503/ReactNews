import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import _ from 'lodash';
import News from './components/News';

//Основной компонент 
class App extends Component {

  //Создадим конструктор в котором объявим state (состояния) с данными (в данном случае это новости)
  constructor(props) {
    super(props)
    this.state={
        news: [
            {
              id: 1,
              description: 'новость 1',
            },
            {
              id: 2,
              description: 'новость 2',
            }
        ]
    }
  };
  
  render() {
  	const listNews = this.state.news.map((item, index) => { //С помощью метода map будем выводить компонент News (столько раз сколько записей в самом массиве объектов News)
			return <News
                //С помощью атрибутов прокинем данные (state) для доступа к этим данным через props из массива item (в который передали массив объектов News)
				        key={index}
				        id={item.id} 
				        description={item.description}
			       />;
		});

		return <div className="wrapper-component-app">
              <div className="wrapper-component-user">
                  {listNews} {/*вывод данных*/}
              </div>
           </div>       
	}
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


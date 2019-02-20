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

  //Функция которая будет удалять Новость
  deleteBlock = (index) => { //index это индекс экземпляра нашего компонента (в данном случае компонента News)
    let arrNews = this.state.news; //Создадим новый массив в который передадим наш массив объектов news
    arrNews.splice(index, 1); //С помощью метода splice (первый параметр это идекс элемента, а второй парметр это каличество элементов которые нужно удалить)
    this.setState({
      news: arrNews //Передадим в наш state news новый массив arrNews
    }); 
  };

  //Функция которая будет изменять Новость
  updateBlock = (text, index) => {
    let arrNews = this.state.news;
    arrNews[index] = text;
    console.log(arrNews)
    this.setState({
      news: arrNews
    });
  };
  
  render() {
  	const listNews = this.state.news.map((item, index) => { //С помощью метода map будем выводить компонент News (столько раз сколько записей в самом массиве объектов News)
			return <News
                //С помощью атрибутов прокинем данные (state) для доступа к этим данным через props из массива item (в который передали массив объектов News)
				        key={index} //Данный атрибут нужен для React (согласно документации)
                index={index} //Данный атрибут нужен чтобы мы могли брать конкретный блок (экземпляр нашего компонента)
				        id={item.id} 
				        description={item.description}
                updateNews={this.updateBlock}
                deleteNews={this.deleteBlock} //В качестве атрибута пердадим функция deleteBlock (чтобы она была доступна компоненту News через props)
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


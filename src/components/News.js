import React, { Component } from 'react';
import _ from 'lodash';
class News extends Component {

    constructor(props) {
        super(props)
        this.state={
            news: [
                {
                    id: 1,
                    description: 'новость 1',
                    edit: false //Данное состояние нужно чтобы отслеживать редактируем ли новость
                },
                {
                    id: 2,
                    description: 'новость 2',
                    edit: false
                }
            ]
        }
    };

    //Кнопка Редактировать
    handleEditNews = () => {
        this.setState({
            edit: !this.state.edit //Вернем противоположное значение состояния edit (если true тогда изменим классы для элементов в новости)
        });
    };

    //Кнопка Сохранить
    handleSaveNews = () => {
        this.setState({
            edit: !this.state.edit
        });
    };

    render() {

        //С помощью метода map берем массив объектов news
        const listNews = this.state.news.map((item, index) => {
            return <div key={index} className="news">
                        <p>{item.description}</p>
                        <button onClick={this.handleEditNews} className={this.state.edit ? 'edit-active': ''}>Редактировать</button>
                        <button onClick={this.handleDeleteNews}  className={this.state.edit ? 'edit-active': ''}>Удалить</button>
                        <textarea className={this.state.edit ? 'active-edit-news': 'no-active-edit-news'} placeholder="Изменить новость"></textarea>
                        <button onClick={this.handleSaveNews} className={this.state.edit ? 'active-edit-news': 'no-active-edit-news'}>Сохранить</button>
                    </div>
        });

        return (
            <div className="wrapper-news">
                {listNews}
            </div>
        )
    }
};

export default News;
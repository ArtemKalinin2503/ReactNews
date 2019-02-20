import React, { Component } from 'react';
import _ from 'lodash';
class News extends Component {

    constructor(props) {
        super(props)
        this.state={
            edit: false //Состояние для отслеживания (редактируем ли мы запись или нет)
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
        let inputEditNews = this.refs.newEditNews.value; //С помощью ref (ссылка) получим значение (value) teatarea
        this.props.updateNews(inputEditNews, this.props.index)
        this.setState({
            edit: !this.state.edit //Вернем противоположное значение состояния edit (если true тогда изменим классы для элементов в новости)
        });

    };

    //Кнопка Удалить
    handleDeleteNews= () => {
        this.props.deleteNews(this.props.index); //Вызывыем функцию deleteBlock (которую мы передали в атрибут deleteNews)
    }

    render() {
        return (
            <div className="wrapper-news">
                <p>{this.props.description}</p> {/*Данные доступны благодаря переданнуму state из компонента App в атрибутах*/}
                <button onClick={this.handleEditNews} className={this.state.edit ? 'edit-active': ''}>Редактировать</button>
                <button onClick={this.handleDeleteNews}  className={this.state.edit ? 'edit-active': ''}>Удалить</button>
                <textarea ref="newEditNews" className={this.state.edit ? 'active-edit-news': 'no-active-edit-news'} placeholder="Изменить новость"></textarea>
                <button onClick={this.handleSaveNews} className={this.state.edit ? 'active-edit-news': 'no-active-edit-news'}>Сохранить</button>
            </div>
        )
    }
};

export default News;
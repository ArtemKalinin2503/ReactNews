import React, { Component } from 'react';
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
        let inputEditNews = this.refs.newEditNews.value; //С помощью ref (ссылка) получим значение (value) teaxtarea
        this.props.updateNews(inputEditNews, this.props.index) //Вызовим функцию updateBlock которую мы передали в атрибут updateNews (в качестве параметров передаем value textarea и index элемента (чтобы изменялось значение только конкретного блока с новостями))
        this.setState({
            edit: !this.state.edit //Вернем противоположное значение состояния edit (если true тогда изменим классы для элементов в новости)
        });

    };

    //Кнопка Удалить
    handleDeleteNews= () => {
        this.props.deleteNews(this.props.index); //Вызывыем функцию deleteBlock (которую мы передали в атрибут deleteNews)
    };

    render() {
        return (
            <div className="wrapper-news">
                <p className="news-text">{this.props.description}</p> {/*Данные доступны благодаря переданнуму state из компонента App в атрибутах*/}
                <button onClick={this.handleEditNews} className={this.state.edit ? 'btn-news-edit edit-active': 'btn-edit btn-news-edit'}>Редактировать</button>
                <button onClick={this.handleDeleteNews}  className={this.state.edit ? 'btn-news-delete edit-active': 'btn-news btn-news-delete'}>Удалить</button>
                <textarea ref="newEditNews" className={this.state.edit ? 'active-edit-news input-edit-news': 'no-active-edit-news input-edit-news'} placeholder="Изменить новость"></textarea>
                <button onClick={this.handleSaveNews} className={this.state.edit ? 'active-edit-news btn-save': 'no-active-edit-news btn-save'}>Сохранить</button>
            </div>
        )
    }
};

export default News;
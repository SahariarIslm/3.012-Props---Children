import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const firstBook = {
    title:'A Letter From Your Teacher: On the Last Day',
    author:'Shannon Olsen',
    img:"https://images-na.ssl-images-amazon.com/images/I/61AqjgMxpLL._AC_UL604_SR604,400_.jpg"
};
const secondBook = {
    title:'I Love You to the Moon and Back',
    author:'Amelia Hepworth',
    img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
};
function BookList(){
    return (
        <section className='booklist'> 
            <Book 
                img={firstBook.img} 
                title={firstBook.title} 
                author={firstBook.author} 
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus quasi exercitationem voluptatum ad ipsum est deleniti perferendis eius provident!</p>
            </Book>
            <Book 
                img={secondBook.img} 
                title={secondBook.title} 
                author={secondBook.author}  
            />
        </section>
    );
}

const Book = (property) =>{
    const {img,title,author,children} = property;
    console.log(property);
    return <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        {children}
    </article>
};

ReactDOM.render(<BookList/>,document.getElementById('root'));
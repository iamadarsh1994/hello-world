const Book = ({title, cover, author}) => {
    return (
<section> 
    <img src={cover} alt={title} />
    <h2>{title}</h2>   
    <p>By {author}</p>
    </section>
);
};

export default Book;
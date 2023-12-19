import { Link, useMatch } from "react-router-dom";


const CustomLink = ({children, to}) => {

    const match = useMatch({
      path: to,
      end: to.length === 1, // Чиним хедер( например в About мы зашли во вложенный роут, и тогда из-за изминения ссылки слово about в хедере пропадает active)
    })
    
  return (
    <Link 
        to={to}
        style={{
            color: match ? 'var(--orange)' : 'white',
        }}
        >
      {children}
    </Link>
  );
};

export default CustomLink;

// Внутри компонента, вы используете useMatch(to) для определения, соответствует ли текущий маршрут (to) текущему URL.
//  Это позволяет вам изменять стиль ссылки в зависимости от того, активен ли данный маршрут.
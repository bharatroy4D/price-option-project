
const Link = ({ route }) => {
    const { name, path } = route;
    return (
        <div>
            <li className=""><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;
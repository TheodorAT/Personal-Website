import "../App.css";

interface MathCardProps {
  title: string;
  image: any;
  link: string;
}

function LinkCard({ title, image, link }: MathCardProps) {
  return (
    <div>
      <a className="menu-item" href={link}>
        <img className="small-image" src={image}></img>
        <div className="menu-title">{title}</div>
      </a>
    </div>
  );
}

export default LinkCard;

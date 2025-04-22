import "./styles/TagButton.css";

type TagButtonProps = { 
  tagName: string;
  image?: string;
  className?: string;
}

function TagButton(props: TagButtonProps) {
  const { tagName, image, className } = props;
  return (
    <div className="tag-button">
        <button className="tag-button">{tagName}</button>
        <img className={className} src={image} alt="" />
    </div>
  );
}

export default TagButton;
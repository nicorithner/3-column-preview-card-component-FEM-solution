import "./Column.scss";

type Props = {
  position?: string;
  color: string;
  icon: string;
  title: string;
  description: string;
};
export const Column = (props: Props) => {
  return (
    <>
      <div className={`column-container ${props.color} ${props.position}`}>
        <div className="icon">
          <img src={props.icon} alt="sedan icons" />
        </div>
        <div className="title">{props.title}</div>
        <p className="description">{props.description} </p>
        <button className={`learn-more-btn ${props.color}-btn`}>
          Learn More
        </button>
      </div>
    </>
  );
};

type Props = {
  icon: string;
  title: string;
  description: string;
};
export const Column = (props: Props) => {
  return (
    <>
      <div className="column-container">
        <div className="icon">
          <img src={props.icon} alt="sedan icons" />
        </div>
        <div className="title">{props.title}</div>
        <p className="description">{props.description} </p>
        <button className="learn-more">Learn More</button>
      </div>
    </>
  );
};

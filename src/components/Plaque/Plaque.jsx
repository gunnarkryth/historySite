import s from "../../pages/Page.module.scss";

export const Plaque = ({ h1, h3, children }) => {
  return (
    <hgroup>
      <div className={s.plaque}>
        <div className={s.circle}>1</div>
        <div className={s.circle}>2</div>
        <div className={s.circle}>3</div>
        <div className={s.circle}>4</div>
        <h1>{h1}</h1>
        <h3>{h3}</h3>
        {children}
      </div>
    </hgroup>
  );
};

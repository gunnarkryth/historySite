import s from "./Style.module.scss";

export const Wrapper = ({ children }) => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Center}>{children}</div>;
    </div>
  );
};

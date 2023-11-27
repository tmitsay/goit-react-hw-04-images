import css from './button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      Load More
    </button>
  );
};

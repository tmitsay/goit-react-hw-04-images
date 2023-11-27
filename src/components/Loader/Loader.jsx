import { RotatingSquare } from 'react-loader-spinner';
import css from './loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingSquare
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

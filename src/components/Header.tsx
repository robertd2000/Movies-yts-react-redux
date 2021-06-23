import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesList } from '../redux/reducer';

export const Header = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const buttonHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await dispatch(getMoviesList({ title: value, page: 1 }));
    setValue('');
  };

  return (
    <div className="webflow-style-input">
      <input
        onChange={onHandleChange}
        className=""
        type="text"
        placeholder="Movie"
      ></input>
      <button type="submit" onClick={buttonHandler}>
        &rarr;
      </button>
    </div>
  );
};

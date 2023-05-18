import axios, { AxiosResponse } from 'axios';

const baseUrl = 'http://localhost:5000';

type ToDo = {
  _id: string;
  text: string;
};

type SetToDo = (data: ToDo[]) => void;

const getAllToDo = (setToDo: SetToDo): void => {
  axios
    .get(baseUrl)
    .then(({ data }: AxiosResponse<ToDo[]>) => {
      console.log('data ---> ', data);
      setToDo(data);
    })
    .catch((err) => console.log(err));
};

const addToDo = (text: string, setText: (text: string) => void, setToDo: SetToDo): void => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText('');
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  toDoId: string,
  text: string,
  setToDo: SetToDo,
  setText: (text: string) => void,
  setIsUpdating: (isUpdating: boolean) => void
): void => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText('');
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id: string, setToDo: SetToDo): void => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };

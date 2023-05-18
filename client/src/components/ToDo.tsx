import React, { ReactElement, MouseEventHandler } from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

interface ToDoProps {
  text: string;
  updateMode: MouseEventHandler<SVGSVGElement>;
  deleteToDo: MouseEventHandler<SVGSVGElement>;
}

const ToDo: React.FC<ToDoProps> = ({ text, updateMode, deleteToDo }): ReactElement => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;

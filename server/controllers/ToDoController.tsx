const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req: any, res: any) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDo = (req: any, res: any) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data: any) => {
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  });
};

module.exports.deleteToDo = (req: any, res: any) => {
  const { _id } = req.body;

  console.log("id ---> ", _id);

  ToDoModel.findByIdAndDelete(_id).then(() =>
    res.set(201).send("Deleted Successfully...")
  );
};

module.exports.updateToDo = (req: any, res: any) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text }).then(() =>
    res.set(201).send("Updated Successfully...")
  );
};

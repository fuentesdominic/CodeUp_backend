const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const AuthRouter = require("./routes/AuthRouter");
const TaskRouter = require("./routes/TaskRouter");
const UserTaskRouter = require("./routes/UserTaskRouter");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", AuthRouter);
app.use("/tasks", TaskRouter);
app.use("/usrtasks", UserTaskRouter);

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));

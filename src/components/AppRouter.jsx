import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import TaskChange from "../pages/TaskChange";
import Tasks from "../pages/Tasks";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Tasks />} />
      <Route path="/taskschange" element={<TaskChange />} />
      <Route path="*" element={<Tasks />} />
    </Routes>
  );
};

export default AppRouter;

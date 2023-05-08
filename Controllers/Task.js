import Task from '../model/Task.js';

export const CreateTask = async(req, res, next) => {
    try {
        const {id} = req.user;
        const completeDate = new Date(req.body.date);
        const task = new Task({...req.body, userId: id, date: completeDate});
        const saveTask = await task.save();
        return res.status(201).json({task:saveTask})
    } catch (error) {
        next(err);
    }
}
export const UpdateTask = async(req, res, next) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, {...req.body}, {new: true});
        return res.status(201).json({task});
    } catch (error) {
        next(err);
    }
}
export const getTask = async(req, res, next) => {
    try {
        
    } catch (error) {
        next(err);
    }
}
export const getTasks = async(req, res, next) => {
    try {
        
    } catch (error) {
        next(err);
    }
}
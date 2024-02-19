import { Router } from 'express'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { changeTaskStatus, createTask, deleteTask, editTask, getBacklogTasks, getDoneTasks, getHighPriorityTask, getLowPriorityTask, getModeratePriorityTask, getOverdueTasksCount, getProgressTasks, getTaskById, getTasks, getTodoTasks, toggleChecklistItem } from '../controllers/task.controller.js'

const router = Router()

router.post('/newTask', verifyJWT, createTask)
router.patch('/editTask/:taskId', verifyJWT, editTask)
router.delete('/deleteTask/:taskId', verifyJWT, deleteTask)
router.patch('/toggleCheck/:taskId/:checklistId', verifyJWT, toggleChecklistItem)
router.patch('/change-status/:taskId', verifyJWT, changeTaskStatus)
router.get('/sort', verifyJWT, getTasks)
router.get('/status/backlog', verifyJWT, getBacklogTasks)
router.get('/status/progress', verifyJWT, getProgressTasks)
router.get('/status/todo', verifyJWT, getTodoTasks)
router.get('/status/done', verifyJWT, getDoneTasks)
router.get('/priority/high', verifyJWT, getHighPriorityTask)
router.get('/priority/low', verifyJWT, getLowPriorityTask)
router.get('/priority/moderate', verifyJWT, getModeratePriorityTask)
router.get('/:taskId', getTaskById)
router.get('/all/dueTasks', verifyJWT, getOverdueTasksCount)

export default router
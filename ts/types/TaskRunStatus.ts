export type TaskRunStatusType = 'queued' | 'started' | 'running' | 'succeeded' | 'failed' | 'timed_out'

export class TaskRunStatus {
    status: TaskRunStatusType;
    status_datetime: Date;
}

export default TaskRunStatus;

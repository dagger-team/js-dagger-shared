export enum TaskRunStatusTypes {
    queued = 'queued',
    started = 'started',
    running = 'running',
    succeeded = 'succeeded',
    failed = 'failed',
    timed_out = 'timed_out'
}

export class TaskRunStatus {
    status: TaskRunStatusTypes;
    status_datetime: Date;
}

export default TaskRunStatus;

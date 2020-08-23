import { TaskRunStatusType } from './TaskRunStatus';

export default class TaskRun {
    readonly _version: number = 1;

    readonly task_name: string;
    readonly id: string;

    status: TaskRunStatusType;

    input? = {};
    output? = {};
    metadata? = {};
    logs? = {};

    language = 'javascript';
    system = 'unknown';

    // Server controlled parameters
    created_at?: Date;
    updated_at?: Date;
    latest_status_datetime?: Date;
    customer_id?: number;

    constructor(task_name: string, id: string, initialStatus: TaskRunStatusType = 'started') {
        this.task_name = task_name;
        this.id = id;
        this.status = initialStatus;
    }
}

/**
 * @type TaskRunStaticParameters
 * @description Parameters that are static, and set by the shared types library
 */
export type TaskRunStaticParameters = '_version'

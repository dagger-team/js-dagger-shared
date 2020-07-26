class TaskRun {
    readonly _version: number = 1;

    task_name: string;
    id: string;

    input = {};
    output = {};
    metadata = {};

    // TODO: These are enums
    language = 'javascript';
    system = 'unknown';

    created_at?: Date;
    updated_at?: Date;

    constructor(task_name: string, id: string) {
        this.task_name = task_name;
        this.id = id;
    }
}

export default TaskRun;

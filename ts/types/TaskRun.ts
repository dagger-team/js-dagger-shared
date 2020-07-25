class TaskRun {
    readonly _version: number = 1;

    task_name: string;
    id: string;

    input: object;
    output: object;
    metadata: object;

    // TODO: These are enums
    language: string;
    system: string;

    created_at: Date;
    updated_at: Date;
}

export default TaskRun;

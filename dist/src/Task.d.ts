export default interface Task {
    id: string;
    taskGroupId: string;
    name: string;
    worker: string;
    workgroup?: string;
    key?: string;
    remainingAttempts?: number;
    isPaused?: boolean;
    isComplete: boolean;
    runAfter?: string;
    isSeed?: boolean;
    errorDelayInSeconds?: number;
    input?: any;
    output?: any;
    errors?: string[];
    createdAt: string;
}
//# sourceMappingURL=Task.d.ts.map
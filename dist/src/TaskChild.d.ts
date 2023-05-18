export default interface TaskChild {
    id: string;
    name: string;
    worker: string;
    workgroup?: string;
    key?: string;
    remainingAttempts?: number;
    isPaused?: boolean;
    runAfter?: string;
    errorDelayInSeconds?: number;
    input?: any;
    parentIds?: string[];
}
//# sourceMappingURL=TaskChild.d.ts.map
import HttpWorker from '../src/HttpWorker';
import TaskResponse from '../src/TaskResponse';
export default class WorkerA extends HttpWorker {
    name: string;
    id: string;
    executeTask(data: any): Promise<TaskResponse>;
    prepare(): Promise<void>;
    cleanup(): Promise<void>;
}
//# sourceMappingURL=WorkerA.d.ts.map
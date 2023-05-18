import HttpWorker from '../src/HttpWorker';
import TaskResponse from '../src/TaskResponse';
export default class WorkerB extends HttpWorker {
    name: string;
    id: string;
    executeTask(data: any): Promise<TaskResponse>;
}
//# sourceMappingURL=WorkerB.d.ts.map
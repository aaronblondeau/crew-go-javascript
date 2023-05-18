import HttpWorker from '../src/HttpWorker';
import TaskResponse from '../src/TaskResponse';
export default class WorkerC extends HttpWorker {
    name: string;
    id: string;
    executeTask(data: any): Promise<TaskResponse>;
}
//# sourceMappingURL=WorkerC.d.ts.map
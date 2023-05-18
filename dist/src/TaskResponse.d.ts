import TaskChild from './TaskChild';
export default interface TaskResponse {
    output?: any;
    children?: TaskChild[];
    childrenDelayInSeconds?: number;
    workgroupDelayInSeconds?: number;
    error?: any;
}
//# sourceMappingURL=TaskResponse.d.ts.map
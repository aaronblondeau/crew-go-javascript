import HttpWorker from '../src/HttpWorker'
import TaskResponse from '../src/TaskResponse'

// This worker is here as an example, and for testing only - do not deploy

export default class WorkerB extends HttpWorker {
  name = "Worker B"
  id = "worker-b"

  public async executeTask (data: any): Promise<TaskResponse> {
    console.log(this.name + " executeTask called!")
    if (data && data.throw) {
      throw new Error(data.throw)
    } else {
      await new Promise((resolve, reject) => {setTimeout(resolve, 2000)})
      return {output: {"message": "Worker B did it!", "at": new Date() + ''}}
    }
  }
}

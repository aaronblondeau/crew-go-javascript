import HttpWorker from '../src/HttpWorker'
import TaskResponse from '../src/TaskResponse'
import crypto from 'crypto'

// This worker is here as an example, and for testing only - do not deploy

export default class WorkerC extends HttpWorker {
  // Use crazy chars in name to test JSON encoding
  name = "Worker \' C"
  id = "worker-c"

  public async executeTask (data: any): Promise<TaskResponse> {
    console.log(this.name + " executeTask called!")
    if (data && data.throw) {
      throw new Error(data.throw)
    } else {
      await new Promise((resolve, reject) => {setTimeout(resolve, 2000)})
      const aId = "A-" + crypto.randomBytes(8).toString('hex')
      const bId = "B-" + crypto.randomBytes(8).toString('hex')
      const cId = "C-" + crypto.randomBytes(8).toString('hex')
      const dId = "D-" + crypto.randomBytes(8).toString('hex')

      return {output: {message: "Worker C \' did it!"}, childrenDelayInSeconds: 60, children: [
          {
            id: aId,
            worker: 'worker-a',
            input: {'child': 'A'},
            key: 'same_key',
            name: 'Child A'
          },
          {
            id: bId,
            parentIds: [aId],
            worker: 'worker-a',
            input: {'child': 'B'},
            key: 'same_key',
            name: 'Child B'
          },
          {
            id: cId,
            parentIds: [aId],
            worker: 'worker-b',
            input: {'child': 'C'},
            name: 'Child C'
          },
          {
            id: dId,
            parentIds: [bId, cId],
            worker: 'worker-a',
            input: {'child': "D oh' no a single quote! And a double quote \" too!"},
            //input: {'child': "D"},
            name: 'Child \' " D Quotes'
          }
        ]
      }
    }
  }
}

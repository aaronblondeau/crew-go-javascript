// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

import HttpWorkerGroup from '../src/HttpWorkerGroup'
import WorkerServer from '../src/WorkerServer'

const server = new WorkerServer()

import WorkerA from './WorkerA'
import WorkerB from './WorkerB'
import WorkerC from './WorkerC'

const group = new HttpWorkerGroup([
  new WorkerA(),
  new WorkerB(),
  new WorkerC()
], server)
export default group
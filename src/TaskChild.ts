// When a task returns a continuation, each child must follow this interface
export default interface TaskChild {
  id: string
  name: string
  worker: string
  workgroup?: string
  key?: string
  remainingAttempts?: number
  isPaused?: boolean
  runAfter?: string
  errorDelayInSeconds?: number
  input?: any
  parentIds?: string[]
}

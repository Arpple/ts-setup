export type SomeFn = () => boolean
export type SomeAsyncFn = () => Promise<boolean>

export const doSomething = (service: SomeFn): boolean => service()
export const doSomethingAsync = (service: SomeAsyncFn): Promise<boolean> => service()

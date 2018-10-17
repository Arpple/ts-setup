export interface SomeService {
    doSomething(): boolean
}

export interface SomeAsyncService {
    doSomething(): Promise<boolean>
}

export const doSomething = (service: SomeService): boolean => service.doSomething()

export const doSomethingAsync = (service: SomeAsyncService): Promise<boolean> => service.doSomething()
import { makeAutoObservable } from "mobx";

class ContentStore {
    content = null;
    constructor() {
        makeAutoObservable(this)
    }
    setContent(content) {
        this.content = content
        console.log(this.content);
    }
}

export const Store = new ContentStore()
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  getItems(key: string) {
    const todoItems: any = localStorage.getItem(key);
    return JSON.parse(todoItems);
  }

  getItemById(id: string) {
    const todoItems: any = localStorage.getItem("todos");
    const convert = JSON.parse(todoItems);

    const itemById = convert.find((item: any) => item.id === id);
    return itemById;
  }

  addItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

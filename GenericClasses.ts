class Cart<T> {
  private items: T[] = [];

  addItem(item: T) {
    this.items.push(item);
  }

  removeItem(): T | undefined {
    return this.items.pop();
  }

  getItems(): T[] {
    return this.items;
  }
}
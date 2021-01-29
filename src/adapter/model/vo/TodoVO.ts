class TodoVO {
  constructor(
    readonly id: number,
    readonly author: string,
    readonly content: string,
    readonly deadline: string,
    readonly isLate: boolean
  ) {}
}

export default TodoVO;

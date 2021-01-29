abstract class Controller<Gateway> {
  constructor(protected readonly gateway: Gateway) {};
}

export default Controller;

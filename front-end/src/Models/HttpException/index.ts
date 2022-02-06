class HttpException extends Error {
  constructor(
    public statuscode: number, 
    public message: string
  ) {
    super(message);
  }
}

export default HttpException;

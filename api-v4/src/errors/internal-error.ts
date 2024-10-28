import HttpError from "./http-error";

class InternalError extends HttpError{
    constructor(status: number, message: string = "Internal Server Error"){
        super(500, message);
        this.status = status
        this.name = "InternalError";
    }
}

export default InternalError;
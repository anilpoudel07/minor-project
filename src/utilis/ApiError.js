
class ApiError extends Error{
   constructor(statusCode, message="Something went wrong",error=[],
   stack = "")
{
(this.statusCode=statusCode),
        (this.message=message),
        (this.sucess=false),
        (this.error=error)
    }
}
export {ApiError};

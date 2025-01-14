
class ApiError extends Error{
constructor(this.statusCode, this.message, this.data)
    {
    
    }
}


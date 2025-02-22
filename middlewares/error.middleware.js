const errorMiddleware = (err,req,res,next) => {
	try {
		let error = {...err};

		error.message = err.message;

		res.status(error.statusCode || 500).json({
			success: false,
			error: error.message || "Server Error"
		});
		console.error(err);
	} catch (error) {
		next(error);
	}
}

export default errorMiddleware;
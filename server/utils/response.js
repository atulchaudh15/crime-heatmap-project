// Success Response

export const sendSuccess = (res, message = 'Success', data = {}) => {
  res.status(200).json({
     success: true,
     message, 
     data 
    });
};

// Error Response

export const sendError = (res, message = 'Something went wrong', code = 500) => {
  res.status(code).json({
     success: false, 
     message 
    });
};

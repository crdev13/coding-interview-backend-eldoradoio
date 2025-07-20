import Joi from 'joi';

export const validationErrorFormatter = (err: any) => {
    return {
        errors: err.details.map((detail: Joi.ValidationErrorItem) => ({
            field: detail.context?.key,
            message: formatMessage(detail),
        })),
    };
};

const formatMessage = (detail: Joi.ValidationErrorItem) => {
    const { type, context } = detail;
    const field = context?.key;

    if (type === 'any.required') return `Field "${field}" is required`;
    if (type === 'number.positive')
        return `Field "${field}" cannot be negative`;

    return detail.message;
};

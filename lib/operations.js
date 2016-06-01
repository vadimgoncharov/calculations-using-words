const OP_TYPES = {
    plus: 'plus',
    minus: 'minus',
    times: 'times',
    dividedBy: 'dividedBy',
};

const operation = (rightNumber, operationType) => {
    return leftNumber => {
        switch (operationType) {
            case OP_TYPES.plus:
                return leftNumber + rightNumber;
            
            case OP_TYPES.minus:
                return leftNumber - rightNumber;
            
            case OP_TYPES.times:
                return leftNumber * rightNumber;
            
            case OP_TYPES.dividedBy:
                if (rightNumber !== 0) {
                    return leftNumber / rightNumber;
                }
                else {
                    throw new RangeError(`${leftNumber} can't be dividedBy 0`);
                }
        }
    };
};

const plus      = rightNumber => operation(rightNumber, OP_TYPES.plus);
const minus     = rightNumber => operation(rightNumber, OP_TYPES.minus);
const times     = rightNumber => operation(rightNumber, OP_TYPES.times);
const dividedBy = rightNumber => operation(rightNumber, OP_TYPES.dividedBy);

module.exports = {
    plus,
    minus,
    times,
    dividedBy,
};

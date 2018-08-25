const controller = {
    getAllUsers : (req, res, next) => {
        res.send({
            message: 'Get all users'
        });
    },

    searchUsers : () => {
        res.send({
            message: 'Search users'
        });
    },

    getOneUser : () => {
        res.send({
            message: 'Get one user'
        });
    },

    createUser : () => {
        res.send({
            message: 'Save one user'
        });
    },

    deleteAllUsers : () => {
        res.send({
            message: 'Remove all users'
        });
    },

    deleteOneUser : () => {
        res.send({
            message: 'Remove one user'
        });
    },

    updateOneUser : () => {
        res.send({
            message: 'Update one user'
        });
    }
}

module.exports = controller;
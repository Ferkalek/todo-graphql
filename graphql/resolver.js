const Todo = require('../models/todo');

const users = [{
    name: 'Kat',
    mail: 'ket@gmail.com',
}, {
    name: 'Devid',
    mail: 'devid@gmail.com',
}, {
    name: 'Elizabet',
    mail: 'elizabet@gmail.com',
}];

module.exports = {
    data() {
        return {
            users,
            company: {
                companyName: 'DASC',
                phone: '+1 320 329 230'
            }
        }
    },
    random({min, max, count}) {
        const arr = [];

        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }

        return arr;
    },

    addTestUser({user: {name}}) {
        const user = {
            name,
            mail: `${name}_@mail.ru`
        };
        users.push(user);
        return user;
    },

    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (e) {
            throw new Error('Fetch todos is not available');
        }
    },

    async createTodo({todo}) {
        try {
            const newTodo = await Todo.create({
                title: todo.title,
                done: false,
            });
            return newTodo
        } catch (e) {
            throw new Error('Title is required');
        }
    },

    async completeTodo({id}) {
        try {
            const todo = await Todo.findByPk(id);
            todo.done = true;
            await todo.save();
            return todo;
        } catch (e) {
            throw new Error('ID is required');
        }
    },

    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({
                where: {id}
            });
            await todos[0].destroy();
            return true;
        } catch (e) {
            throw new Error('ID is required');
            return false;
        }
    },
};
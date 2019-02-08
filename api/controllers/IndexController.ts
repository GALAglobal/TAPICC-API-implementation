declare var Job, Input, Task, Account;


module.exports = {
    'index': (req, res) => {
        let JobsCount, InputsCount, TasksCount, AccountsCount;
        Job.count()
        .then((val) => {
            JobsCount = val;
            return Input.count();
        })
        .then((val) => {
            InputsCount = val;
            return Task.count();
        })
        .then((val) => {
            TasksCount = val;
            return Account.count();
        })
        .then((val) => {
            AccountsCount = val;
            res.json({
                serverStatus: 'online',
                JobsCount,
                InputsCount,
                TasksCount,
                AccountsCount
            });
        })
    }
}
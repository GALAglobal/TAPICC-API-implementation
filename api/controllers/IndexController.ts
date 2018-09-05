declare var Job, Asset, Task, Account;


module.exports = {
    'index': (req, res) => {
        let JobsCount, AssetsCount, TasksCount, AccountsCount;
        Job.count()
        .then((val) => {
            JobsCount = val;
            return Asset.count();
        })
        .then((val) => {
            AssetsCount = val;
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
                AssetsCount,
                TasksCount,
                AccountsCount
            });
        })
    }
}
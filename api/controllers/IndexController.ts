declare var Job, Asset, Task;


module.exports = {
    'index': (req, res) => {
        let JobsCount, AssetsCount, TasksCount;
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
            res.json({
                serverStatus: 'online',
                JobsCount,
                AssetsCount,
                TasksCount
            })
        })
    }
}